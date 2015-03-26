import DS from 'ember-data';

var attr = DS.attr;
var belongsTo = DS.belongsTo;
var Experiment;

Experiment = DS.Model.extend({
  name          : attr('string'),
  description   : attr('string'),
  tag           : attr('string'),
  variantCount  : attr('number'),
  trackPercent  : attr('number'),
  fullOn        : attr('boolean'),
  goal          : attr('string'),
  dateCreated   : attr('date'),
  variants      : attr({
    columns: attr('array')
  }),

  project   : belongsTo('project')
});

export default Experiment;
