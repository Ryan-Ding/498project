
var app =angular.module('myapp', ['ngRoute','Controllers', 'myServices','ngStorage']);
app.config(['$routeProvider' , function($routeProvider) {
  $routeProvider.
    when('/', {
    templateUrl: 'index.html',
    controller: 'myFirstController'
    }).
    when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginController'
  }).
    when('/signup', {
    templateUrl: 'partials/signup.html',
    controller: 'SignupController'
  }).
    when('/profile', {
    templateUrl: 'partials/profile.html',
    controller: 'myFirstController'
    }).
  otherwise({
    redirectTo: '/'
  });
   
   
    

}]);
