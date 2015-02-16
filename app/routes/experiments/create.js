import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('experiment', {});
  },

  renderTemplate: function(){
    this.render('experiment.edit', {
      controller: 'experiments/create'
    });
  }
});