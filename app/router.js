import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('experiments', function() {
    this.route('index', {path: '/'});
    this.route('show', { path: '/:experiment' });
    this.route('edit', { path: '/:experiment/edit' });
  });
});

export default Router;
