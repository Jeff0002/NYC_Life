(function () {
    'use strict';
    
    angular
    .module('app')
    .controller('FootprintController', ['NgMap', '$scope', '$routeParams','$http',
        function(NgMap, $scope, $routeParams, $http) 
        {
        NgMap.getMap().then(function(map) {
//        console.log(map.getCenter());
//        console.log('markers', map.markers);
//        console.log('shapes', map.shapes);
        });
        $scope.username = $routeParams.username;
            
//        console.log("username"+$routeParams.username);
//        console.log("user"+$scope.username);
//            
        $http.get('http://localhost:8888/api/user/' + $routeParams.username).then(function(response) {
                    //console.log(response.data);
        $scope.profile = response.data[0];
        });
    }]);

})();
