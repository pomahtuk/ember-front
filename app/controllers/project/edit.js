import Ember from 'ember';

export default Ember.Controller.extend({
  isCreateAction: false,
  actions: {
    save: function(){
      var project = this.get('model');
      project.save();
      this.transitionToRoute('project', project);
    },
  	cancel: function () {
      var project = this.get('model');
      this.transitionToRoute('project', project);
  	}
  }
});
