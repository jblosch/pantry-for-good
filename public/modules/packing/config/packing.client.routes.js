'use strict';

// Setting up routes
angular.module('packing').config(['$stateProvider',
	function($stateProvider) {
		// Packing state routing
		$stateProvider.
		state('root.packing', {
			url: 'admin/packing',
			views: {
				'content@': {
					templateUrl: 'modules/packing/views/packing.client.view.html',
					controller: 'PackingController as packingCtrl'
				}
			}
		});
	}
]);
