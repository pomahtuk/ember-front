import Ember from 'ember';
import $ from 'jquery';
import Base from 'simple-auth/authenticators/base';

var RSVP = Ember.RSVP;

// TODO: get server config dynamically!!!

var userAuthRequset = function(data) {
  return new RSVP.Promise(function(resolve, reject) {
    $.ajax({
      method: 'POST',
      url: 'http://laborant-pomahtuk.rhcloud.com/login',
      data: data,
      xhrFields: {
        withCredentials: true
      }
    }).success(function(data) {
      resolve(data);
    }).error(function() {
      reject('error');
    });
  });
};

export default Base.extend({
  restore: function() {
    return new RSVP.Promise(function(resolve, reject) {
      $.ajax({
        method: 'GET',
        url: 'http://laborant-pomahtuk.rhcloud.com/me',
        xhrFields: {
          withCredentials: true
        }
      }).success(function(data) {
        resolve(data);
      }).error(function() {
        reject('error');
      });
    });
  },
  authenticate: function(options) {
    return userAuthRequset({
      username: options.identification,
      password: options.password
    });
  },
  invalidate: function() {
    // data could be passed as param, stores current session data
    // logout from server
    return new RSVP.Promise(function(resolve, reject) {
      $.ajax({
        method: 'GET',
        url: 'http://laborant-pomahtuk.rhcloud.com/logout',
        xhrFields: {
          withCredentials: true
        }
      }).success(function(data) {
        resolve(data);
      }).error(function() {
        reject('error');
      });
    });
  }
});
