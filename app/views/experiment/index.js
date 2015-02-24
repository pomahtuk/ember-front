import laborantView from 'tracking-server-ember/views/laborant-view';

export default laborantView.extend({
  didInsertElement: function() {
  	this.$('ul.tabs').tabs();
    this.$('.modal-trigger').leanModal();
    this._super();
  }
});
