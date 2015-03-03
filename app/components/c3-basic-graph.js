/* global c3, d3 */

import Ember from 'ember';

export default Ember.Component.extend({
  /**
  Element tag name
  */
  tagName: 'div',

  /**
  Element classes
  */
  classNames: ['c3-basic-graph'],

  /**
  The data to display
  */
  data: {},

  /**
   Graph settings
   */
  settings: {},

  /**
  */
  _chart: undefined,

  /**
  The Chart
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

  /**
   * configuration generation function
  */
  _config: function() {
    var self = this,
      data = self.get('data'),
      settings = self.get('settings'),
      resultingSet;

    // using empty object as default values
    resultingSet = {
      data: data,
      // binding to an element
      bindto: self.get('element'),
      axis: settings.axis || {},
      regions: settings.regions || {},
      bar: settings.bar || {},
      pie: settings.pie || {},
      donut: settings.donut || {},
      gauge: settings.gauge || {},
      grid: settings.grid || {},
      legend: settings.legend || {},
      tooltip: settings.tooltip || {},
      subchart: settings.subchart || {},
      zoom: settings.zoom || {},
      size: settings.size || {},
      padding: settings.padding || {},
      color: settings.color || {},
      transition: settings.transition || {}
    };

    return resultingSet;
    // we need data and setting properties to be set
  }.property(
    'data',
    'settings'
  ),

  /**
  Data Observer
  */
  dataDidChange: function() {
    var chart = this.get('chart');
    chart.load(this.get('data'));
  }.observes('data').on('didInsertElement')

});

// defaults i am aiming to
// {
//   "bindto":"#BookingGraph_C3_1",
//   "axis":{
//     "y":{
//       "tick":{},
//       "padding":{
//         "bottom":0.03,
//         "unit":"ratio"
//       }
//     },
//     "x":{
//       "type":"timeseries",
//       "min":1425283980000,
//       "max":1425287640000,
//       "tick":{
//         "fit":false
//       }
//     }
//   },
//   "transition":{
//     "duration":0
//   },
//   "tooltip":{
//     "format":{}
//   },
//   "point":{
//     "show":false
//   },
//   "legend":{
//     "position":"inset",
//     "inset":{
//       "anchor":"top-right"
//     }
//   },
//   "data":{}
// }