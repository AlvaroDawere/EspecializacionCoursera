(function (){

'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {

  $scope.lista = "";

  $scope.checkIf = function () {
      var listaseparada = $scope.lista.split(',');


      if ($scope.lista == ""){
        $scope.result = "Please enter data first";
        return;
      }
      if (listaseparada.length >= 4) {
        $scope.result = "Too much!";
      }
      else {
        $scope.result = "Enjoy!";
      }
  };

};

})();
