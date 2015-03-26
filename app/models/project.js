import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

var Project;

Project = DS.Model.extend({
  name          : attr('string'),
  description   : attr('string'),
  domain        : attr('string'),
  createdAt     : attr('date'),
  updatedAt     : attr('date'),

  experiments   : hasMany('experiment')
});

export default Project;