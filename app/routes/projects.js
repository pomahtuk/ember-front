import peivateRoute from 'tracking-server-ember/routes/private-route';

export default peivateRoute.extend({
  model: function () {
    return this.store.find('project');
  }
});
