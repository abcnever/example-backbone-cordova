define(function(require) {
  "use strict";
  var $, Backbone, template, tpl, _;
  $ = require("jquery");
  _ = require("underscore");
  Backbone = require("backbone");
  tpl = require("text!tpl/EmployeeList.html");
  template = _.template(tpl);
  return Backbone.View.extend({
    initialize: function() {
      this.render();
      this.collection.on("reset", this.render, this);
    },
    render: function() {
      this.$el.html(template({
        employees: this.collection.toJSON()
      }));
      return this;
    }
  });
});
