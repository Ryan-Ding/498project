var myServices = angular.module('myServices', []);


myServices.factory('X2js', [ '$http',function($http){
       return {
           change: function(xml) {
                 var x2js = new X2JS();
                 var json = x2js.xml_str2json( xml );
                  return json;
               } 
            }
       }]);


myServices.factory('Class', ['$http',function($http){
       return {
           get: function(){
                return $http.get( 'http://courses.illinois.edu/cisapp/explorer/schedule.xml') ; 
           },          
       }
    }]);
//ss





