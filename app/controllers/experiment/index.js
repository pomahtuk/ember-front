import Ember from 'ember';

export default Ember.ObjectController.extend({
	deleteMode: false,

	actions: {
    delete: function(){
      // our delete method now only toggles deleteMode's value
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      // set deleteMode back to false
      this.set('deleteMode', false);
    },
		confirmDelete: function(){
			var experiment = this.get('model');
			experiment.deleteRecord();
			experiment.save();
			this.transitionToRoute('experiments');
			this.set('deleteMode', false);
		}
	}
});