(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('ProfileController', ['$scope', '$routeParams', '$http', '$sce',
            function($scope, $routeParams, $http, $sce) {
                console.log("what happend");
                                       
                $scope.visitor = $routeParams.visitor;
                $scope.username = $routeParams.host;
                $http.get("http://localhost:8888/api/user").then(function(response) {
                    $scope.test = response.data;
                });
                
                $http.get('http://localhost:8888/api/user/' + $scope.username).then(function(response) {
                    //console.log(response.data);
                    $scope.profile = response.data[0];
                });
                
                /* for test
                $scope.profile = {
                    username: 'Jeff0003',
                    age: 27,
                    zipCode: "11201",
                    duration: 4
                };*/
                
                $http.get('http://localhost:8888/api/relationship/' + $scope.username).then(function(response) {
                    //$scope.friends = response.data;
                    //console.log(response.data);
                    $scope.friends = [];
                    for (var i = 0; i < response.data.length; i++) {
                        $scope.friends.push(response.data[i].Friend);
                    }
                    //console.log($scope.friends);
                });

                /* test for friends
                $scope.friends = [
                    {
                        username: 'Jeff0003',
                    },
                    {
                        username: 'Jeff0004'
                    }
                ];
                
                */
                
                /*
                $http.get('posts/' + $routeParams.username).success(function(data) {
                    $scope.posts = data;
                    */
                $scope.posts = [
                    {
                        postId: '001',
                        username: 'Jeff0002',
                        body: 'Hello, Jeff0001',
                        video: "https://www.youtube.com/embed/MtCMtC50gwY",
                        img: ""
                    },
                    {
                        postId: '002',
                        username: 'Jeff0003',
                        body: 'How are you, Jeff0002',
                        video: "",
                        img: "https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/f2/new-york-city.jpg"
                    },
                    {
                        postId: '003',
                        username: 'Jeff0004',
                        body: 'I\'m fine, Thanks!',
                        video: "https://www.youtube.com/embed/Nsec4hWZz2M",
                        img: ""
                    }
                ];
                $scope.trustSrc = function(src) {
                    return $sce.trustAsResourceUrl(src);
                };

                $scope.addPost = function() {
                    //http post
                    if ($scope.postBody) {
                        $scope.posts.unshift( {
                            username: $scope.username,
                            body:$scope.postBody
                        })
                    $scope.postBody = null;
                    }
                };
                
                // http get comments/:postId
                $scope.comments = [
                    {
                        postId: '001',
                        author: "jeff001",
                        recipient: "jeff002",
                        body: "Hello, I like your post"
                    }
                ];
                
                //$scope.addComment = function(author, postId) {
                $scope.addComment = function() {
                    console.log($scope.vm.commentBody);
                    if ($scope.vm.commentBody) {
                        //http post postId, $scope.commentBody, @scope.username, 
                        console.log('success');
                        $scope.comments.unshift( {
                            postId: "",
                            author: $scope.username,
                            recipient: "unknown",
                            body: $scope.vm.commentBody
                        })
                    $scope.commentBody = null;
                    }
                    console.log($scope.comments);
                };
                
                $scope.checkFriend = function(visitor, username) {
                    console.log("check");
                    console.log(visitor + username);
                    return false;
                };
                
                $scope.addFriend = function(visitor, username) {
                    var invitation = {};
                    invitation.UserId = username;
                    invitation.Invitor = visitor;
                    $http.post('http://localhost:8888/api/invite', invitation).then(function(response){
                        console.log(response.status);
                    })
                    $scope.sent = true;
                    console.log("add");
                    console.log(visitor + username);
                };
                
                }]);

})();  