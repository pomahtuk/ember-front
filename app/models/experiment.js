import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name          : attr('string'),
  description   : attr('string'),
  tag           : attr('string'),
  variantCount  : attr('number'),
  trackPercent  : attr('number'),
  fullOn        : attr('boolean'),
  goal          : attr('string'),
  dateCreated   : attr('date')
});

  // name          : { type: String,   required: true, trim: true },
  // description   : { type: String,   required: true, trim: true },
  // tag           : { type: String,   required: true, trim: true },
  // variantCount  : { type: Number,   required: true},
  // trackPercent  : { type: Number,   required: true},
  // fullOn        : { type: Boolean,  required: true, default: false},
  // goal          : { type : Schema.ObjectId, ref : 'goal' },
  // dateCreated   : { type: Date,     required: true, default: Date.now }
