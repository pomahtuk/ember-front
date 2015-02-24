import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['dateCreated'],
  sortAscending: true, // false for descending
  totalText: function() {
    return 'All Experiments' + ' (' + this.get('model').content.length + ')';
  }.property('model')
});
