import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['dateCreated'],
  sortAscending: true, // false for descending
  totalText: function() {
    return 'All Experiments' + ' (' + this.get('model').content.length + ')';
  }.property('model'),
  graphSettings: {
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m-%d'
        }
      },
      y : {
        tick: {
          format: d3.format(',%')
        }
      }
    },
    legend: {
      position: 'inset',
      inset: {
        anchor: 'top-right'
      }
    }
  }
});
