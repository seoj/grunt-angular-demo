var VALID_USERNAME = 'test_user';
var VALID_PASSWORD = 'abcd1234';

angular.module('login').service('loginService', function()
{
   var service = this;

   service.login = login;

   function login(form)
   {
      return form.username == VALID_USERNAME && form.password == VALID_PASSWORD;
   }
});