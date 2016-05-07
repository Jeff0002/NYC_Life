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
                
                $http.get('http://localhost:8888/api/relationship/' + $scope.username).then(function(response) {
                    //$scope.friends = response.data;
                    //console.log(response.data);
                    $scope.friends = [];
                    for (var i = 0; i < response.data.length; i++) {
                        $scope.friends.push(response.data[i].Friend);
                    }
                    //console.log($scope.friends);
                });
                
                
                $scope.checkFriend = function(visitor, username) {
                    //console.log("check");
                    //console.log(visitor + username);
//                    $http.get('http://localhost:8888/api/relationship' + visitor).then(function(response) {
//                        console.log(response);
//                    })
                    return false;
                };
                
                $scope.trustSrc = function(src) {
                    return $sce.trustAsResourceUrl(src);
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
                console.log("what happend");
                $http.get('http://localhost:8888/api/news/order/'+$routeParams.host).then(function(response) {
                    $scope.posts = response.data;
                     console.log(response.data);
                    
                    for (var i = 0; i < $scope.posts.length; i++) {
                        if($scope.posts[i].Video == null) {
                            $scope.posts[i].Video = '';
                        }
                        if($scope.posts[i].Image == null) {
                            $scope.posts[i].Image = '';
                        }
                    }
                    //console.log($scope.posts);
                });
                    

                $scope.comment = {};
                $scope.addComment = function(PostId, UserId) {
                    
                    $scope.comment.PostId = PostId;
                    $scope.comment.Author = $scope.username;
                    $scope.comment.Recipient = UserId;
                    console.log($scope.comment.Content);
                    $scope.comment.Sendtime = new Date();
                    $http.post('http://localhost:8888/api/comments', $scope.comment).then(function(response) {
                            console.log(response.status);
                    })

                    for (var i = 0; i < $scope.posts.length; i++) {
                        if ($scope.posts[i].PostId == PostId) {
                            $scope.getComments($scope.posts[i]);
                            console.log($scope.posts[i]);
                        }
                    }
                };
                
                $scope.getComments = function(post) {
                    $http.get('http://localhost:8888/api/comments/'+post.PostId).then(function(response) {
                        post.comments = response.data;
                    })
                    //console.log(post.comments);
                    //console.log($scope.comments);
                }
                

                $scope.like = function(PostId) {
                    
                    for (var i = 0; i < $scope.posts.length; i++) {
                        if ($scope.posts[i].PostId == PostId) {
                            $scope.posts[i].Ilikeit = parseInt($scope.posts[i].Ilikeit) + 1;
                            $scope.postById = $scope.posts[i];
                        }
                    }
                    //console.log($scope.posts);
                    
                    console.log($scope.postById);

                    $http.put('http://localhost:8888/api/news/' + PostId, $scope.postById).then(function(response) {
                        console.log(response.status);
                    });
                    
                }
                
                $scope.dislike = function(PostId) {
                    
                    for (var i = 0; i < $scope.posts.length; i++) {
                        if ($scope.posts[i].PostId == PostId) {
                            $scope.posts[i].Ilikeit = parseInt($scope.posts[i].Ilikeit) - 1;
                            $scope.postById = $scope.posts[i];
                        }
                    }
                    console.log($scope.postById);

                    $http.put('http://localhost:8888/api/news/' + PostId, $scope.postById).then(function(response) {
                        console.log(response.status);
                    });
                    
                }
                
                $http.get('http://localhost:8888/api/news/order/'+$routeParams.host).then(function(response) {
                    $scope.LocationIds = [];
                    $scope.Locations = [];
                    for (var i = 0; i < response.data.length; i++) {
                        console.log(response.data[i].LocationId);
                        $scope.LocationIds.push(response.data[i].LocationId);
                        var location = {};
                        location.lng = response.data[i].Longtitude;
                        location.lat = response.data[i].Latitude;
                        $scope.Locations.push(location);
                        console.log($scope.Locations);
                    }
                });
                
                }]);

})();  