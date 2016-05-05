(function () {
    'use strict';
    
//                return $http.get('http://localhost:8888/api/comments/' + PostId).then(function(response) {
//                //$scope.comments = response.data;
//                //console.log($scope.comments);
//                console.log(response.data);
//                return response.data;
//                    })
//            }
//    });
    
    angular
        .module('app')
        .controller('HomeController', ['$scope', '$routeParams', '$http', '$sce',
            function($scope, $routeParams, $http, $sce) {

                $scope.username = $routeParams.username;
  
                $http.get("http://localhost:8888/api/user").then(function(response) {
                    $scope.test = response.data;
                });
                
                $http.get('http://localhost:8888/api/user/' + $routeParams.username).then(function(response) {
                    //console.log(response.data);
                    $scope.profile = response.data[0];
                    //console.log($scope.profile);
                });
                
                /* for test
                $scope.profile = {
                    username: 'Jeff0003',
                    age: 27,
                    zipCode: "11201",
                    duration: 4
                };*/
                
                $http.get('http://localhost:8888/api/relationship/' + $routeParams.username).then(function(response) {
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
                 $http.get('http://localhost:8888/api/public/news').then(function(response) {
                    $scope.posts = response.data;
                    
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
                    
                /* test for posts    
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
                */
                $scope.trustSrc = function(src) {
                    return $sce.trustAsResourceUrl(src);
                };
                
                $scope.image = false;
                $scope.video = false;
                
                $scope.hasImage = function() {
                    $scope.image = !$scope.image;
                }
                
                $scope.hasVideo = function() {
                    $scope.video = !$scope.video;
                }
                
                $scope.hasLocation = function() {
                    $scope.location = !$scope.location;
                }
                $scope.MyGoogleApiKey = 'AIzaSyA8Obq9X1_1fzWjGzgCmAU3Zz411KBK92s';
                $scope.getLocation = function(postLocation) {
                    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ postLocation + '&key=' + $scope.MyGoogleApiKey).then(function(response) {
                        $scope.locationInfo = response.data.results[0].geometry.location;
                        console.log($scope.locationInfo);
                    })
                    $scope.showLocation = 'true';
                }
                
                $scope.randomId = function guid() {
                    function s4() {
                        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                    }
                    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
                }

                $scope.addPost = function() {
                    //http post
//                    if ($scope.postBody) {
//                        $scope.posts.unshift( {
//                            username: $scope.username,
//                            body:$scope.postBody
//                        })
//                    $scope.postBody = null;
//                    }
                    var news = {};
                    news.PostId = $scope.randomId();
                    news.UserId = $scope.username;
                    news.Image = $scope.postImage;
                    news.Video = $scope.postVideo;
                    news.Entry = $scope.postBody;
                    news.Posttime = new Date();
                    news.LocationId = $scope.postLocation;
                    news.Longtitude = $scope.locationInfo.lng;
                    news.Latitude = $scope.locationInfo.lat;
                    if ($scope.postSetting == true) {
                        news.Setting = 'Public';
                    } else {
                        news.Setting = 'Private';
                    }
                    news.Ilikeit = 0;
                    console.log(news);
                    $http.post('http://localhost:8888/api/news', news).then(function(response) {
                        console.log(response.status);
                    })
                };
                
                $scope.comment = {};
                $scope.addComment = function(PostId, UserId) {
//                    console.log($scope.vm.commentBody);
//                    if ($scope.vm.commentBody) {
//                        //http post postId, $scope.commentBody, @scope.username, 
//                        console.log('success');
//                        $scope.comments.unshift( {
//                            postId: "",
//                            author: $scope.username,
//                            recipient: "unknown",
//                            body: $scope.vm.commentBody
//                        })
//                    $scope.commentBody = null;
//                    }
//                    console.log($scope.comments);

                    
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
                    console.log(post.comments);
                    //console.log($scope.comments);
                }
                /*
                http.get('peopleMayKnow/' + $routeParams.username).success(function(data) {
                    $scope.peopleMayKnow = data;
                    */
                
                $http.get('http://localhost:8888/api/relationship/friend/' +  $routeParams.username).then(function(response) {
                    $scope.peopleMayKnow = [];
                    for (var i = 0; i < response.data.length; i++) {
                        $scope.peopleMayKnow.push(response.data[i].Friend);
                    }
                })
                
                $http.get('http://localhost:8888/api/invite/' + $routeParams.username).then(function(response) {
                    $scope.invitors = response.data;
                    //console.log($scope.invitors[2].Invitor);
                    
                })
                
                $scope.accept = function(UserId, Invitor) {
                    console.log(UserId + Invitor);
                    var relationship = {};
                    relationship.UserId = UserId;
                    relationship.Friend = Invitor;
                    console.log(relationship);
                    
                    $http.post('http://localhost:8888/api/relationship', relationship).then(function(response){
                        console.log(response.status);
                    })
                }
                
                $scope.like = function(PostId) {
                    
//                    $http.get('http://localhost:8888/api/news/'+PostId).then(function(response) {
//                        $scope.postById = response.data;
//                    });
//                    console.log($scope.postById);
//                    console.log($scope.postById[0]);
//                    console.log($scope.postById[0].Ilikeit);
//                    $scope.postById[0].Ilikeit += 1;
//                    $http.put('http://localhost:8888/api/news/' + PostId).then(function(response) {
//                        console.log(response.status);
//                    });
                    for (var i = 0; i < $scope.posts.length; i++) {
                        if ($scope.posts[i].PostId == PostId) {
                            $scope.posts[i].Ilikeit = parseInt($scope.posts[i].Ilikeit) + 1;
                        }
                    }
                    console.log($scope.posts);
                    
                }
                
                $scope.dislike = function(PostId) {
                    
//                    $http.get('http://localhost:8888/api/news/'+PostId).then(function(response) {
//                        $scope.postById = response.data;
//                    });
//                    console.log($scope.postById);
//                    console.log($scope.postById[0]);
//                    console.log($scope.postById[0].Ilikeit);
//                    $scope.postById[0].Ilikeit += 1;
//                    $http.put('http://localhost:8888/api/news/' + PostId).then(function(response) {
//                        console.log(response.status);
//                    });
                    for (var i = 0; i < $scope.posts.length; i++) {
                        if ($scope.posts[i].PostId == PostId) {
                            $scope.posts[i].Ilikeit = parseInt($scope.posts[i].Ilikeit) - 1;
                        }
                    }
                    console.log($scope.posts);
                    
                }
                }]);
    

                
    angular
        .module('app')
        .directive('postdirective', function() {
        return {
            restrict: 'E',
            template: "templates/post-template.html",
            link: function(scope, el, attr) {
                //if(scope.post.video == "") {
                    
            
                }
            
            }
        });
})();  