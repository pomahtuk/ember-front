import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['createdAt'],
  sortAscending: false,
  listProjects: function() {
    return this.get('arrangedContent').filter(function(item) {
      return item.invisibleForList !== true;
    });
  }.property('arrangedContent.@each')
});
