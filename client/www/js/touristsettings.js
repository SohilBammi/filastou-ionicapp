angular.module('starter')
    .controller('TouristSettingsTabCtrl', function ($scope, $ionicPopup, $location) {
      $scope.switch = function () {
    		$location.path('/tourguide/profile');
    	};

  });