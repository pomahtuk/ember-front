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
  dateCreated   : attr('date'),
  variants      : attr({
    columns: attr('array')
  })
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
      dateCreated   : (new Date()).toString(),
      variants      : {
        columns: [
          ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
          ['base', 0.1, 0.09, 0.08, 0.09, 0.11, 0.10],
          ['variant 1', 0.12, 0.08, 0.09, 0.10, 0.10, 0.12]
        ]
      }
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
      dateCreated   : (new Date()).toString(),
      variants      : {
        columns: [
          ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
          ['base', 30, 200, 100, 400, 150, 250],
          ['variant 1', 50, 20, 10, 40, 15, 25]
        ]
      }
    },
  ]
});

export default Experiment;
