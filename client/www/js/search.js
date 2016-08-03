angular.module('starter')
    .controller('TouristSearchTabCtrl', function ($scope, Tour, Filuser, $ionicPopup, $location) {
        Tour.find({limit: 5})
                .$promise
                .then(function (res) {
                    $scope.tours = res;
                }, function (err) {
                    console.log('Error inside Search Function');
                });

  });
