import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('goal', {
  // Specify the other units that are required for this test.
  needs: ['model:project', 'model:experiment']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
