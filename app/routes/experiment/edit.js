import privateRoute from 'tracking-server-ember/routes/private-route';

export default privateRoute.extend({
  model: function (params, transition) {
  	// this will solve empty model on second edit
  	var targetParams = transition.params['experiment'];
    return this.store.find('experiment', targetParams.experiment_id);
  }
});
