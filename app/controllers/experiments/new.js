import Ember from 'ember';

export default Ember.Controller.extend({
  isCreateAction: true,
  actions: {
    save: function () {
      var experiment = this.get('model'),
        that = this;
      experiment.save().then(function() {
        that.transitionToRoute('experiment', experiment);
      });
    },
	  cancel: function () {
      var experiment = this.get('model');
      experiment.deleteRecord();
      experiment.save();
      this.transitionToRoute('experiments');
    }
  }
});
