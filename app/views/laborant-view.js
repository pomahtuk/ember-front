import Ember from 'ember';

export default Ember.View.extend({
  // all common jquery functiona for all views should be declared here
  didInsertElement: function() {
  	this.$('.tooltipped').tooltip({delay: 50});
    // this.$('[data-toggle="tooltip"]').tooltip({
    //   container: 'body'
    // });
  }
});
