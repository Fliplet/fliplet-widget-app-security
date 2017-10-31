var $accordionContainer = $('#accordionPage');
var $accordionTwoContainer = $('#accordionQuery');
var hookTemplateId = 0; // Just a counter to have a simple unique id for each hook when rendering the template.
var onErrorActionProviders = {};
var hooks;
var pages;
var apps;
var accordionCollapsed;
var accordionTwoCollapsed;
var panelItems = 0;
var panelItemsTwo = 0;
var codeEditors = {};

function checkPanels(context) {
  if (context === 'page') {
    if (panelItems > 0) {
      $('#pageView .expand-items').addClass('show');
      $('#pageView .panels-empty').removeClass('show');
      $('#pageView .tab-spinner.spinner-holder').removeClass('animated');
      $('#pageView .controls').removeClass('hidden');
    } else {
      $('#pageView .expand-items').removeClass('show');
      $('#pageView .panels-empty').addClass('show');
      $('#pageView .tab-spinner.spinner-holder').removeClass('animated');
      $('#pageView .controls').removeClass('hidden');
    }

    $('#pageView').find('.filter-type').show();
    $('#pageView').find('.pages').show();
  }
  if (context === 'query') {
    if (panelItemsTwo > 0) {
      $('#dataSourceQuery .expand-items').addClass('show');
      $('#dataSourceQuery .panels-empty').removeClass('show');
      $('#dataSourceQuery .tab-spinner.spinner-holder').removeClass('animated');
      $('#dataSourceQuery .controls').removeClass('hidden');
    } else {
      $('#dataSourceQuery .expand-items').removeClass('show');
      $('#dataSourceQuery .panels-empty').addClass('show');
      $('#dataSourceQuery .tab-spinner.spinner-holder').removeClass('animated');
      $('#dataSourceQuery .controls').removeClass('hidden');
    }

    $('#dataSourceQuery').find('.filter-type').hide();
    $('#dataSourceQuery').find('.pages').hide();
  }

  Fliplet.Widget.autosize();
}

checkPanels('page');
checkPanels('query');

// SORTING PANELS
$('.panel-group').sortable({
  handle: ".panel-heading",
  cancel: ".icon-delete",
  tolerance: 'pointer',
  revert: 150,
  placeholder: 'panel panel-default placeholder tile',
  cursor: '-webkit-grabbing; -moz-grabbing;',
  axis: 'y',
  start: function(event, ui) {
    $('.panel-collapse.in').collapse('hide');
    ui.item.addClass('focus').css('height', ui.helper.find('.panel-heading').outerHeight() + 2);
    $('.panel').not(ui.item).addClass('faded');
  },
  stop: function(event, ui) {
    ui.item.removeClass('focus');
    $('.panel').not(ui.item).removeClass('faded');
  },
  sort: function(event, ui) {
    $('.panel-group').sortable('refresh');
  }
});

Fliplet().then(function() {
  Promise.all([
      Fliplet.App.Hooks.get(),
      Fliplet.Pages.get(),
      Fliplet.Apps.get()
    ])
    .then(function(values) {
      hooks = values[0];
      pages = values[1];
      apps = values[2];

      hooks.forEach(function(hook) {
        hook.settings = hook.settings || {};
        hook.settings.name = hook.settings.name || '';
        if (hook.settings.pages) {
          hook.settings.pages = pages.map(function(page) {
            page.selected = hook.settings.pages.indexOf(page.id) > -1;
            return page;
          });
        } else {
          hook.settings.pages = pages;
        }

        if (hook.settings.hookType && hook.settings.hookType === 'beforePageView') {
          addHookItem(hook.settings, 'page');
          return;
        }

        if (hook.settings.hookType && hook.settings.hookType === 'beforeDataSourceQuery') {
          addHookItem(hook.settings, 'query');
          return;
        }
      });

      Fliplet.Widget.autosize();
    });

});

function addHookItem(settings, accordionContext, add) {
  settings = settings || {};
  settings.pages = settings.pages || pages;
  hookTemplateId += 1;
  var accordionParent;
  if (accordionContext === 'page') {
    accordionParent = 'Page';
  } else if (accordionContext === 'query') {
    accordionParent = 'Query';
  }
  var extraContext = {
    accordion: accordionParent,
    id: hookTemplateId,
    beforeDataSourceQuery: settings.hookType === 'beforeDataSourceQuery',
    beforePageView: settings.hookType === 'beforePageView',
    whitelist: settings.filterType === 'whitelist',
    blacklist: settings.filterType === 'blacklist',
    saml2: settings.requirement === 'saml2',
    dataSource: settings.requirement === 'dataSource',
    flipletLogin: settings.requirement === 'flipletLogin',
    custom: settings.requirement === 'custom',
    inherit: settings.requirement === 'inherit'
  };
  var context = $.extend({}, settings, extraContext);
  var $hook = $(Fliplet.Widget.Templates['templates.hook'](context));
  if (accordionContext === 'page') {
    $accordionContainer.append($hook);
  } else if (accordionContext === 'query') {
    $accordionTwoContainer.append($hook);
  }

  if (accordionContext === 'page') {
    panelItems = $('#accordionPage .panel').length;
    checkPanels(accordionContext);
  } else if (accordionContext === 'query') {
    panelItemsTwo = $('#accordionQuery .panel').length;
    checkPanels(accordionContext);
  }

  settings.onErrorAction = settings.onErrorAction || {};
  settings.onErrorAction.action = settings.onErrorAction.action || 'screen';
  settings.onErrorAction.page = settings.onErrorAction.page || 'none';
  settings.onErrorAction.transition = settings.onErrorAction.transition || 'slide.left';
  settings.onErrorAction.options = {
    hideAction: true
  };
  onErrorActionProviders[hookTemplateId] = Fliplet.Widget.open('com.fliplet.link', {
    selector: '.tab-pane [data-id=' + hookTemplateId + '] .onErrorAction',
    data: settings.onErrorAction,
    closeOnSave: false
  });

  codeEditors[hookTemplateId] = CodeMirror.fromTextArea(document.getElementById('codeEditor' + hookTemplateId), {
    height: "150px",
    mode: 'htmlmixed',
    lineNumbers: true,
    autoRefresh: true,
    lineWrapping: true
  });

  apps.forEach(function(app) {
    if (app.id !== Fliplet.Env.get('appId')) {
      $hook.find('.selectField select').append('<option data-name="' + app.name + '" value="' + app.id + '">' + app.name + '</option>');
    }
  });
  $hook.find('.selectField select').removeAttr('disabled');

  $hook.find('.hidden-select').change();
  $hook.find('.selectpicker').selectpicker('render');
  if (settings.filterType) {
    $hook.find('input[value="' + settings.filterType + '"]').prop("checked", true).trigger('change');
  } else {
    $hook.find('input[value="blacklist"]').prop("checked", true).trigger('change');
  }

  if (add) {
    $hook.find('.panel-collapse').collapse('toggle');
  }

  if (!settings.inheritAppId && !settings.inheritAppName) {
    $hook.find('.appSelect.spinner-holder').removeClass('animated');
    $hook.find('.selectField').removeClass('hidden');
  } else {
    var hasAccessToApp = _.find(apps, function(app) {
      return app.id === parseInt(settings.inheritAppId, 10);
    });

    if (hasAccessToApp) {
      $hook.find('.appSelect.spinner-holder').removeClass('animated');
      $hook.find('.selectField select option[value="' + settings.inheritAppId + '"]').prop('selected', true);
      updateSelectText($hook.find('.selectField select'));
      $hook.find('.selectField').removeClass('hidden');
    } else {
      $hook.find('.appSelect.spinner-holder').removeClass('animated');
      $hook.find('.changeText').removeClass('hidden');
    }
  }
}

function updateSelectText(el) {
  var selectedText = $(el).find('option:selected').text();
  $(el).parents('.select-proxy-display').find('.select-value-proxy').html(selectedText);
}

// Listeners
$(document)
  .on('click', '.icon-delete', function() {
    var context;
    var $item = $(this).closest("[data-id], .panel");
    var id = $item.data('id');
    var deleteConfirmation = confirm("Are you sure you want to delete this rule?");
    if ($item.parents('.panel-group').is('#accordionPage')) {
      context = 'page';
    } else if ($item.parents('.panel-group').is('#accordionQuery')) {
      context = 'query';
    }

    if (deleteConfirmation) {
      $item.remove();
      delete onErrorActionProviders[id];

      if (context === 'page') {
        panelItems = $('#accordionPage .panel').length;
        checkPanels('page');
      } else if (context === 'query') {
        panelItemsTwo = $('#accordionQuery .panel').length;
        checkPanels('query');
      }
    }
  })
  .on('change', '[data-name="requirement"]', function() {
    var value = $(this).val();
    var text = $('option[value="' + value + '"]').data('name');
    if (text) {
      $(this).parents('.panel').find('.panel-title-text .requirement').html(text);
      $(this).parents('.panel').find('.panel-title-text .textDefault').addClass('hidden');
    }
    updateSelectText(this);
  })
  .on('show.bs.collapse', '.panel-collapse', function() {
    $(this).siblings('.panel-heading').find('.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down');
    Fliplet.Widget.autosize();
  })
  .on('hide.bs.collapse', '.panel-collapse', function() {
    $(this).siblings('.panel-heading').find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-right');
    Fliplet.Widget.autosize();
  })
  .on('shown.bs.collapse hidden.bs.collapse', '.panel-collapse', function() {
    Fliplet.Widget.autosize();
  })
  .on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
    Fliplet.Widget.autosize();
  })
  .on('change', '[data-name="requirement"]', function() {
    var id = $(this).closest('.panel').find('.custom-condition').data('panel-id');

    if ($(this).val() === 'custom') {
      $(this).closest('.panel').find('.custom-condition').show();
      if (codeEditors[id]) {
        codeEditors[id].refresh();
      }
      $(this).closest('.panel').find('.linkProvider').addClass('hidden');
      $(this).closest('.panel').find('.protect-app').removeClass('hidden');
    }

    if ($(this).val() !== 'custom') {
      $(this).closest('.panel').find('.custom-condition').hide();
      $(this).closest('.panel').find('.linkProvider').removeClass('hidden');
      $(this).closest('.panel').find('.protect-app').removeClass('hidden');
    }

    // If Inherit option
    if ($(this).val() === 'inherit') {
      $(this).closest('.panel').find('.appSelect').removeClass('hidden');
      $(this).closest('.panel').find('.linkProvider').addClass('hidden');
      $(this).closest('.panel').find('.protect-app').addClass('hidden');
      $(this).closest('.panel').find('.linkProvider').addClass('hidden');
    }

    // no option selected
    if ($(this).val() === '') {
      $(this).closest('.panel').find('.appSelect').addClass('hidden');
      $(this).closest('.panel').find('.linkProvider').addClass('hidden');
      $(this).closest('.panel').find('.custom-condition').hide();
    }
  })
  .on('change', '[data-type="filterType"]', function() {
    var value = $(this).val();

    if (value === 'blacklist') {
      $('.pages-blacklist').removeClass('hidden');
      $('.pages-whitelist').addClass('hidden');
      return;
    }

    if (value === 'whitelist') {
      $('.pages-whitelist').removeClass('hidden');
      $('.pages-blacklist').addClass('hidden');
      return;
    }
  })
  .on('click', '#pageView .expand-items', function() {
    var $panelCollapse = $(this).parents('#pageView').find('.panel-collapse.in');
    // Update accordionCollapsed if all panels are collapsed/expanded
    if (!$panelCollapse.length) {
      accordionCollapsed = true;
    } else if ($panelCollapse.length == $(this).parents('#pageView').find('.panel-collapse').length) {
      accordionCollapsed = false;
    }

    if (accordionCollapsed) {
      expandAccordion();
    } else {
      collapseAccordion();
    }
  })
  .on('click', '#dataSourceQuery .expand-items', function() {
    var $panelCollapse = $(this).parents('#dataSourceQuery').find('.panel-collapse.in');
    // Update accordionCollapsed if all panels are collapsed/expanded
    if (!$panelCollapse.length) {
      accordionTwoCollapsed = true;
    } else if ($panelCollapse.length == $(this).parents('#dataSourceQuery').find('.panel-collapse.in').length) {
      accordionTwoCollapsed = false;
    }

    if (accordionTwoCollapsed) {
      expandAccordionTwo();
    } else {
      collapseAccordionTwo();
    }
  })
  .on('click', '[data-change-app]', function() {
    $(this).parents('.changeText').addClass('hidden');
    $(this).parents('.changeText').siblings('.selectField').removeClass('hidden');
  });

function expandAccordion() {
  accordionCollapsed = false;
  $('#accordionPage .panel-collapse').collapse('show');
}

function collapseAccordion() {
  accordionCollapsed = true;
  $('#accordionPage .panel-collapse').collapse('hide');
}

function expandAccordionTwo() {
  accordionTwoCollapsed = false;
  $('#accordionQuery .panel-collapse').collapse('show');
}

function collapseAccordionTwo() {
  accordionTwoCollapsed = true;
  $('#accordionQuery .panel-collapse').collapse('hide');
}

$('.new-hook-page').on('click', function() {
  addHookItem({}, 'page', true);
});

$('.new-hook-query').on('click', function() {
  addHookItem({}, 'query', true);
});

Fliplet.Widget.onSaveRequest(function() {
  var newHooks = [];

  // Create a hook for each panel
  $('[data-id]').each(function() {
    var id = $(this).data('id');
    var context = $(this).hasClass('accordionPage') ? 'page' : 'query';

    var filterType = $(this).find('input[name="filterType_' + id + '"]:checked').val();
    var requirement = $(this).find('[data-name="requirement"]').val();

    var editorId = $(this).find('[data-name="customCondition"]').data('editor-id');
    var customCondition = codeEditors[editorId].getValue();
    var inheritAppId = $(this).find('[data-name="app-select"]').val();
    var inheritAppName = $(this).find('[data-name="app-select"] option[value="' + inheritAppId + '"]').data('name');

    // Get selected pages
    var pages = [];
    if (filterType === 'blacklist') {
      $.each($(this).find(".pages-blacklist .selectpicker option:selected"), function() {
        pages.push(Number($(this).val()));
      });
    }
    if (filterType === 'whitelist') {
      $.each($(this).find(".pages-whitelist .selectpicker option:selected"), function() {
        pages.push(Number($(this).val()));
      });
    }

    var hookName = 'Rule ' + id;
    var newHook = {
      name: hookName,
      settings: {
        hookType: context === 'page' ? 'beforePageView' : 'beforeDataSourceQuery',
        filterType: filterType,
        requirement: requirement,
        customCondition: customCondition,
        pages: pages,
        name: $('option[value="' + requirement + '"]').data('name') + ' - ' + $('input[value="' + filterType + '"]').data('name'),
        inheritAppId: inheritAppId,
        inheritAppName: inheritAppName
      },
      run: [$(this).parents('[data-hook-type]').data('hook-type')]
    };

    newHooks.push(newHook);
    onErrorActionProviders[id].then(function(result) {
      newHook.settings.onErrorAction = result && result.data ? result.data : {};
      newHook.script = compile(newHook.settings);
    });
  });

  var onErrorActionProvidersArray = Object.keys(onErrorActionProviders).map(function(id) {
    return onErrorActionProviders[id];
  });

  Fliplet.Widget.all(onErrorActionProvidersArray)
    .then(function() {
      return Fliplet.API.request({
        url: 'v1/apps/' + Fliplet.Env.get('appId'),
        method: 'PUT',
        data: {
          hooks: newHooks
        }
      }).then(function () {
        Fliplet.Studio.emit('widget-save-complete');
      });
    });

  onErrorActionProvidersArray.forEach(function(onErrorActionProvider) {
    onErrorActionProvider.forwardSaveRequest();
  });
});

/**
 * Given settings this creates a script that will run on the set hook.
 * @param {Object} hook
 */
function compile(hook) {
  if (hook.hookType === 'beforePageView') {
    if (hook.requirement === 'custom') {
      return hook.customCondition;
    }

    if (hook.requirement === 'inherit') {
      return 'inherit:' + hook.inheritAppId;
    }

    var comparison = hook.filterType === 'whitelist' ? '===' : '>';
    return [
      'if ([' + hook.pages + '].indexOf(page.id) ' + comparison + ' -1 && ',
      '(!session || !session.server.passports || !session.server.passports.' + hook.requirement + ')',
      hook.customCondition ? ' && ' + hook.customCondition : '',
      ')',
      '{',
      'error = "' + hook.errorMessage + '";',
      'navigate = ' + (hook.onErrorAction.action ? JSON.stringify(_.omit(hook.onErrorAction, ['files', 'options'])) : 'null') + ';',
      '}'
    ].join('');
  }

  if (hook.hookType === 'beforeDataSourceQuery') {
    if (hook.requirement === 'custom') {
      return hook.customCondition;
    }

    return [
      'if (' + '!session || !session.server.passports || !session.server.passports.' + hook.requirement + ')',
      '{',
      'error = "' + hook.errorMessage || 'Secured query' + '";',
      '}'
    ].join('');
  }
}
