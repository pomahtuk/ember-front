import Ember from 'ember';
import $ from 'jquery';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'authenticator:custom',
  actions: {
    signup: function () {
      var self = this;
      var data = {
        username: self.get('identification'),
        password: self.get('password'),
        confirm: self.get('confirm')
      };
      $.ajax({
        method: 'POST',
        url: 'http://laborant-pomahtuk.rhcloud.com/sign-up',
        xhrFields: {withCredentials: true},
        data: data
      }).success(function() {
        self.send('authenticate');
      }).error(function() {
        console.log(arguments);
      });
    }
  }
});
