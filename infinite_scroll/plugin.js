Selectize.define('infinite_scroll', function(opts) {
  var self = this;
  var options = $.extend({scrollRatio: 0.85, scrollStep: 20}, opts);

  this.setup = (function() {
    var original = self.setup;
    return function() {
      original.apply(this, arguments);

      var dropdown_content = self.$dropdown_content;
      var original_maxOptions = self.settings.maxOptions;

      self.$dropdown_content.on('scroll', function(e) {
        var scrollPosition = (dropdown_content.scrollTop() + dropdown_content.innerHeight()) / dropdown_content[0].scrollHeight;
        if (scrollPosition > options.scrollRatio && self.settings.maxOptions < self.currentResults.total) {
          self.settings.maxOptions += options.scrollStep;
          self.refreshOptions();
        }
      });

      self.on('type', function (e) {
        self.settings.maxOptions = original_maxOptions;
        self.refreshOptions();
      });
    };
  })();
});
