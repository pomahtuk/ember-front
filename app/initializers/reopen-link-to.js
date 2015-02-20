import Ember from 'ember';

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
}

// export default {
//   name: 'reopen-link-to',
//   initialize: initialize
// };

export default {
  name: 'link-to-configuration',
  initialize: function() {
    Ember.LinkView.reopen({
      init: function() {
        this._super();
        var self = this;
        Ember.keys(this).forEach(function(key) {
          if (key.substr(0, 5) === 'data-') {
            self.get('attributeBindings').pushObject(key);
          }
        });
      }
    });
  }
};
