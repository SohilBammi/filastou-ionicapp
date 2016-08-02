angular.module('starter')
    .controller('NewTourCtrl', function ($scope, Filuser, Tour, $location, $ionicPopup) {
        console.log('Reached New Tour Ctrl');

        $scope.tourdetails = {};
        var currUser = Filuser.getCachedCurrent();
        console.log(currUser.id);

        $scope.createTour = function () {
            $scope.tourdetails.startTime = new Date().toJSON();
            $scope.tourdetails.endTime = new Date().toJSON();
            $scope.tourdetails.tourguideId = currUser.id;
            var tour = Tour.create($scope.tourdetails)
                .$promise
                .then(function (res) {
                    console.log('Tour Created: '+ tour);
                    $location.path('/tourguide-tabs/tourguide/profile');
                }, function (err) {
                    console.log('Error inside Create Tour Function');
                    $scope.tourError = err;
                });
        };
        
    });