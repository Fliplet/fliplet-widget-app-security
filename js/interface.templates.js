this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.hook"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "selected ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "              <option "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " selected ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"panel panel-default\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"panel-heading ui-sortable-handle\">\n    <h4 class=\"panel-title\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"screen-reorder-handle\">\n        <i class=\"fa fa-ellipsis-v\"></i><i class=\"fa fa-ellipsis-v\"></i>\n      </div>\n      <span class=\"fa fa-chevron-right\"></span>\n      <span class=\"panel-title-text\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n    </h4>\n    <a href=\"#\"><span class=\"icon-delete fa fa-trash\"></span></a>\n  </div>\n\n  <div id=\"collapse-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"panel-collapse collapse\">\n    <div class=\"panel-body\">\n\n      <div class=\"form-group\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"sso_logout_url\">Rule name</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <input data-name=\"hookName\" type=\"text\" class=\"form-control\" placeholder=\"My hook name\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" required/>\n          <h6>A unique identifier name for your rule .</h6>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"hookType\">Apply hook on:</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <label for=\"hookType\" class=\"select-proxy-display\">\n            <span class=\"icon fa fa-chevron-down\"></span>\n            <span class=\"select-value-proxy\">Select a type</span>\n            <select data-name=\"hookType\" data-label=\"select\" class=\"hidden-select form-control\" required>\n              <option value=\"beforePageView\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.beforePageView : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">&mdash; Before page view &mdash;</option>\n              <option value=\"beforeDataSourceQuery\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.beforeDataSourceQuery : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">&mdash; Before data source query &mdash;</option>\n            </select>\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix filter-type\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"filterType\">Filter type</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <label for=\"filterType\" class=\"select-proxy-display\">\n            <span class=\"icon fa fa-chevron-down\"></span>\n            <span class=\"select-value-proxy\">Select a type</span>\n            <select data-name=\"filterType\" data-label=\"select\" class=\"hidden-select form-control\" required>\n              <option value=\"blacklist\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.blacklist : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">&mdash; Blacklist &mdash;</option>\n              <option value=\"whitelist\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.whitelist : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">&mdash; Whitelist &mdash;</option>\n            </select>\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix pages\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"pages\">Pages</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <select class=\"selectpicker\" data-width=\"auto\" multiple>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </select>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix requirement\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"requirement\">Requirement</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <label for=\"requirement\" class=\"select-proxy-display\">\n            <span class=\"icon fa fa-chevron-down\"></span>\n            <span class=\"select-value-proxy\">Select a type</span>\n            <select data-name=\"requirement\" data-label=\"select\" class=\"hidden-select form-control\" required>\n              <option value=\"saml2\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.saml2 : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">&mdash; SAML2 &mdash;</option>\n              <option value=\"dataSource\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dataSource : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">&mdash; Data source &mdash;</option>\n              <option value=\"custom\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.custom : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">&mdash; Custom condition &mdash;</option>\n            </select>\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"sso_logout_url\">Error message</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" data-name=\"errorMessage\" value=\""
    + alias4(((helper = (helper = helpers.errorMessage || (depth0 != null ? depth0.errorMessage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"errorMessage","hash":{},"data":data}) : helper)))
    + "\" required/>\n          <h6>An error message to present to the user when the hook is rejecting.</h6>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix custom-condition\">\n        <div class=\"col-sm-4 control-label\">\n          <label for=\"sso_logout_url\">Custom condition</label>\n        </div>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" data-name=\"customCondition\" value=\""
    + alias4(((helper = (helper = helpers.customCondition || (depth0 != null ? depth0.customCondition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customCondition","hash":{},"data":data}) : helper)))
    + "\" required/>\n          <h6>A custom condition set by you that will trigger the error.</h6>\n        </div>\n      </div>\n\n      <div class=\"form-group clearfix\">\n        <div class=\"col-sm-12\">\n          <h3>Action on error</h4>\n          <div class=\"onErrorAction\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});