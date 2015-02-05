import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params, transition) {
  	// this will solve empty model on second edit
  	var targetParams = transition.params['experiment'];
    return this.store.find('experiment', targetParams.experiment_id);
  }
});