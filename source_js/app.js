
var app =angular.module('myapp', ['ngRoute','Controllers', 'myServices','ngStorage']);
app.config(['$routeProvider' , function($routeProvider) {
  $routeProvider.
    when('/', {
    templateUrl: 'index.html',
    controller: 'myFirstController'
    }).
  otherwise({
    redirectTo: '/'
  });
   
   
    

}]);
