'use strict';

angular.module('app')
  .controller('DemoCtrl', function ($scope) {

    $scope.submit = function() {
        alert('submit');
    }
});
