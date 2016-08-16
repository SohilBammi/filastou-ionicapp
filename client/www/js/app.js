// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'lbServices'])

    /*.run(function ($ionicPlatform) {
     $ionicPlatform.ready(function () {
     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
     // for form inputs)
     if (window.cordova && window.cordova.plugins.Keyboard) {
     cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
     }
     if (window.StatusBar) {
     StatusBar.styleDefault();
     }
     });
     })*/

    /* .run(function (User) {
        //Check if User is authenticated
        if (User.getCachedCurrent() == null) {
            User.getCurrent();
        }
    }) */
    .config(function (LoopBackResourceProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
        // Use a custom auth header instead of the default 'Authorization'
        LoopBackResourceProvider.setAuthHeader('X-Access-Token');
     
        // Change the URL where to access the LoopBack REST API server
        LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');

        $stateProvider
            .state('tourist-tabs', {
              url: "/tourist-tabs",
              abstract: true,
              templateUrl: "templates/tourist-tabs.html"
            })
            .state('tourist-tabs.search', {
              url: "/tourist/search",
              views: {
                'search-tab': {
                  templateUrl: "templates/tabs-tourists/search.html",
                  controller: 'TouristSearchTabCtrl'
                }
              }
            })
            .state('tourist-tabs.profile', {
              url: "/tourist/profile",
              views: {
                'profile-tab': {
                  templateUrl: "templates/tabs-tourists/profile.html",
                  controller: 'TouristProfileTabCtrl'
                }
              }
            })
            .state('tourist-tabs.settings', {
              url: "/tourist/settings",
              views: {
                'settings-tab': {
                  templateUrl: "templates/tabs-tourists/settings.html",
                  controller: 'TouristSettingsTabCtrl'
                }
              }
            })
            .state('tourguide-tabs', {
              url: "/tourguide-tabs",
              abstract: true,
              templateUrl: "templates/tourguide-tabs.html"
            })
            .state('tourguide-tabs.calendar', {
              url: "/tourguide/calendar",
              views: {
                'calendar-tab': {
                  templateUrl: "templates/tabs-tourguides/calendar.html",
                  controller: 'TourGuideCalendarTabCtrl'
                }
              }
            })
            .state('tourguide-tabs.profile', {
              url: "/tourguide/profile",
              views: {
                'profile-tab': {
                  templateUrl: "templates/tabs-tourguides/profile.html",
                  controller: 'TourGuideProfileTabCtrl'
                }
              }
            })
            .state('tourguide-tabs.settings', {
              url: "/tourguide/settings",
              views: {
                'settings-tab': {
                  templateUrl: "templates/tabs-tourguides/settings.html",
                  controller: 'TourGuideSettingsTabCtrl'
                }
              }
            })
            .state('newtour', {
                url: '/tourguide/newtour',
                templateUrl: 'templates/tabs-tourguides/newtour.html',
                controller: 'NewTourCtrl'
            })
            .state('tourguide-tourpage', {
              url: '/tourguide/t/:tourId',
              templateUrl: 'templates/tabs-tourguides/tourpage.html',
              controller: 'TourGuideTourPageCtrl'
            })
            .state('tourist-tourpage', {
              url: '/tourist/t/:tourId',
              templateUrl: 'templates/tabs-tourists/tourpage.html',
              controller: 'TouristTourPageCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .state('logout', {
              url: '/logout',
              controller: 'LogoutCtrl'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'templates/register.html',
                controller: 'RegisterCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard.html',
                controller: 'DashboardCtrl'
        });

        $urlRouterProvider.otherwise('/login');

        $httpProvider.interceptors.push(function ($q, $location) {
          console.log("in interceptor");
            return {
                responseError: function (rejection) {
                    console.log("Redirect");
                    if (rejection.status == 401 && $location.path() !== '/login' && $location.path() !== '/register') {
                        $location.nextAfterLogin = $location.path();
                        $location.path('/login');
                        console.log("we made it")
                     }
                    return $q.reject(rejection);
                }
            };
        });
    })
    .constant('AppSettings', {imageBaseUrl: "http://52.4.179.244:3001"})
;