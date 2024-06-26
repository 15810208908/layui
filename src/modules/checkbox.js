/// <reference path="jquery.js" />
/**
 * form checkbox组件
 */

layui.define(['lay', 'layer', 'util', 'form'], function (exports) {
  "use strict";

  function CheckBox() {

  }
  CheckBox.prototype.render = function (options) {
    options.name = options.name || Math.round();
    var wrap = $(options.elem).attr("lay-filter", "checkbox_" + options.name), html = [];
    $.each(options.data || [], function () {
      html.push('<input type="checkbox" title="' + (this[options.textField] || this.title || "") + '" name="' + options.name + '"' + (this.checked ? " checked" : "") + (this.disabled ? " disabled" : "") + (options.indeterminate ? " indeterminate" : "") + ' value="' + (this[options.valueField] || this.value || this.id || "") + '"' + (this.skin ? ' class="lay-' + this.skin + '"' : "") + ' />');
    });
    wrap.html(html.join(''));
    var vals = options.vals;
    if (vals) {
      wrap.find('input').val(vals.constructor == String ? vals.split(",") : vals);
    }
    layui.form.render("checkbox", "checkbox_" + options.name);
  }

  var checkbox = {};
  checkbox.render = function (options) {
    return new CheckBox().render(options);
  }

  exports("checkbox", checkbox);
});


