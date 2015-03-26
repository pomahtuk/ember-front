import peivateRoute from 'tracking-server-ember/routes/private-route';

export default peivateRoute.extend({
  model: function () {
  	// return this.modelFor('projects.show').get('experiments');
    return this.store.find('experiment');
  }
});
