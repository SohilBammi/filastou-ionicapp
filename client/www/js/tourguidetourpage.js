angular.module('starter')
  .controller('TourGuideTourPageCtrl', function($scope, Filuser, Tour, $stateParams) {
        console.log("In TourGuide Tour Page Ctrl");
        var tourId = $stateParams.tourId;
        Tour.find({filter: {where: {id:tourId}}})
                .$promise
                .then(function (res) {
                    $scope.tour = res;
                    console.log(res);
                }, function (err) {
                    console.log('Error inside Search Function');
                });
        console.log("tourId: " + tourId);
    });