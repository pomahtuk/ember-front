import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('projects',   {path:'/projects' });
  this.resource('project.new',  {path:'/projects/new'});
  this.resource('project',      {path:'/project/:project_id'}, function(){
    this.route('edit',   {path: '/edit'});

    // nested goals
    this.resource('goals',  {path: '/goals'});
    this.resource('goal.new',  {path:'/goal/new'});

    // nested experiments
    this.resource('experiments',  {path: '/experiments'});
    this.resource('experiments.new',  {path:'/experiment/new'});
    this.resource('experiment', {path: '/experiment/:experiment_id'}, function() {
        this.route('edit',   {path: '/edit'});
    });

  });

  this.route('login');
  this.route('sign-in');
  this.route('sign-up');
});

export default Router;
