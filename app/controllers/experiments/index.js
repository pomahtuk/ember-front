import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['dateCreated'],
  sortAscending: true // false for descending
});
