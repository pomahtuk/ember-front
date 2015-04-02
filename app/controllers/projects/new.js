import Ember from 'ember';

export default Ember.Controller.extend({
  isCreateAction: true,
  actions: {
    save: function () {
      var project = this.get('model'),
        that = this;
      project.set('invisibleForList', false);
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
