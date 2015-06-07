import angular from 'angular'
import PARSE_KEYS from 'config/parse.auth';
const PARSE_API = 'https://api.parse.com/1/classes/comics';

class ParseService {
	constructor ($http) {
		this._$http = $http;
	}
	
	.factory("ApiFactory", ["$q", "$http", "key1", "key2", function($q, $http, key1, key2) {
		
	  $http.defaults.headers.common['X-Parse-Application-Id'] = 'dtauSPmJtWaPoU4moKlB8cYsaJ9pCOMe9lCJ8uAI';
	  $http.defaults.headers.common['X-Parse-REST-API-Key'] = '5alcHZLioBtHsTcwT6wpqQ3yWoYUsfy8oO2RDeCz';
	  $http.defaults.headers.common['Content-Type'] = 'application/json';	
	  	return {
	     getData: function() {
	       var deferred = $q.defer();
	       $http.get(apiUrl).success(function(result) {
	      	 deferred.resolve(result);
	         })
	         .error(function(result) { deferred.reject(result); 
	         });
	         return deferred.promise;
	       },
	  	createData: function(comment) {
    		$http.post(apiUrl, comment).success(function(status){
    			return status;
    		});		
    	}
	    };    
	}]);	
}
ParseSErvice.$inject = ['$http'];

export default angular.module('gstv.services.parse', [])
  .service('ParseService', ParseService)
  .config(config);