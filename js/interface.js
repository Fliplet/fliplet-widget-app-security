var data = Fliplet.Widget.getData() || {};
data.hooks = data.hooks || {};

// TODO: For now we will pick just the first hook
var rule = {
  hooks: {},
  pages: [],
  filterType: null,
  requirement: null,
  errorMessage: null
};

// Preload data
var hooksNames = Object.keys(data.hooks);
if (hooksNames.length) {
  rule = data.hooks[hooksNames[0]];
  rule.pages = rule.pages || [];
  $('#name').val(hooksNames[0]);
  $('#filterType').val(rule.filterType);
  $('#requirement').val(rule.requirement);
  $('#errorMessage').val(rule.errorMessage);
} 
updateSelectText($('#requirement'));
updateSelectText($('#filterType'));

Fliplet().then(function () {
  Fliplet.Pages.get().then(function (pages) {
    var contextPages = pages.map(function(page) {
      page.selected = rule.pages.indexOf(page.id) > -1;
      return page;
    });
    var pagesHtml = Fliplet.Widget.Templates['templates.pages']({pages: contextPages});
    $('#pages').html(pagesHtml);
    $('.selectpicker').selectpicker('render');
  });
  
  $('form').submit(function (event) {
    event.preventDefault();

    // Unset retreived hooks right after set them back
    Promise.all(Object.keys(data.hooks).map(function(hook) {
      return Fliplet.App.Hooks.unset(hook);
    }))
    .then(function () {
        // Reset hooks to set them back again on the instance settings
      data.hooks = {};

      // Get selected pages
      var pages =[];
      $.each($(".selectpicker option:selected"), function() {
        pages.push(Number($(this).val()));
      });
      
      // TODO: We are setting only one for now
      var hookName = $('#name').val() || 'My Hook ' + (new Date()).getTime().toString().substring(9);
      $('#name').val(hookName);
      data.hooks[hookName] = {
        filterType: $('#filterType').val(),
        requirement: $('#requirement').val(),
        errorMessage: $('#errorMessage').val(),
        pages: pages
      };

      Fliplet.Widget.save(data).then(function () {
        return Promise.all(Object.keys(data.hooks).map(function (name) {
          var script = compile(data.hooks[name]);
          return Fliplet.App.Hooks.set(name, { script: script, run: ['beforePageView'] });
        }))   
      })
      .then(function () {
        Fliplet.Widget.complete();
      })
      .catch(function(reason) {
        console.log(reason);
      });
    });
  });

  // Fired from Fliplet Studio when the external save button is clicked
  Fliplet.Widget.onSaveRequest(function () {
    $('form').submit();
  });

  Fliplet.Widget.autosize();
});

function compile(hook) {
  var comparison = hook.filterType === 'whitelist' ? '>' : '===';
  return 'if ([' + hook.pages + '].indexOf(page.id) ' + comparison + ' -1 && !session.passports.' + hook.requirement + ') { error = "' + hook.errorMessage + '"}';
}

function updateSelectText($el) {
  var selectedText = $el.find('option:selected').text();
  $el.parents('.select-proxy-display').find('.select-value-proxy').html(selectedText);
}

$('#filterType, #requirement').on('change', function () {
  updateSelectText($(this));
});
