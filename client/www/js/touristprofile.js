angular.module('starter')
    .controller('TouristProfileTabCtrl', function ($scope, Tour, Filuser, $ionicPopup, $location) {
        $scope.getId = function(id) {
          console.log(id);  
        };

        $scope.set_color = function(index) {
            if(index%4==0)
                return {'background-color':'#334e5e'};
            if(index%4==1)
                return {'background-color':'#35b39d'};
            if(index%4==2)
                return {'background-color':'#e59351'};
            if(index%4==3)
                return {'background-color':'#e3c488'};
        };

        Tour.find({filter: {limit:10}})
                .$promise
                .then(function (res) {
                    $scope.tours = res;
                }, function (err) {
                    console.log('Error inside Search Function');
                });

  });
