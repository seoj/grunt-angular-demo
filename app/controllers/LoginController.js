angular.module('login').controller('LoginController', function(loginService)
{
   var vm = this;

   vm.form = {};
   vm.form.username = null;
   vm.form.password = null;
   vm.login = login;
   vm.message = {};
   vm.message.content = null;
   vm.message.style = null;

   function login()
   {
      if (loginService.login(vm.form))
      {
         vm.message.content = 'Login successful';
         vm.message.style = 'success';
      }
      else
      {
         vm.message.content = 'Invalid username or password';
         vm.message.style = 'error';
      }
   }
});