'use strict';

/* Controllers */

angular.module('myApp.controllers', 
	['firebase']).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!'
    });

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyAuthCtrl', 
  [ "$scope", "$firebase", "$firebaseAuth",
  function ($scope, $firebase, $firebaseAuth) {
  		
  		var ref = new Firebase("https://writersblock1984.firebaseio.com/users");
        var auth = $firebaseAuth(ref);
        
        $rootScope.$on("$firebaseAuth:login", function(evt, user) {
	      console.log("User " + user.id + " successfully logged in!");
	    });
	
	    $rootScope.$on("$firebaseAuth:logout", function(evt) {
	      console.log("User logged out!");
	    });
        
        /*angularFireAuth.initialize(ref, {
		scope: $scope, name: "user",
		callback: function(err, user) {
		  if (!err) {
		      console.log("User :", user);
		  } else {
		      console.log("Error :", err);
		  }
		}
		});
		
		$scope.login = function() {
		console.log("logging in");
		var username = $scope.form.email;
		var password = $scope.form.password;
		angularFireAuth.login('password', {
		    email: username,
		    password: password,
		    rememberMe: false
		  });
		};
		
		$scope.loginTwitter = function() {
		    console.log('loggin in via Twitter');
		    angularFireAuth.login('twitter');
		};
		
		$scope.loginFacebook = function() {
		    console.log('loggin in via Facebook');
		    angularFireAuth.login('facebook');
		};
		
		$scope.loginGithub = function() {
		    console.log('loggin in via Github');
		    angularFireAuth.login('github');
		};
		
		$scope.logout = function() {
		  angularFireAuth.logout();
		};*/
        

  }]);
