angular.module('starter')
  .controller('TouristTourPageCtrl', function($scope, Filuser, Tour, $stateParams) {
        console.log("In Tourist Tour Page Ctrl");
        var tourId = $stateParams.tourId;
        /*Tour.find({filter: {where: {id:tourId}}})
                .$promise
                .then(function (res) {
                    $scope.tour = res;
                    console.log(res);
                }, function (err) {
                    console.log('Error inside Tourist Tour Function');
                });*/
        Tour.find({filter: {where: {id:tourId}}}, function(res, err){
            console.log("New Tours function");
            console.log(res);
            $scope.tour = res;
        })
        var touristId = Filuser.getCachedCurrent().id;
        $scope.joinTour = function () {
            var tourists = $scope.tour[0].touristIds;
            var tourguideId = $scope.tour[0].tourguideId;
            console.log(tourists);
            console.log(tourguideId);
            if(tourguideId!=touristId){
                if(tourists==null){
                    console.log("inside");
                    tourists = [];
                    tourists[0] = touristId;
                }
                else{
                    if(tourists.indexOf(touristId)){
                        tourists[tourists.length] = touristId;
                    }
                    else{
                        console.log("Already joined");
                    }
                }

                Tour.prototype$updateAttributes({id: tourId},
                    { 
                        touristIds: tourists
                    }
                );
            }
            else{
                console.log("Lol you are the tourguide...")
            }
        };
    });