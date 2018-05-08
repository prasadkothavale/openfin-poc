
angular.module('myApp', []).controller('namesCtrl', function($scope) {
  var firstNameValue ;

    $scope.firstSignLog=function(value)
    {
      $scope.firstName2=value;
      firstNameValue=  $scope.firstName2;
      $scope.status=false;
      $scope.toggleEnable=true;

    }

    $scope.secondSignLog=function(value)
    {
      $scope.firstNameValue= firstNameValue;
      $scope.status2=false;
      $scope.toggleEnable2=true;
    }

    $scope.thirdSignLog=function()
    {
      $scope.status3=false;
        $scope.toggleEnable3=true;
    }

});
