import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('projects', {path:'/projects' }, function() {
    this.route('new');
  });
  // this.resource('projects.new', {path:'/projects/new'});
  this.resource('project', {path:'/project/:project_id'}, function() {
    this.route('edit', {path: '/edit'});

    // nested goals
    this.resource('goals', {path: '/goals'});
    this.resource('goal.new', {path:'/goal/new'});

    // nested experiments
    this.resource('experiments', {path: '/experiments'}, function() {
      this.route('new');
    });
    this.resource('experiments.new', {path:'/experiments/new'});
    this.resource('experiment', {path: '/experiment/:experiment_id'}, function() {
      this.route('edit', {path: '/edit'});
    });

    this.route('new');
  });

  this.route('login');
  this.route('sign-in');
  this.route('sign-up');
});

export default Router;
