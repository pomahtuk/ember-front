import DS from 'ember-data';

var Goal,
  attr = DS.attr;

// var goalSchema = new Schema({
//   name          : { type: String,   required: true, trim: true },
//   description   : { type: String,   required: true, trim: true },
//   dateCreated   : { type: Date,     required: true, default: Date.now }
// });

Goal = DS.Model.extend({
  name          : attr('string'),
  description   : attr('string'),
  tag           : attr('string'),
  dateCreated   : attr('date')
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