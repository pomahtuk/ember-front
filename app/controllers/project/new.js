import Ember from 'ember';

export default Ember.ObjectController.extend({
  isCreateAction: true,
  actions: {
    save: function () {
      var project = this.get('model'),
        that = this;
      project.save().then(function() {
        that.transitionToRoute('project', project);
      });
    },
	  cancel: function () {
      var project = this.get('model');
      project.deleteRecord();
      project.save();
      this.transitionToRoute('projects');
    }    
  }
});