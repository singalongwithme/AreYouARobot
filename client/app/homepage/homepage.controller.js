'use strict';

angular.module('AYARApp')
  .controller('HomepageController', function ($scope, Auth) {
    $scope.user = {};

    $scope.login = false;
    $scope.showLogin = function() {
      $scope.login = !$scope.login;
    };
    $scope.signup = function(err) {
      if( !$scope.user.username || !$scope.user.password ){
        console.log('Please enter in a valid username and password!');
        throw(err);
      } else {
        Auth.signin($scope.user);
        $scope.clearText();
      }
    };
    $scope.clearText = function() {
      $scope.user.username = '';
      $scope.user.password = '';
    };
  });
