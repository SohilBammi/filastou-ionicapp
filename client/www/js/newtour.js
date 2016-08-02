angular.module('starter')
    .controller('NewTourCtrl', function ($scope, Filuser, Tour, $location, $ionicPopup) {
        console.log('Reached New Tour Ctrl');

        $scope.tourdetails = {};
        var currUser = Filuser.getCachedCurrent();
        console.log(currUser.id);

        
    });