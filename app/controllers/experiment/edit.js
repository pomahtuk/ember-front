import Ember from 'ember';

export default Ember.Controller.extend({
  isCreateAction: false,
  actions: {
    save: function(){
      var experiment = this.get('model');
      experiment.save();
      this.transitionToRoute('experiment', experiment);
    },
  	cancel: function () {
      var experiment = this.get('model');
      this.transitionToRoute('experiment', experiment);
  	}
  }
});
