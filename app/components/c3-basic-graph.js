/* global c3, $ */

import Ember from 'ember';

export default Ember.Component.extend({
  /*
   * Element tag name
   */
  tagName: 'div',

  /*
   * Element classes
   */
  classNames: ['c3-basic-graph'],

  /*
   * The data to display
   */
  data: {},

  /*
   * Defaulte settings
   */
  defaults: {
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m-%d'
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

  defaultData: {
    type: 'spline',
    x: 'x'
  },

  _chart: undefined,

  /*
   * The Chart
   */
  chart: function() {
    if (Ember.isEqual(this.get('_chart'), undefined)) {
      // Empty, create it.
      var container = this.get('element');

      if (Ember.isEqual(container, undefined)) {
        // in case that something went wrong
        return undefined;
      } else {
        // getting the config
        var config = this.get('_config'),
          // actually generating chart
          chart = c3.generate(config);

        // updating the component
        this.set('_chart', chart);
        return chart;
      }
    } else {
      // Editor is already created and cached.
      return this.get('_chart');
    }
  }.property('element', '_config'),

  /*
   * Configuration generation function
   */
  _config: function() {
    var data = this.get('data'),
      defaultData = this.get('defaultData'),
      defaults = this.get('defaults'),
      resultingSet, resultingData;

    resultingData = $.extend(defaultData, data);

    resultingSet = $.extend({
      data: resultingData,
      bindto: this.get('element')
    }, defaults);

    return resultingSet;
  }.property(
    'data',
    'defaultData',
    'defaults'
  ),

  /*
   * Initial initialization
   */
  didInsertElement: function() {
    // cunstruct C3 graph
    this.get('chart');
  },

  /*
   * Data Observer
   */
  dataDidChange: function() {
    var chart = this.get('chart');
    chart.load(this.get('data'));
  }.observes('data').on('didInsertElement')

});