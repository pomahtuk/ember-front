import Ember from 'ember';
import layout from '../templates/components/main-menu';

export default Ember.Component.extend({
  layout: layout,
  actions: {
    invalidateSession: function() {
      return this.get('session').invalidate();
    }
  }
});
