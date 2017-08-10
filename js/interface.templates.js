this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.hook"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "Rule "
    + container.escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"number","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return "selected ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "              <option "
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

  return "<div class=\"panel panel-default\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"panel-heading ui-sortable-handle\">\n    <h4 class=\"panel-title\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <span class=\"fa fa-chevron-right\"></span>\n      <span class=\"panel-title-text\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>\n    </h4>\n    <a href=\"#\"><span class=\"icon-delete fa fa-trash\"></span></a>\n  </div>\n\n  <div id=\"collapse-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"panel-collapse collapse\">\n    <div class=\"panel-body\">\n\n      <div class=\"form-group clearfix requirement\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"requirement\">Security type</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <label for=\"requirement\" class=\"select-proxy-display\">\n            <span class=\"icon fa fa-chevron-down\"></span>\n            <span class=\"select-value-proxy\">-- Select a type</span>\n            <select data-name=\"requirement\" data-label=\"select\" class=\"hidden-select form-control\" required>\n              <option value=\"\">-- Select a type</option>\n              <option value=\"saml2\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.saml2 : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">SAML2</option>\n              <option value=\"dataSource\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dataSource : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Data source</option>\n              <option value=\"custom\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.custom : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Custom condition</option>\n            </select>\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"hookType\">Apply...</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <label for=\"hookType\" class=\"select-proxy-display\">\n            <span class=\"icon fa fa-chevron-down\"></span>\n            <span class=\"select-value-proxy\">Select a type</span>\n            <select data-name=\"hookType\" data-label=\"select\" class=\"hidden-select form-control\" required>\n              <option value=\"\">-- Select a type</option>\n              <option value=\"beforePageView\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.beforePageView : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Before page view</option>\n              <option value=\"beforeDataSourceQuery\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.beforeDataSourceQuery : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Before data source query</option>\n            </select>\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix filter-type\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"filterType\">Filter type</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <label for=\"filterType\" class=\"select-proxy-display\">\n            <span class=\"icon fa fa-chevron-down\"></span>\n            <span class=\"select-value-proxy\">-- Select a type</span>\n            <select data-name=\"filterType\" data-label=\"select\" class=\"hidden-select form-control\" required>\n              <option value=\"\">-- Select a type</option>\n              <option value=\"blacklist\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.blacklist : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Blacklist</option>\n              <option value=\"whitelist\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.whitelist : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Whitelist</option>\n            </select>\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix pages\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"pages\">App screens</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <select class=\"selectpicker\" multiple>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </select>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"sso_logout_url\">Error message</label>\n          <p class=\"help-block\"><small>An error message to present to the user when the hook is rejecting.</small></p>\n        </div>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" data-name=\"errorMessage\" placeholder=\"Enter an error message\" value=\""
    + alias4(((helper = (helper = helpers.errorMessage || (depth0 != null ? depth0.errorMessage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"errorMessage","hash":{},"data":data}) : helper)))
    + "\" required/>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix custom-condition\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"sso_logout_url\">Custom condition</label>\n          <p class=\"help-block\"><small>A custom condition that will trigger the error.</small></p>\n        </div>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" data-name=\"customCondition\" value=\""
    + alias4(((helper = (helper = helpers.customCondition || (depth0 != null ? depth0.customCondition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customCondition","hash":{},"data":data}) : helper)))
    + "\" required/>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix\">\n        <div class=\"col-sm-12\">\n          <h3><small>Action on error</small></h3>\n          <div class=\"onErrorAction\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});