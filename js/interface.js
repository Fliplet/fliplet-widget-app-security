var $accordionContainer = $('#accordionPage');
var $accordionTwoContainer = $('#accordionQuery');
var hookTemplateId = 0; // Just a counter to have a simple unique id for each hook when rendering the template.
var onErrorActionProviders = {};
var hooks;
var pages;
var accordionCollapsed;
var accordionTwoCollapsed;
var panelItems = 0;
var panelItemsTwo = 0;

function checkPanels(context) {
  if (context === 'page') {
    if (panelItems > 0) {
      $('#pageView .expand-items').addClass('show');
      $('#pageView .panels-empty').removeClass('show');
      $('#pageView .spinner-holder').removeClass('animated');
      $('#pageView .controls').removeClass('hidden');
    } else {
      $('#pageView .expand-items').removeClass('show');
      $('#pageView .panels-empty').addClass('show');
      $('#pageView .spinner-holder').removeClass('animated');
      $('#pageView .controls').removeClass('hidden');
    }

    $('#pageView').find('.filter-type').show();
    $('#pageView').find('.pages').show();
  }
  if (context === 'query') {
    if (panelItemsTwo > 0) {
      $('#dataSourceQuery .expand-items').addClass('show');
      $('#dataSourceQuery .panels-empty').removeClass('show');
      $('#dataSourceQuery .spinner-holder').removeClass('animated');
      $('#dataSourceQuery .controls').removeClass('hidden');
    } else {
      $('#dataSourceQuery .expand-items').removeClass('show');
      $('#dataSourceQuery .panels-empty').addClass('show');
      $('#dataSourceQuery .spinner-holder').removeClass('animated');
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
      Fliplet.Pages.get()
    ])
    .then(function(values) {
      hooks = values[0];
      pages = values[1];
      Object.keys(hooks).forEach(function(hookName) {
        var hook = hooks[hookName];
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

function addHookItem(settings, accordionContext) {
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
    custom: settings.requirement === 'custom'
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

  $hook.find('.hidden-select').change();
  $hook.find('.selectpicker').selectpicker('render');
  $hook.find('input[value="' + settings.filterType + '"]').prop("checked", true).trigger('change');

  settings.onErrorAction = settings.onErrorAction || {};
  settings.onErrorAction.action = settings.onErrorAction.action || 'screen';
  settings.onErrorAction.page = settings.onErrorAction.page || 'none';
  settings.onErrorAction.transition = settings.onErrorAction.transition || 'slide.left';
  settings.onErrorAction.options = {
    hideAction: true
  };
  onErrorActionProviders[hookTemplateId] = Fliplet.Widget.open('com.fliplet.link', {
    selector: '.tab-pane [data-id=' + hookTemplateId + '] .onErrorAction',
    data: settings.onErrorAction
  });


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
    var deleteConfirmation = confirm("Are you sure you want to delete this rule?");
    if ($item.parents('.panel-group').is('#accordionPage')) {
      context = 'page';
    } else if ($item.parents('.panel-group').is('#accordionQuery')) {
      context = 'query';
    }

    if (deleteConfirmation) {
      $item.remove();

      if (context === 'page') {
        panelItems = $('#accordionPage .panel').length;
        checkPanels('page');
      } else if (context === 'query') {
        panelItemsTwo = $('#accordionQuery .panel').length;
        checkPanels('query');
      }
    }
  })
  .on('keyup change paste', '[data-name="requirement"]', function() {
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
    if ($(this).val() === 'custom') {
      $(this).closest('.panel').find('.custom-condition').show();
    } else {
      $(this).closest('.panel').find('.custom-condition').hide();
    }
  })
  .on('change', '[data-type="filterType"]', function() {
    var value = $(this).val();
    var text = $('input[value="' + value + '"]').data('name');
    if (text) {
      $(this).parents('.panel').find('.panel-title-text .filterType').html(' - ' + text);
      $(this).parents('.panel').find('.panel-title-text .textDefault').addClass('hidden');
    }

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
  addHookItem({}, 'page');
});

$('.new-hook-query').on('click', function() {
  addHookItem({}, 'query');
});

Fliplet.Widget.onSaveRequest(function() {
  var newHooks = {};

  // Create a hook for each panel
  $('[data-id]').each(function() {
    var id = $(this).data('id');
    var context = $(this).hasClass('accordionPage') ? 'page' : 'query';

    var filterType = $(this).find('input[name="filterType_' + id + '"]:checked').val();
    var requirement = $(this).find('[data-name="requirement"]').val();
    var customCondition = $(this).find('[data-name="customCondition"]').val();

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

    var hookName = 'Rule ' + (new Date()).getTime().toString().substring(9);
    newHooks[hookName] = {};
    newHooks[hookName].settings = {
      hookType: context === 'page' ? 'beforePageView' : 'beforeDataSourceQuery',
      filterType: filterType,
      requirement: requirement,
      customCondition: customCondition,
      pages: pages,
      name: $('option[value="' + requirement + '"]').data('name') + ' - ' + $('input[value="' + filterType + '"]').data('name')
    };
    newHooks[hookName].run = [$(this).find('#filterType').val()];
    onErrorActionProviders[id].then(function(result) {
      newHooks[hookName].settings.onErrorAction = result && result.data ? result.data : {};
      newHooks[hookName].script = compile(newHooks[hookName].settings);
    });
  });

  Object.keys(onErrorActionProviders).map(function(id) {
    return onErrorActionProviders[id].forwardSaveRequest();
  });

  Fliplet.Widget.save();

  return Fliplet.API.request({
    url: 'v1/apps/' + Fliplet.Env.get('appId'),
    method: 'PUT',
    data: {
      hooks: newHooks
    }
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

    var comparison = hook.filterType === 'whitelist' ? '>' : '===';
    return [
      'if ([' + hook.pages + '].indexOf(page.id) ' + comparison + ' -1 && ',
      '(!session || !session.server.passports.' + hook.requirement + ')',
      hook.customCondition ? ' && ' + hook.customCondition : '',
      ')',
      '{',
      'error = "' + hook.errorMessage + '";',
      'action = ' + (hook.onErrorAction.action ? '"' + hook.onErrorAction.action + '"' : 'null') + ';',
      'payload = ' + (hook.onErrorAction.page ? '{ pageId: ' + hook.onErrorAction.page + ' }' : 'null') + ';',
      '}'
    ].join('');
  }

  if (hook.hookType === 'beforeDataSourceQuery') {
    if (hook.requirement === 'custom') {
      return hook.customCondition;
    }

    return [
      'if (' + '!session || !session.server.passports.' + hook.requirement + ')',
      '{',
      'error = "' + hook.errorMessage || 'Secured query' + '";',
      '}'
    ].join('');
  }
}
