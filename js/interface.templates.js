this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.hook"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "New security rule";
},"5":function(container,depth0,helpers,partials,data) {
    return "selected ";
},"7":function(container,depth0,helpers,partials,data) {
    return "(Available on Private and above)";
},"9":function(container,depth0,helpers,partials,data) {
    return "(Available on Enterprise Silver plan and above)";
},"11":function(container,depth0,helpers,partials,data) {
    return "(Available on Enterprise only)";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                  <option "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return " selected ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"panel panel-default accordion"
    + alias4(((helper = (helper = helpers.accordion || (depth0 != null ? depth0.accordion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accordion","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"panel-heading ui-sortable-handle\">\r\n    <h4 class=\"panel-title\" data-toggle=\"collapse\" data-parent=\"#accordion"
    + alias4(((helper = (helper = helpers.accordion || (depth0 != null ? depth0.accordion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accordion","hash":{},"data":data}) : helper)))
    + "\" data-target=\"#collapse-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n      <span class=\"fa fa-chevron-right\"></span>\r\n      <span class=\"panel-title-text\">\r\n        <span class=\"requirement\"></span>\r\n        <span class=\"textDefault\">\r\n          "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n        </span>\r\n      </span>\r\n    </h4>\r\n    <a href=\"#\"><span class=\"icon-delete fa fa-trash\"></span></a>\r\n  </div>\r\n\r\n  <div id=\"collapse-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"panel-collapse collapse\">\r\n    <div class=\"panel-body\">\r\n\r\n      <div class=\"form-group clearfix requirement\">\r\n        <div class=\"col-sm-4 control-label\">\r\n          <label for=\"requirement\">Required security condition</label>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n          <label for=\"requirement\" class=\"select-proxy-display\">\r\n            <span class=\"icon fa fa-chevron-down\"></span>\r\n            <span class=\"select-value-proxy\">-- Select a condition</span>\r\n            <select data-name=\"requirement\" data-label=\"select\" class=\"hidden-select form-control\" required>\r\n              <option value=\"\">-- Select a condition</option>\r\n              <option data-name=\"Data Source\" value=\"dataSource\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dataSource : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Require Email/SMS/Data Source verification</option>\r\n              <option data-name=\"Fliplet Login\" value=\"flipletLogin\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.flipletLogin : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Require a valid Fliplet login</option>\r\n              <option data-name=\"Custom Condition\" value=\"custom\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.custom : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Write my own condition "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.appSecurityFeatures : depth0)) != null ? stack1.custom : stack1),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</option>\r\n              <option data-name=\"SAML2\" value=\"saml2\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.saml2 : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Require a valid SAML2 login "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.appSecurityFeatures : depth0)) != null ? stack1.saml2 : stack1),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</option>\r\n              <option data-name=\"Inherit Condition\" value=\"inherit\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.inherit : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Inherit security rule(s) from another app "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.appSecurityFeatures : depth0)) != null ? stack1.inherit : stack1),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"callout callout-warning callout-upgrade callout-sm hidden\">\r\n        <div class=\"callout-body\">\r\n          <h4>This feature is not available on your app plan.</h4>\r\n          <p class=\"description\">Explore our plans and upgrade to unlock this feature</p>\r\n        </div>\r\n        <div class=\"btn btn-warning upgrade-plan\">Upgrade</div>\r\n      </div>\r\n\r\n      <div class=\"form-group clearfix appSelect hidden\">\r\n        <div class=\"col-sm-4 control-label\">\r\n          <label for=\"app-select\">Select the app</label>\r\n        </div>\r\n\r\n        <div class=\"appSelect spinner-holder animated\">\r\n          <div class=\"spinner-overlay\">Loading...</div>\r\n          <p>Loading...</p>\r\n        </div>\r\n\r\n        <div class=\"col-sm-8 changeText hidden\">\r\n          <p class=\"form-control-static\"><span>"
    + alias4(((helper = (helper = helpers.inheritAppName || (depth0 != null ? depth0.inheritAppName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inheritAppName","hash":{},"data":data}) : helper)))
    + "</span> - <a href=\"#\" data-change-app>Change</a></p>\r\n        </div>\r\n\r\n        <div class=\"selectField hidden\">\r\n          <div class=\"col-sm-8\">\r\n            <label for=\"app-select\" class=\"select-proxy-display\">\r\n              <select data-name=\"app-select\" data-label=\"select\" class=\"hidden-select form-control\" disabled required>\r\n                <option value=\"\">-- Select an app</option>\r\n              </select>\r\n              <span class=\"icon fa fa-chevron-down\"></span>\r\n              <span class=\"select-value-proxy\">-- Select an app</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group clearfix custom-condition\" data-panel-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n        <div class=\"col-sm-4 control-label\">\r\n          <label for=\"sso_logout_url\">Custom condition</label>\r\n          <p class=\"help-block\">See <a href=\"https://developers.fliplet.com/App-security.html#custom-security-rules\" target=\"_blank\">documentation</a> to learn more.</p>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n          <textarea class=\"form-control\" id=\"codeEditor"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-editor-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-name=\"customCondition\" rows=\"8\">"
    + alias4(((helper = (helper = helpers.customCondition || (depth0 != null ? depth0.customCondition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customCondition","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"protect-app\">\r\n        <div class=\"form-group clearfix filter-type\">\r\n          <div class=\"col-sm-4 control-label\">\r\n            <label for=\"filterType\">How do you want to protect your app?</label>\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"radio radio-icon\">\r\n              <input type=\"radio\" id=\"blacklist_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-type=\"filterType\" data-name=\"filterType_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"filterType_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\"blacklist\">\r\n              <label for=\"blacklist_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n                <span class=\"check\"><i class=\"fa fa-circle\"></i></span> Protect only the following screens...\r\n              </label>\r\n            </div>\r\n            <div class=\"radio radio-icon\">\r\n              <input type=\"radio\" id=\"whitelist_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-type=\"filterType\" data-name=\"filterType_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"filterType_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\"whitelist\">\r\n              <label for=\"whitelist_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n                <span class=\"check\"><i class=\"fa fa-circle\"></i></span> Protect all your app's screens except the following...\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"pages\">\r\n          <div class=\"form-group clearfix pages-blacklist hidden\">\r\n            <div class=\"col-sm-4 control-label\">\r\n              <label for=\"pages\">Select the screens you want to protect</label>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"selectpicker\" multiple>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group clearfix pages-whitelist hidden\">\r\n            <div class=\"col-sm-4 control-label\">\r\n              <label for=\"pages\">Select the screens that do not need security</label>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"selectpicker\" multiple>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group clearfix linkProvider\">\r\n          <div class=\"col-sm-12\">\r\n            <h3><small>If the required condition above is not met, which screen should the user be redirected to?</small></h3>\r\n            <div class=\"onErrorAction\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});