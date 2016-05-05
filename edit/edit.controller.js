(function () {
    'use strict';
    
    angular
    .module('app')
    .controller('EditController', ['$scope', '$routeParams', '$http', '$sce', 
        function($scope, $routeParams, $http, $sce) {
            $scope.username = $routeParams.username;
//            console.log($routeParams.username);
//            console.log($scope.username);
            
            $http.get('http://localhost:8888/api/user/' + $routeParams.username).then(function(response) {
                
                $scope.profile = response.data[0];
                $scope.newProfile = response.data[0];
//                $scope.newProfile.UserId = $scope.profile.UserId;
//                $scope.newProfile.Age = $scope.profile.Age;
//                $scope.newProfile.Zipcode = $scope.profile.Zipcode;
//                $scope.newProfile.Email = $scope.profile.Email;                
            });
            $scope.updateProfile = function() {
             $http.put('http://localhost:8888/api/user/' + $routeParams.username, $scope.newProfile).then(function(response) {
                 console.log(response.status);
                 if (response.status == '200') {
                     $scope.message = "Updated Successfully!";
                 }
                 
             });
                
            }
        }
    ])
})();