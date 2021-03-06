import privateRoute from 'tracking-server-ember/routes/private-route';

export default privateRoute.extend({
  model: function (params, transition) {
  	// this will solve circular dependency in autogenerated view
  	var targetParams = transition.params['experiment'];
    return this.store.find('experiment', targetParams.experiment_id);
  }
});
