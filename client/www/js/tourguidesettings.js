angular.module('starter')
    .controller('TourguideSettingsTabCtrl', function ($scope, $ionicPopup, $location) {
      $scope.switch = function () {
    		$location.path('/tourguide/profile');
    	};

  });