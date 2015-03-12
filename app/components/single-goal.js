import Ember from 'ember';
import layout from '../templates/components/single-goal';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['collection-item', 'avatar'],
  layout: layout
});
