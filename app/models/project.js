import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

var Project;

Project = DS.Model.extend({
  name          : attr('string'),
  description   : attr('string'),
  tag           : attr('string'),

  experiments   : hasMany('experiment')
});

export default Project;