import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('experiment', 'Experiment', {
  // Specify the other units that are required for this test.
  needs: ['model:Project']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
