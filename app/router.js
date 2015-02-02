import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('experiments', function() {
    this.route('create', { path: '/new' });
    this.resource('experiment', {path: '/:experiment_id'}, function() {
	    this.route('edit',   { path: '/edit' });
    });
  });
});

export default Router;
