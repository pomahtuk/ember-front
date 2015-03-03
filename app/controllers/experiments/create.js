import Ember from 'ember';

export default Ember.ObjectController.extend({
  isCreateAction: true,
  actions: {
    save: function () {
      var experiment = this.get('model');
      experiment.save();
      this.transitionToRoute('experiment', experiment);
    },
	cancel: function () {
      var experiment = this.get('model');
      experiment.deleteRecord();
      experiment.save();
      this.transitionToRoute('experiments.index');
    }    
  }
});