angular.module('starter')
    .controller('DashboardCtrl', function ($scope, Filuser, $ionicPopup, $location) {
      console.log("yo");
      var test = Filuser.getCachedCurrent();
      console.log(test.firstName);
      console.log("Reached DashboardCtrl");

      $scope.goToNewTour = function () {
      		console.log("reached");
            $location.path('tourguide/newtour');
        };
  });
