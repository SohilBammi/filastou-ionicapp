angular.module('starter')
    .controller('TourGuideSettingsTabCtrl', function ($scope, $ionicPopup, $location) {
      $scope.switch = function () {
    		$location.path('/tourist-tabs/tourist/profile');
    	};

  });