import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('experiments', function() {
    this.route('index', {path: '/'});
    this.route('show', { path: '/:experiment_id' });
    this.route('edit', { path: '/:experiment_id/edit' });
    this.route('create', { path: '/:experiment_id/new' });
  });
});

export default Router;
