import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('experiment', {});
  },

  renderTemplate: function(){
    // do i need this?
    this.render('experiment.edit', {
      controller: 'experiments/create'
    });
  },
  
  actions: {
    willTransition: function(transition) {
      var model = this.get('currentModel');
      if (model && model.get('isDirty')) {
        if (confirm("You have unsaved changes. Click OK to stay on the current page. Click cancel to discard these changes and move to the requested page.")) {
          //Stay on same page and continue editing
          transition.abort();
        } else {
          //Delete created record
          var experiment = this.get('currentModel');
          experiment.deleteRecord();
          experiment.save();
        }
      } 
    }
  }
});