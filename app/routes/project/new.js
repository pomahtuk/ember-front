import privateRoute from 'tracking-server-ember/routes/private-route';

export default privateRoute.extend({
  model: function(){
    return this.store.createRecord('project', {});
  },

  renderTemplate: function(){
    this.render('project.edit', {
      controller: 'project/new'
    });
  }
});