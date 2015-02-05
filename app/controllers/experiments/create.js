import Ember from 'ember';

export default Ember.ObjectController.extend({
  isCreateAction: true,
  actions: {
    save: function () {
      var experiment = this.get('model');
      experiment.save();
      this.transitionToRoute('experiment', experiment);
    }
  }
});