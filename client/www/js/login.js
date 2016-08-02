angular.module('starter')
    .controller('LoginCtrl', function ($scope, Filuser, $location, $ionicPopup) {
        console.log('Reached Login Ctrl');
        if (Filuser.getCachedCurrent()!==null) {
           $location.path('/dashboard');
        }
        /**
         * Currently you need to initialiate the variables
         * you use whith ng-model. This seems to be a bug with
         * ionic creating a child scope for the ion-content directive
         */
        $scope.credentials = {};

        /**
         * @name showAlert()
         * @param {string} title
         * @param  {string} errorMsg
         * @desctiption
         * Show a popup with the given parameters
         */
        $scope.showAlert = function (title, errorMsg) {
            var alertPopup = $ionicPopup.alert({
                title: title,
                template: errorMsg
            });
            alertPopup.then(function (res) {
                console.log($scope.loginError);
            });
        };

        /**
         * @name login()
         * @description
         * sign-in function for users which created an account
         */
        
         $scope.login = function () {
            $scope.loginResult = Filuser.login({rememberMe: true}, $scope.credentials,
                function () {
                        var next = $location.nextAfterLogin || '/dashboard';
                        $location.nextAfterLogin = null;
                        $location.path(next);
                },
                function (err) {
                    $scope.loginError = err;
                    console.log(err);
                    $scope.showAlert(err.statusText, err.data.error.message);
                }
            );
        };

        $scope.goToRegister = function () {
            $location.path('/register');
        };

    })

    .controller('LogoutCtrl', function ($scope, Filuser, $location, $ionicPopup) {
    console.log('test logout');

      Filuser.logout(function () {
        $location.path('/login');
      });
  });