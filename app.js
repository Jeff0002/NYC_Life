(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies', 'ngMap'])
        .config(config)
        .run(run);
    
    /*
    app.config(function ($httpProvider) {
      $httpProvider.defaults.headers.common = {};
      $httpProvider.defaults.headers.post = {};
      $httpProvider.defaults.headers.put = {};
      $httpProvider.defaults.headers.patch = {};
    });
    */

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home/:username', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })
        
            .when('/edit/:username', {
                controller: 'EditController',
                templateUrl: 'edit/edit.view.html',
                controllerAs: 'vm'
            })
        
            .when('/profile/:visitor/:host', {
                controller: 'ProfileController',
                templateUrl: 'profile/profile.view.html',
                controllerAs: 'vm'
            })
            
            .when('/footprint/:username', {
                controller: 'FootprintController',
                templateUrl: 'footprint/footprint.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
        }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();