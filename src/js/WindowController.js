//Angularjs and jquery.datatable with ui.bootstrap and ui.utils

var app=angular.module('formvalid', ['ui.bootstrap','ui.utils']);
app.controller('validationCtrl',function($scope,$http){
  // $http.get('sample.json').then(function(response){
  //   $scope.myData = response;
  // });


  var request = {
                method: 'get',
                url: 'sample.json',
                dataType: 'json',
                contentType: "application/json"
            };

            $scope.arrTest = new Array;

            $http(request)
                .then(function (jsonData) {
                    $scope.arrTest = jsonData.data || [];
                    $scope.data = $scope.arrTest;
                    console.log($scope.data);
                }
                ,function (error) {
               console.log("error")
                });

$scope.dataTableOpt = {
   //custom datatable options
  // or load data through ajax call also
  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  };

  debugger

  $scope.openStockDetails = function(query) {
    console.log(query);
    var win = new StockDetailsWindow(query).then(function (win) {
        console.log(win);
        win.addEventListener("close-requested", function () {
            win.close(true, function () {
                console.log("window closed");
            }, function (err) {
                console.log("error while closing window :  ", err);

            });
        });
    });
  }


});
