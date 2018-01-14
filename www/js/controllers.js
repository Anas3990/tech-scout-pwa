angular.module('app.controllers', ['ja.qr'])
     
.controller('matchScoutingCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
  $scope.size = 250;
  $scope.correctionLevel = '';
  $scope.typeNumber = 0;
  $scope.inputMode = '';
  $scope.image = true;
}])
   
.controller('pitScoutingCtrl', ['$scope', '$stateParams',  
function ($scope, $stateParams) {
  $scope.size = 250;
  $scope.correctionLevel = '';
  $scope.typeNumber = 0;
  $scope.inputMode = '';
  $scope.image = true;

}])