import DS from 'ember-data';

var attr = DS.attr,
  Experiment;

  // Mongoose model:
  // name          : { type: String,   required: true, trim: true },
  // description   : { type: String,   required: true, trim: true },
  // tag           : { type: String,   required: true, trim: true },
  // variantCount  : { type: Number,   required: true},
  // trackPercent  : { type: Number,   required: true},
  // fullOn        : { type: Boolean,  required: true, default: false},
  // goal          : { type : Schema.ObjectId, ref : 'goal' },
  // dateCreated   : { type: Date,     required: true, default: Date.now }

Experiment = DS.Model.extend({
  name          : attr('string'),
  description   : attr('string'),
  tag           : attr('string'),
  variantCount  : attr('number'),
  trackPercent  : attr('number'),
  fullOn        : attr('boolean'),
  goal          : attr('string'),
  dateCreated   : attr('date')
});

Experiment.reopenClass({
  FIXTURES: [
    {
      id            : '1',
      name          : 'Buy button color',
      description   : 'Sample Experiment with buy button',
      tag           : 'buy_button_color',
      variantCount  : 2,
      trackPercent  : 100,
      fullOn        : false,
      goal          : '11111',
      dateCreated   : (new Date()).toString()
    },
    {
      id            : '2',
      name          : 'Buy button copy',
      description   : 'One common flaw we\'ve seen in many frameworks is a lack of support for truly responsive text. While elements on the page resize fluidly, text still resizes on a fixed basis. To ameliorate this problem, for text heavy pages, we\'ve created a class that fluidly scales text size and line-height to optimize readability for the user. Line length stays between 45-80 characters and line height scales to be larger on smaller screens.',
      tag           : 'buy_button_copy',
      variantCount  : 2,
      trackPercent  : 100,
      fullOn        : false,
      goal          : '22222',
      dateCreated   : (new Date()).toString()
    },
  ]
});

export default Experiment;
