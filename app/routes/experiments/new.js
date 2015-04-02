import privateRoute from 'tracking-server-ember/routes/private-route';

export default privateRoute.extend({
  model: function(){
    return this.store.createRecord('experiment', {});
  },

  renderTemplate: function(){
    this.render('experiment.edit', {
      controller: 'experiments/new'
    });
  }
});
