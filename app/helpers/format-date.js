import Ember from 'ember';

/*global moment*/

export function formatDate(date) {
  return moment(date).fromNow();
}

export default Ember.Handlebars.makeBoundHelper(formatDate);
