import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('single-experiment', 'SingleExperimentComponent', {
  // specify the other units that are required for this test
  needs: ['helper:format-date', 'component:c3-basic-graph']
});

test('it renders', function(assert) {
  assert.expect(1);
  assert.equal(true, true);

  // // creates the component instance
  // var component = this.subject();
  // assert.equal(component._state, 'preRender');

  // // renders the component to the page
  // this.render();
  // assert.equal(component._state, 'inDOM');
});
