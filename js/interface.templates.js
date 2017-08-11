this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.hook"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "Rule "
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return "selected ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <option "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return " selected ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"panel panel-default accordion"
    + alias4(((helper = (helper = helpers.accordion || (depth0 != null ? depth0.accordion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accordion","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"panel-heading ui-sortable-handle\">\n    <h4 class=\"panel-title\" data-toggle=\"collapse\" data-parent=\"#accordion"
    + alias4(((helper = (helper = helpers.accordion || (depth0 != null ? depth0.accordion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accordion","hash":{},"data":data}) : helper)))
    + "\" data-target=\"#collapse-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <span class=\"fa fa-chevron-right\"></span>\n      <span class=\"panel-title-text\">\n        <span class=\"requirement\"></span>\n        <span class=\"filterType\"></span>\n        <span class=\"textDefault\">\n          "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n        </span>\n      </span>\n    </h4>\n    <a href=\"#\"><span class=\"icon-delete fa fa-trash\"></span></a>\n  </div>\n\n  <div id=\"collapse-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"panel-collapse collapse\">\n    <div class=\"panel-body\">\n\n      <div class=\"form-group clearfix requirement\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"requirement\">Which type of security do you want to use?</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <label for=\"requirement\" class=\"select-proxy-display\">\n            <span class=\"icon fa fa-chevron-down\"></span>\n            <span class=\"select-value-proxy\">-- Select a type</span>\n            <select data-name=\"requirement\" data-label=\"select\" class=\"hidden-select form-control\" required>\n              <option value=\"\">-- Select a type</option>\n              <option data-name=\"SAML2\" value=\"saml2\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.saml2 : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">SAML2</option>\n              <option data-name=\"Data Source\" value=\"dataSource\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dataSource : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Data source</option>\n              <option data-name=\"Custom Condition\" value=\"custom\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.custom : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Custom condition</option>\n            </select>\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix custom-condition\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"sso_logout_url\">Custom condition</label>\n          <p class=\"help-block\"><small>A custom condition that will trigger the error.</small></p>\n        </div>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" data-name=\"customCondition\" value=\""
    + alias4(((helper = (helper = helpers.customCondition || (depth0 != null ? depth0.customCondition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customCondition","hash":{},"data":data}) : helper)))
    + "\" required/>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix filter-type\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"filterType\">How do you want to protect your app?</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <div class=\"radio radio-icon\">\n            <input type=\"radio\" id=\"blacklist_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-type=\"filterType\" data-name=\"Blacklist\" name=\"filterType_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\"blacklist\">\n            <label for=\"blacklist_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n              <span class=\"check\"><i class=\"fa fa-circle\"></i></span> Protect only the selected screens\n            </label>\n          </div>\n          <div class=\"radio radio-icon\">\n            <input type=\"radio\" id=\"whitelist_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-type=\"filterType\" data-name=\"Whitelist\" name=\"filterType_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\"whitelist\">\n            <label for=\"whitelist_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n              <span class=\"check\"><i class=\"fa fa-circle\"></i></span> Protect all your app's screens except the ones selected\n            </label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"pages\">\n        <div class=\"form-group clearfix pages-blacklist hidden\">\n          <div class=\"col-sm-4 control-label\">\n            <label for=\"pages\">Select the screen you want to protect</label>\n          </div>\n          <div class=\"col-sm-8\">\n            <select class=\"selectpicker\" multiple>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group clearfix pages-whitelist hidden\">\n          <div class=\"col-sm-4 control-label\">\n            <label for=\"pages\">Select the screen you want to leave unprotected</label>\n          </div>\n          <div class=\"col-sm-8\">\n            <select class=\"selectpicker\" multiple>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix\">\n        <div class=\"col-sm-12\">\n          <h3>Where should users be redirected?</h3>\n          <p>If this rule isn't met, the user will be redirected to the screen you choose.</p>\n          <div class=\"onErrorAction\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});