import DS from 'ember-data';

var Goal;
var attr = DS.attr;
var belongsTo = DS.belongsTo;


Goal = DS.Model.extend({
  name          : attr('string'),
  description   : attr('string'),
  tag           : attr('string'),
  dateCreated   : attr('date'),
  project       : belongsTo('project')
});


Goal.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Email subscribtion added',
      description: 'User subscribed to our newsletter',
      tag: 'email_subscribed',
      dateCreated: new Date()
    },
    {
      id: 2,
      name: 'Code been downloaded',
      description: 'User has downloaded our code',
      tag: 'code_downloaded',
      dateCreated: new Date()
    }
  ]
});

export default Goal;