angular.module('starter')
    .controller('TouristSearchTabCtrl', function ($scope, Tour, Filuser, $ionicPopup, $location) {
        $scope.getId = function(id) {
          console.log(id);  
        };

        Tour.find({filter: {limit:10}})
                .$promise
                .then(function (res) {
                    $scope.tours = res;
                }, function (err) {
                    console.log('Error inside Search Function');
                });

  });
