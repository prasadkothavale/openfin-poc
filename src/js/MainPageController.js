//Angularjs and jquery.datatable with ui.bootstrap and ui.utils

var app=angular.module('formvalid', ['ui.bootstrap','ui.utils','zingchart-angularjs']);
app.controller('validationCtrl',function($rootScope,$scope,$http){
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
  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  };

$scope.chartShowHide = function()
{
  console.log("chart"+$rootScope.isChartVisible);
  console.log("showChart"+$scope.showChart);
//  var chartVisibility =  $rootScope.isChartVisible;
  if( $rootScope.isChartVisible == false)
  {$rootScope.isChartVisible = true;}
  else {
    $rootScope.isChartVisible = false;
  }

}
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
app.controller('MainController', function($rootScope,$scope){
$rootScope.isChartVisible = false;
    $scope.myJson = {
      gui: {
        contextMenu: {
          button: {
            visible: 0
          }
        }
      },
      backgroundColor: "#434343",
      globals: {
          shadow: false,
          fontFamily: "Helvetica"
      },
      type: "area",

      legend: {
          layout: "x4",
          backgroundColor: "transparent",
          borderColor: "transparent",
          marker: {
              borderRadius: "50px",
              borderColor: "transparent"
          },
          item: {
              fontColor: "white"
          }

      },
      scaleX: {
          maxItems: 8,
          transform: {
              type: 'date'
          },
          zooming: true,
          values: [
            1442905200000, 1442908800000,
            1442912400000, 1442916000000,
            1442919600000, 1442923200000,
            1442926800000, 1442930400000,
            1442934000000, 1442937600000,
            1442941200000, 1442944800000,
            1442948400000
          ],
          lineColor: "white",
          lineWidth: "1px",
          tick: {
              lineColor: "white",
              lineWidth: "1px"
          },
          item: {
              fontColor: "white"
          },
          guide: {
              visible: false
          }
      },
      scaleY: {
          lineColor: "white",
          lineWidth: "1px",
          tick: {
              lineColor: "white",
              lineWidth: "1px"
          },
          guide: {
              lineStyle: "solid",
              lineColor: "#626262"
          },
          item: {
              fontColor: "white"
          },
      },
      tooltip: {
          visible: false
      },
      crosshairX: {
          scaleLabel: {
              backgroundColor: "#fff",
              fontColor: "black"
          },
          plotLabel: {
              backgroundColor: "#434343",
              fontColor: "#FFF",
              _text: "Number of hits : %v"
          }
      },
      plot: {
          lineWidth: "2px",
          aspect: "spline",
          marker: {
              visible: false
          }
      },
      series: [{
          text: "All Sites",
          values: [2596, 2626, 4480,
                   6394, 7488, 14510,
                   7012, 10389, 20281,
                   25597, 23309, 22385,
                   25097, 20813, 20510],
          backgroundColor1: "#77d9f8",
          backgroundColor2: "#272822",
          lineColor: "#40beeb"
      }, {
          text: "Site 1",
          values: [479, 199, 583,
                   1624, 2772, 7899,
                   3467, 3227, 12885,
                   17873, 14420, 12569,
                   17721, 11569, 7362],
          backgroundColor1: "#4AD8CC",
          backgroundColor2: "#272822",
          lineColor: "#4AD8CC"
      }, {
          text: "Site 2",
          values: [989, 1364, 2161,
                   2644, 1754, 2015,
                   818, 77, 1260,
                   3912, 1671, 1836,
                   2589, 1706, 1161],
          backgroundColor1: "#1D8CD9",
          backgroundColor2: "#1D8CD9",
          lineColor: "#1D8CD9"
      }, {
          text: "Site 3",
          values: [408, 343, 410,
                   840, 1614, 3274,
                   2092, 914, 5709,
                   6317, 6633, 6720,
                   6504, 6821, 4565],
          backgroundColor1: "#D8CD98",
          backgroundColor2: "#272822",
          lineColor: "#D8CD98"
      }]
    };
});












  // $scope.data=[
  //       [
  //           "Tiger Nixon",
  //           "System Architect",
  //           "Edinburgh",
  //           "5421",
  //           "2011\/04\/25",
  //           "$320,800"
  //       ],
  //       [
  //           "Garrett Winters",
  //           "Accountant",
  //           "Tokyo",
  //           "8422",
  //           "2011\/07\/25",
  //           "$170,750"
  //       ],
  //       [
  //           "Ashton Cox",
  //           "Junior Technical Author",
  //           "San Francisco",
  //           "1562",
  //           "2009\/01\/12",
  //           "$86,000"
  //       ],
  //       [
  //           "Cedric Kelly",
  //           "Senior Javascript Developer",
  //           "Edinburgh",
  //           "6224",
  //           "2012\/03\/29",
  //           "$433,060"
  //       ],
  //       [
  //           "Airi Satou",
  //           "Accountant",
  //           "Tokyo",
  //           "5407",
  //           "2008\/11\/28",
  //           "$162,700"
  //       ],
  //       [
  //           "Brielle Williamson",
  //           "Integration Specialist",
  //           "New York",
  //           "4804",
  //           "2012\/12\/02",
  //           "$372,000"
  //       ],
  //       [
  //           "Herrod Chandler",
  //           "Sales Assistant",
  //           "San Francisco",
  //           "9608",
  //           "2012\/08\/06",
  //           "$137,500"
  //       ],
  //       [
  //           "Rhona Davidson",
  //           "Integration Specialist",
  //           "Tokyo",
  //           "6200",
  //           "2010\/10\/14",
  //           "$327,900"
  //       ],
  //       [
  //           "Colleen Hurst",
  //           "Javascript Developer",
  //           "San Francisco",
  //           "2360",
  //           "2009\/09\/15",
  //           "$205,500"
  //       ],
  //       [
  //           "Sonya Frost",
  //           "Software Engineer",
  //           "Edinburgh",
  //           "1667",
  //           "2008\/12\/13",
  //           "$103,600"
  //       ],
  //       [
  //           "Jena Gaines",
  //           "Office Manager",
  //           "London",
  //           "3814",
  //           "2008\/12\/19",
  //           "$90,560"
  //       ],
  //       [
  //           "Quinn Flynn",
  //           "Support Lead",
  //           "Edinburgh",
  //           "9497",
  //           "2013\/03\/03",
  //           "$342,000"
  //       ],
  //       [
  //           "Charde Marshall",
  //           "Regional Director",
  //           "San Francisco",
  //           "6741",
  //           "2008\/10\/16",
  //           "$470,600"
  //       ],
  //       [
  //           "Haley Kennedy",
  //           "Senior Marketing Designer",
  //           "London",
  //           "3597",
  //           "2012\/12\/18",
  //           "$313,500"
  //       ],
  //       [
  //           "Tatyana Fitzpatrick",
  //           "Regional Director",
  //           "London",
  //           "1965",
  //           "2010\/03\/17",
  //           "$385,750"
  //       ],
  //       [
  //           "Michael Silva",
  //           "Marketing Designer",
  //           "London",
  //           "1581",
  //           "2012\/11\/27",
  //           "$198,500"
  //       ],
  //       [
  //           "Paul Byrd",
  //           "Chief Financial Officer (CFO)",
  //           "New York",
  //           "3059",
  //           "2010\/06\/09",
  //           "$725,000"
  //       ],
  //       [
  //           "Gloria Little",
  //           "Systems Administrator",
  //           "New York",
  //           "1721",
  //           "2009\/04\/10",
  //           "$237,500"
  //       ],
  //       [
  //           "Bradley Greer",
  //           "Software Engineer",
  //           "London",
  //           "2558",
  //           "2012\/10\/13",
  //           "$132,000"
  //       ],
  //       [
  //           "Dai Rios",
  //           "Personnel Lead",
  //           "Edinburgh",
  //           "2290",
  //           "2012\/09\/26",
  //           "$217,500"
  //       ],
  //       [
  //           "Jenette Caldwell",
  //           "Development Lead",
  //           "New York",
  //           "1937",
  //           "2011\/09\/03",
  //           "$345,000"
  //       ],
  //       [
  //           "Yuri Berry",
  //           "Chief Marketing Officer (CMO)",
  //           "New York",
  //           "6154",
  //           "2009\/06\/25",
  //           "$675,000"
  //       ],
  //       [
  //           "Caesar Vance",
  //           "Pre-Sales Support",
  //           "New York",
  //           "8330",
  //           "2011\/12\/12",
  //           "$106,450"
  //       ],
  //       [
  //           "Doris Wilder",
  //           "Sales Assistant",
  //           "Sidney",
  //           "3023",
  //           "2010\/09\/20",
  //           "$85,600"
  //       ],
  //       [
  //           "Angelica Ramos",
  //           "Chief Executive Officer (CEO)",
  //           "London",
  //           "5797",
  //           "2009\/10\/09",
  //           "$1,200,000"
  //       ],
  //       [
  //           "Gavin Joyce",
  //           "Developer",
  //           "Edinburgh",
  //           "8822",
  //           "2010\/12\/22",
  //           "$92,575"
  //       ],
  //       [
  //           "Jennifer Chang",
  //           "Regional Director",
  //           "Singapore",
  //           "9239",
  //           "2010\/11\/14",
  //           "$357,650"
  //       ],
  //       [
  //           "Brenden Wagner",
  //           "Software Engineer",
  //           "San Francisco",
  //           "1314",
  //           "2011\/06\/07",
  //           "$206,850"
  //       ],
  //       [
  //           "Fiona Green",
  //           "Chief Operating Officer (COO)",
  //           "San Francisco",
  //           "2947",
  //           "2010\/03\/11",
  //           "$850,000"
  //       ],
  //       [
  //           "Shou Itou",
  //           "Regional Marketing",
  //           "Tokyo",
  //           "8899",
  //           "2011\/08\/14",
  //           "$163,000"
  //       ],
  //       [
  //           "Michelle House",
  //           "Integration Specialist",
  //           "Sidney",
  //           "2769",
  //           "2011\/06\/02",
  //           "$95,400"
  //       ],
  //       [
  //           "Suki Burks",
  //           "Developer",
  //           "London",
  //           "6832",
  //           "2009\/10\/22",
  //           "$114,500"
  //       ],
  //       [
  //           "Prescott Bartlett",
  //           "Technical Author",
  //           "London",
  //           "3606",
  //           "2011\/05\/07",
  //           "$145,000"
  //       ],
  //       [
  //           "Gavin Cortez",
  //           "Team Leader",
  //           "San Francisco",
  //           "2860",
  //           "2008\/10\/26",
  //           "$235,500"
  //       ],
  //       [
  //           "Martena Mccray",
  //           "Post-Sales support",
  //           "Edinburgh",
  //           "8240",
  //           "2011\/03\/09",
  //           "$324,050"
  //       ],
  //       [
  //           "Unity Butler",
  //           "Marketing Designer",
  //           "San Francisco",
  //           "5384",
  //           "2009\/12\/09",
  //           "$85,675"
  //       ],
  //       [
  //           "Howard Hatfield",
  //           "Office Manager",
  //           "San Francisco",
  //           "7031",
  //           "2008\/12\/16",
  //           "$164,500"
  //       ],
  //       [
  //           "Hope Fuentes",
  //           "Secretary",
  //           "San Francisco",
  //           "6318",
  //           "2010\/02\/12",
  //           "$109,850"
  //       ],
  //       [
  //           "Vivian Harrell",
  //           "Financial Controller",
  //           "San Francisco",
  //           "9422",
  //           "2009\/02\/14",
  //           "$452,500"
  //       ],
  //       [
  //           "Timothy Mooney",
  //           "Office Manager",
  //           "London",
  //           "7580",
  //           "2008\/12\/11",
  //           "$136,200"
  //       ],
  //       [
  //           "Jackson Bradshaw",
  //           "Director",
  //           "New York",
  //           "1042",
  //           "2008\/09\/26",
  //           "$645,750"
  //       ],
  //       [
  //           "Olivia Liang",
  //           "Support Engineer",
  //           "Singapore",
  //           "2120",
  //           "2011\/02\/03",
  //           "$234,500"
  //       ],
  //       [
  //           "Bruno Nash",
  //           "Software Engineer",
  //           "London",
  //           "6222",
  //           "2011\/05\/03",
  //           "$163,500"
  //       ],
  //       [
  //           "Sakura Yamamoto",
  //           "Support Engineer",
  //           "Tokyo",
  //           "9383",
  //           "2009\/08\/19",
  //           "$139,575"
  //       ],
  //       [
  //           "Thor Walton",
  //           "Developer",
  //           "New York",
  //           "8327",
  //           "2013\/08\/11",
  //           "$98,540"
  //       ],
  //       [
  //           "Finn Camacho",
  //           "Support Engineer",
  //           "San Francisco",
  //           "2927",
  //           "2009\/07\/07",
  //           "$87,500"
  //       ],
  //       [
  //           "Serge Baldwin",
  //           "Data Coordinator",
  //           "Singapore",
  //           "8352",
  //           "2012\/04\/09",
  //           "$138,575"
  //       ],
  //       [
  //           "Zenaida Frank",
  //           "Software Engineer",
  //           "New York",
  //           "7439",
  //           "2010\/01\/04",
  //           "$125,250"
  //       ],
  //       [
  //           "Zorita Serrano",
  //           "Software Engineer",
  //           "San Francisco",
  //           "4389",
  //           "2012\/06\/01",
  //           "$115,000"
  //       ],
  //       [
  //           "Jennifer Acosta",
  //           "Junior Javascript Developer",
  //           "Edinburgh",
  //           "3431",
  //           "2013\/02\/01",
  //           "$75,650"
  //       ],
  //       [
  //           "Cara Stevens",
  //           "Sales Assistant",
  //           "New York",
  //           "3990",
  //           "2011\/12\/06",
  //           "$145,600"
  //       ],
  //       [
  //           "Hermione Butler",
  //           "Regional Director",
  //           "London",
  //           "1016",
  //           "2011\/03\/21",
  //           "$356,250"
  //       ],
  //       [
  //           "Lael Greer",
  //           "Systems Administrator",
  //           "London",
  //           "6733",
  //           "2009\/02\/27",
  //           "$103,500"
  //       ],
  //       [
  //           "Jonas Alexander",
  //           "Developer",
  //           "San Francisco",
  //           "8196",
  //           "2010\/07\/14",
  //           "$86,500"
  //       ],
  //       [
  //           "Shad Decker",
  //           "Regional Director",
  //           "Edinburgh",
  //           "6373",
  //           "2008\/11\/13",
  //           "$183,000"
  //       ],
  //       [
  //           "Michael Bruce",
  //           "Javascript Developer",
  //           "Singapore",
  //           "5384",
  //           "2011\/06\/27",
  //           "$183,000"
  //       ],
  //       [
  //           "Donna Snider",
  //           "Customer Support",
  //           "New York",
  //           "4226",
  //           "2011\/01\/25",
  //           "$112,000"
  //       ]
  //   ]
