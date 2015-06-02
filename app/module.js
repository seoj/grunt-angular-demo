angular.module('login', ['ngRoute']).config(function($routeProvider)
{
   $routeProvider.when('/login', {
      templateUrl : 'app/templates/LoginTemplate.html',
      controller : 'LoginController',
      controllerAs : 'vm'
   });

   $routeProvider.otherwise('/login');
});