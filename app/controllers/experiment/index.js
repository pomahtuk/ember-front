/*global d3*/

import Ember from 'ember';

export default Ember.Controller.extend({
  deleteMode: false,
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
  },
  actions: {
    delete: function(){
      // our delete method now only toggles deleteMode's value
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      // set deleteMode back to false
      this.set('deleteMode', false);
    },
    confirmDelete: function(){
      var experiment = this.get('model'),
        that = this;
      this.set('deleteMode', false);
      experiment.deleteRecord();
      experiment.save().then(function() {
        that.transitionToRoute('experiments');
      });
    }
  }
});
