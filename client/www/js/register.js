angular.module('starter')
    .controller('RegisterCtrl', function ($scope, Filuser, $ionicPopup, $location) {
        console.log('Reached RegisterCtrl bp');
        /**
         * Currently you need to initialiate the variables
         * if you want to use them in the controller. This seems to be a bug with
         * ionic creating a child scope for the ion-content directive
         */
        $scope.registration = {};

        /**
         * Redirect user to the app if already logged in
         */
        if (Filuser.getCachedCurrent()!==null) {
            $location.path('/dashboard');
        }

        /**
         * @name register()
         * @desctiption
         * register a new user and login
         */
        $scope.register = function () {
            console.log('Reached Inside of Register function');
            $scope.registration.created = new Date().toJSON();
            console.log($scope.registration.username);
            console.log($scope.registration.email);
            console.log($scope.registration.firstName);
            console.log($scope.registration.lastName);
            $scope.user = Filuser.create($scope.registration)
                .$promise
                .then(function (res) {
                    console.log('Filastou User Created: '+ $scope.user);
                    Filuser.login({include: 'user', rememberMe: true}, $scope.registration)
                        .$promise
                        .then(function (res) {
                            console.log("swaggy");
                            $location.path('/dashboard')
                        }, function (err) {
                            $scope.loginError = err;
                            $scope.showAlert(err.statusText, err.data.error.message);
                        })
                }, function (err) {
                    console.log('Error inside Registration Function');
                    $scope.registerError = err;
                    $scope.showAlert(err.statusText, err.data.error.message);
                });
        };

        $scope.goToLogin = function () {
            $location.path('/login');
        };

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
            alertPopup.then(function () {
                console.log($scope.loginError);
            });
        };
    });
