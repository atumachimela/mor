'use strict';

/**
 * @ngdoc function
 * @name morphesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the morphesApp
 */
angular.module('morphesApp')
  .controller('MainCtrl', ['$scope', function($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.showSettings = false;
    $scope.toggleSettings = function(){
        $scope.showSettings = !$scope.showSettings;
    };
   
  }]);
