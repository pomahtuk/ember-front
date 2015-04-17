import privateRoute from 'tracking-server-ember/routes/private-route';

export default privateRoute.extend({
  model: function(){
    return this.store.createRecord('project', {});
  },

  // templateName: 'project/edit'

  renderTemplate: function(){
    this.render('project.create', {
      controller: 'project/new'
    });
  }
});
