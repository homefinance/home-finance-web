(function(angular) {
    'use strict';

    angular.module('homeFinanceWeb').service('RestService', RestService);

    function RestService(Restangular) {
    	var service = {};
    	service.service = function (name) {
    		var _service = Restangular.service(name);
    		return _service;
    	};
    	
    	return service;
    }

})(angular);