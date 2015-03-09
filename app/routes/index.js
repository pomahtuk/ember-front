import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function() {
    // this redirects / to /experiments
    this.transitionTo('experiments');
  }
});

