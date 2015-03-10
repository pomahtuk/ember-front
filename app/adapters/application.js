import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  defaultSerializer: DS.RESTSerializer.extend({
    serializeId: function(id) {
      return id.toString();
    }
  })
});

// export default DS.FixtureAdapter;
