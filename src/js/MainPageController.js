//Angularjs and jquery.datatable with ui.bootstrap and ui.utils

var app=angular.module('formvalid', ['ui.bootstrap','ui.utils','zingchart-angularjs','ui.bootstrap.tpls']);

//Login/Signup modal Logic
app.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
        backdrop: 'static',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

//end of modal Logic

app.controller('MainController', function($rootScope,$scope,$http){
 /* var request = {
                  method: 'get',
                  url: 'sample.json',
                  dataType: 'json',
                  contentType: "application/json"
              };
			  */

             // $scope.arrTest = new Array;
			  $rootScope.data = [

    {
        "name":"PayPal Holdings Inc",
        "symbol": "PYPL",
        "isin": "US70450Y1038",


        "price": 74.67,

        "query": "NASDAQ:+PYPL"
    },
	{
        "name":"Marriott International Inc",
        "symbol": "MAR",
        "isin": "US5719032022",


        "price": 136.64,

        "query": "NASDAQ:+MAR"
    },
    {
        "name":"Citrix Systems Inc",
        "symbol": "CTXS",
        "isin": "US1773761002",


        "price": 106.58,

        "query": "NASDAQ:+CTXS"
    },
	{
        "name":"Accenture Plc",
        "symbol": "ACN",
        "isin": "IE00B4BNMY34",


        "price": 153.44,

        "query": "NASDAQ:+ACN"
    },

{
        "name":"Microsoft Corporation",
        "symbol": "MSFT",
        "isin": "US5949181045",


        "price": 95.16,

        "query": "NASDAQ:+MSFT"
    },
    {
        "name":"Aplhabet Inc",
        "symbol": "GOOG",
        "isin": "US02079K3059",


        "price": 1048.21,

        "query": "NASDAQ:+GOOG"
    },
    {
        "name":"Facebook Inc",
        "symbol": "FB",
        "isin": "US30303M1027",


        "price": 176.61,

        "query": "NASDAQ:+FB"
    },
    {
        "name":"Intel Corporation",
        "symbol": "INTL",
        "isin": "US4581401001",


        "price": 58.21,

        "query": "NASDAQ:+INTL"
    },

    {
        "name":"AT&T Inc",
        "symbol": "T",
        "isin": "US00206R1023",


        "price": 32.14,

        "query": "NASDAQ:+T"
    },
    {
        "name":"Apple Inc",
        "symbol": "AAPL",
        "isin": "US0378331005",


        "price": 183.83,

        "query": "NASDAQ:+AAPL"
    },
    {
        "name":"Adobe Systems Inc",
        "symbol": "ADBE",
        "isin": "US00724F1012",


        "price": 230.99,

        "query": "NASDAQ:+ADBE"
    },
    {
        "name":"Amazon.com Inc",
        "symbol": "AMZN",
        "isin": "US0231351067",


        "price": 1600.14,

        "query": "NASDAQ:+AMZN"
    },
    {
        "name":"Cisco Systems Inc",
        "symbol": "CSCO",
        "isin": "US17275R1023",


        "price": 45.73,

        "query": "NASDAQ:+CSCO"
    },
    {
        "name":"eBay Inc",
        "symbol": "EBAY",
        "isin": "US2786421030",


        "price": 37.80,

        "query": "NASDAQ:+EBAY"
    },
    {
        "name":"Fiserv Inc",
        "symbol": "FISV",
        "isin": "US3377381088",


        "price": 70.41,

        "query": "NASDAQ:+FISV"
    },

    {
        "name":"Symantec Corp",
        "symbol": "SYMC",
        "isin": "US8715031089",


        "price": 28.44,

        "query": "NASDAQ:+SYMC"
    },
    {
        "name":"Viacom Inc",
        "symbol": "VIAB",
        "isin": "US92553P2011",


        "price": 30.70,

        "query": "NASDAQ:+VIAB"
    },
    {
        "name":"Tesla Inc",
        "symbol": "TSLA",
        "isin": "US88160R1014",


        "price": 302.77,

        "query": "NASDAQ:+TSLA"
    },
    {
        "name":"Vodafone Group PLC",
        "symbol": "VOD",
        "isin": "GB00BH4HKS39",


        "price": 28.84,

        "query": "NASDAQ:+VOD"
    },
    {
        "name":"Vertex Pharmaceuticals Inc",
        "symbol": "VRTX",
        "isin": "US92532F1003",


        "price": 149.50,

        "query": "NASDAQ:+VRTX"
    },
    {
        "name":"Texas Intruments Inc",
        "symbol": "TXN",
        "isin": "US8825081040",


        "price": 105.51,

        "query": "NASDAQ:+TXN"
    },

    {
        "name":"Mattel Inc",
        "symbol": "MAT",
        "isin": "US5770811025",


        "price": 14.47,

        "query": "NASDAQ:+MAT"
    },
    {
        "name":"Qualcomm Inc",
        "symbol": "QCOM",
        "isin": "US7475251036",


        "price": 53.01,

        "query": "NASDAQ:+QCOM"
    },
    {
        "name":"Skyworks Solutions Inc",
        "symbol": "SWKS",
        "isin": "US83088M1027",


        "price": 95.34,

        "query": "NASDAQ:+SWKS"
    },
    {
        "name":"Starbuck SOlutions Inc",
        "symbol": "SBUX",
        "isin": "US8552441094",


        "price": 57.45,

        "query": "NASDAQ:+SBUX"
    }];


              /*$http(request)
                  .then(function (jsonData) {
                      $scope.arrTest = jsonData.data || [];
                      $rootScope.data = $scope.arrTest;
                    //  console.log($rootScope.data);
                  }
                  ,function (error) {
                 console.log("error")
                  });*/

  $scope.dataTableOpt = {
	  "pagingType": "full_numbers",
	  "paging": true,
    "lengthMenu": [[5, 50, 100,-1], [5,10, 50, 100,'All']],
    };

    $scope.openStockDetails = function(query) {
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
    };
    $rootScope.isChartVisible = false;
    var chartArrayStock = [];
    var chartArrayPrice = [];

    $scope.addValues = function(index,check){

      if(check==false || check == undefined)
      {
      for( var i =0; i<5 ; i++)
    {
      if(chartArrayStock[i] === $rootScope.data[index].symbol )
    {  var priceIndex = chartArrayStock.indexOf($rootScope.data[index].symbol);
       chartArrayStock.splice(priceIndex,1);
    }
    }

      for( var i =0; i<5 ; i++)
    {
      if(chartArrayPrice[i] === $rootScope.data[index].price )
    {  var priceIndex = chartArrayPrice.indexOf($rootScope.data[index].price);
       chartArrayPrice.splice(priceIndex,1);
    }
    }
    }//if end
    else {
      chartArrayStock.push($rootScope.data[index].symbol);
      chartArrayPrice.push($rootScope.data[index].price);
    }//else end
    }//add values end

    $scope.chartShowHide = function()
    {
     for(var i=0;i<=4 ; i++)
     {
       if(chartArrayStock.indexOf($rootScope.data[i].symbol) == -1)
      {
        chartArrayStock.push($rootScope.data[i].symbol);
      console.log("chartArrayStock init:"+chartArrayStock[i]);}//end if
     }//end for

      for(var i=0;i<=4 ; i++)
     {
        if(chartArrayPrice.indexOf($rootScope.data[i].price) == -1 )
      { chartArrayPrice.push($rootScope.data[i].price);
        console.log("chartArrayPrice init:"+chartArrayPrice[i]);
      }
     }//end for

    //chart json start
    $scope.myJson = {
          type : "vbar3d",
          title:{
            fontColor :"white",
          },
          backgroundColor:"transparent",
          "scale-y":{
           "guide":{
     "line-color":"transparent",
     "line-width":2,
     "line-style":"solid" //"solid", "dotted", "dashed", "dashdot"
   }
           },

              "scale-x":{
              "values":chartArrayStock
            },
           height:290,
          series : [
            {
              values : chartArrayPrice,
              backgroundColor : "#2a7091"
            }
          ]
        };//chart json end
  

    }//end of showhide chart function

	$scope.addValues(4,true);

    ///// Line chart function
    $scope.lineChartGenerator = function(){
      // var chart = AmCharts.makeChart("lineChartdiv", {
      //         "type": "serial",
      //         "theme": "dark",
      //         "marginRight": 50,
      //         "marginTop": 10,
      //         "marginLeft": 10,
      //         "autoMarginOffset": 10,
      //         "dataProvider": [{
      //             "date": "2012-03-01",
      //             "price": 20
      //         }, {
      //             "date": "2012-03-02",
      //             "price": 75
      //         }, {
      //             "date": "2012-03-03",
      //             "price": 15
      //         }, {
      //             "date": "2012-03-04",
      //             "price": 75
      //         }, {
      //             "date": "2012-03-05",
      //             "price": 158
      //         }, {
      //             "date": "2012-03-06",
      //             "price": 57
      //         }, {
      //             "date": "2012-03-07",
      //             "price": 107
      //         }, {
      //             "date": "2012-03-08",
      //             "price": 89
      //         }, {
      //             "date": "2012-03-09",
      //             "price": 75
      //         }, {
      //             "date": "2012-03-10",
      //             "price": 132
      //         }, {
      //             "date": "2012-03-11",
      //             "price": 158
      //         }, {
      //             "date": "2012-03-12",
      //             "price": 56
      //         }, {
      //             "date": "2012-03-13",
      //             "price": 169
      //         }, {
      //             "date": "2012-03-14",
      //             "price": 24
      //         }, {
      //             "date": "2012-03-15",
      //             "price": 147
      //         }],
      //         "valueAxes": [{
      //             "logarithmic": true,
      //             "dashLength": 1,
      //             "guides": [{
      //                 "dashLength": 6,
      //                 "inside": true,
      //                 "label": "average",
      //                 "lineAlpha": 1,
      //                 "value": 90.4
      //             }],
      //             "position": "left"
      //         }],
      //         "graphs": [{
      //             "bullet": "round",
      //             "id": "g1",
      //             "bulletBorderAlpha": 1,
      //             "bulletColor": "#FFFFFF",
      //             "bulletSize": 7,
      //             "lineThickness": 2,
      //             "title": "Price",
      //             "type": "smoothedLine",
      //             "useLineColorForBulletBorder": true,
      //             "valueField": "price"
      //         }],
      //         "chartScrollbar": {},
      //         "chartCursor": {
      //             "valueLineEnabled": true,
      //             "valueLineBalloonEnabled": true,
      //             "valueLineAlpha": 0.5,
      //             "fullWidth": true,
      //             "cursorAlpha": 0.05
      //         },
      //         "dataDateFormat": "YYYY-MM-DD",
      //         "categoryField": "date",
      //         "categoryAxis": {
      //             "parseDates": true
      //         },
      //         "export": {
      //             "enabled": false
      //         }
      //     });
      //
      //     chart.addListener("dataUpdated", zoomChart);
      //
      //     function zoomChart() {
      //         chart.zoomToDates(new Date(2012, 2, 2), new Date(2012, 2, 10));
      //     }

      var chartData = generateChartData();

var chart = AmCharts.makeChart("lineChartdiv", {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "dataProvider": chartData,
    "valueAxes": [{
        "position": "left",
        "title": ""
    }],
    "graphs": [{
        "id": "g1",
        "fillAlphas": 0.4,
        "valueField": "visits",
         "balloonText": "<div style='margin:5px; font-size:10px;'>Price:<b>[[value]]</b></div>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
    },
    "chartCursor": {
        "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
        "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
        "minPeriod": "mm",
        "parseDates": true
    },
    "export": {
        "enabled": false,
         "dateFormat": "YYYY-MM-DD HH:NN:SS"
    }
});

chart.addListener("dataUpdated", zoomChart);
// when we apply theme, the dataUpdated event is fired even before we add listener, so
// we need to call zoomChart here
zoomChart();
// this method is called when chart is first inited as we listen for "dataUpdated" event
function zoomChart() {
    // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
    chart.zoomToIndexes(chartData.length - 250, chartData.length - 100);
}

// generate some random data, quite different range
function generateChartData() {
    var chartData = [];
    // current date
    var firstDate = new Date();
    // now set 500 minutes back
    firstDate.setMinutes(firstDate.getDate() - 1000);

    // and generate 500 data items
    var visits = 500;
    for (var i = 0; i < 500; i++) {
        var newDate = new Date(firstDate);
        // each time we add one minute
        newDate.setMinutes(newDate.getMinutes() + i);
        // some random number
        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        // add data item to the array
        chartData.push({
            date: newDate,
            visits: visits
        });
    }
    return chartData;
}
    };


    ////Bar Chart function
      // $scope.barChartGenerator = function(){
      //   var initStackedBarChart = {
      //   	draw: function(config) {
      //   		me = this,
      //   		domEle = config.element,
      //   		stackKey = config.key,
      //   		data = config.data,
      //   		margin = {top: 20, right: 20, bottom: 30, left: 50},
      //   		parseDate = d3.timeParse("%m/%Y"),
      //   		width = 400 - margin.left - margin.right,
      //   		height = 250 - margin.top - margin.bottom,
      //   		xScale = d3.scaleLinear().rangeRound([0, width]),
      //   		yScale = d3.scaleBand().rangeRound([height, 0]).padding(0.1),
      //   		color = d3.scaleOrdinal(d3.schemeCategory20),
      //   		xAxis = d3.axisBottom(xScale),
      //   		yAxis =  d3.axisLeft(yScale).tickFormat(d3.timeFormat("%b")),
      //   		svg = d3.select("#"+domEle).append("svg")
      //   				.attr("width", width + margin.left + margin.right)
      //   				.attr("height", height + margin.top + margin.bottom)
      //           .attr('style',  'background:#7a80')
      //   				.append("g")
      //   				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      //
      //   		var stack = d3.stack()
      //   			.keys(stackKey)
      //   			/*.order(d3.stackOrder)*/
      //   			.offset(d3.stackOffsetNone);
      //
      //   		var layers= stack(data);
      //   			data.sort(function(a, b) { return b.total - a.total; });
      //   			yScale.domain(data.map(function(d) { return parseDate(d.date); }));
      //   			xScale.domain([0, d3.max(layers[layers.length - 1], function(d) { return d[0] + d[1]; }) ]).nice();
      //
      //   		var layer = svg.selectAll(".layer")
      //   			.data(layers)
      //   			.enter().append("g")
      //   			.attr("class", "layer")
      //   			.style("fill", function(d, i) { return color(i); });
      //
      //   		  layer.selectAll("rect")
      //   			  .data(function(d) { return d; })
      //   			.enter().append("rect")
      //   			  .attr("y", function(d) { return yScale(parseDate(d.data.date)); })
      //   			  .attr("x", function(d) { return xScale(d[0]); })
      //   			  .attr("height", yScale.bandwidth())
      //   			  .attr("width", function(d) { return xScale(d[1]) - xScale(d[0]) });
      //
      //   			svg.append("g")
      //   			.attr("class", "axis axis--x")
      //   			.attr("transform", "translate(0," + (height+5) + ")")
      //         .style('fill','#fff')
      //   			.call(xAxis);
      //
      //   			svg.append("g")
      //   			.attr("class", "axis axis--y")
      //   			.attr("transform", "translate(0,0)")
      //   			.call(yAxis);
      //   	}
      //   }
      //   var data = [{"date":"4/1854","total":30643,"disease":1,"wounds":0,"other":5},
      //               {"date":"7/1854","total":28772,"disease":359,"wounds":0,"other":23},
      //               {"date":"8/1854","total":30246,"disease":828,"wounds":1,"other":30},
      //               {"date":"9/1854","total":30290,"disease":788,"wounds":81,"other":70},
      //               {"date":"10/1854","total":8571,"disease":503,"wounds":132,"other":128},
      //               {"date":"11/1854","total":29736,"disease":844,"wounds":287,"other":106},
      //               {"date":"5/1854","total":23333,"disease":12,"wounds":0,"other":9},
      //               {"date":"6/1854","total":28333,"disease":11,"wounds":0,"other":6}];
      //   var key = ["wounds", "other", "disease"];
      //   initStackedBarChart.draw({
      //   	data: data,
      //   	key: key,
      //   	element: 'stackedBar'
      //   });
      // };



// //// PieChart function
//       $scope.pieChartGenerator = function(){
//         var data = [10, 20, 100];
//
//         var width = 260,
//         height = 220,
//         radius = Math.min(width, height) / 2;
//
//         var color = d3.scaleOrdinal()
//         .range(["#ff7f0e", "#aec7e8", "#1f77b4"]);
//
//         var arc = d3.arc()
//         .outerRadius(radius - 10)
//         .innerRadius(0);
//
//         var labelArc = d3.arc()
//         .outerRadius(radius - 40)
//         .innerRadius(radius - 40);
//
//         var pie = d3.pie()
//         .sort(null)
//         .value(function(d) { return d; });
//
//         var svg = d3.select("#pieChart").append("svg")
//         .attr("width", width)
//         .attr("height", height)
//         .append("g")
//         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
//
//         var g = svg.selectAll(".arc")
//         .data(pie(data))
//         .enter().append("g")
//         .attr("class", "arc");
//
//         g.append("path")
//         .attr("d", arc)
//         .style("fill", function(d) { return color(d.data); });
//
//         g.append("text")
//         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
//         .attr("dy", ".35em")
//         .text(function(d) { return d.data; });
//       };
//

   //     $scope.pieChartGenerator = function(){
   //       var chart = AmCharts.makeChart( "pieChartdiv", {
   //   "type": "pie",
   //   "theme": "dark",
   //   "dataProvider": [ {
   //     "country": "Lithuania",
   //     "litres": 501.9
   //   }, {
   //     "country": "Czech Republic",
   //     "litres": 301.9
   //   }, {
   //     "country": "Ireland",
   //     "litres": 201.1
   //   }, {
   //     "country": "Germany",
   //     "litres": 165.8
   //   }, {
   //     "country": "Australia",
   //     "litres": 139.9
   //   }, {
   //     "country": "Austria",
   //     "litres": 128.3
   //   }, {
   //     "country": "UK",
   //     "litres": 99
   //   }, {
   //     "country": "Belgium",
   //     "litres": 60
   //   }, {
   //     "country": "The Netherlands",
   //     "litres": 50
   //   } ],
   //   "valueField": "litres",
   //   "titleField": "country",
   //    "balloon":{
   //    "fixedPosition":false
   //   },
   //   "export": {
   //     "enabled": false
   //   }
   // } );
   //  };

    $scope.pieChartGenerator = function(){

// Build the chart
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
       name: 'Brands',
       colorByPoint: true,
       "colorField": "color",
       data: [{
           name: 'Microsoft',
           y: 1048.21,
           sliced: true,
           selected: true,
           color:"#2a7091"
       },  {
            name: 'Google',
            y: 95.16

        }, {
            name: 'Facebook Inc',
            y: 176.61

        }, {
            name: 'Intel Corporation',
            y: 58.21

        }, {
            name: 'Accenture',
            y: 153.44
        }, {
            name: 'AT&T Inc',
            y: 32.14
        }]
    }]
});
    };

// Theme changer js

      $scope.darkTheme = true;
     var themesheet = $('<link href="https://bootswatch.com/3/slate/bootstrap.min.css" rel="stylesheet" />');
            themesheet.appendTo('head');

        $scope.themeSwitcher=function(){
        	    if($scope.darkTheme){
                themesheet.attr('href',"https://bootswatch.com/3/spacelab/bootstrap.min.css");
                	$scope.darkTheme = false;
        //		$(".themeButton").html("Dark Theme");
                		} else {

        			themesheet.attr('href',"https://bootswatch.com/3/slate/bootstrap.min.css");
              	$scope.darkTheme = true;
        	//		$(".themeButton").html("Light Theme");
        		}
          }

//World map js

  $scope.worldMapGenerator = function(){
    // var map = AmCharts.makeChart( "chartdiv", {
    //
    //     "type": "map",
    //     //"theme": "black",
    //     "theme": "dark",
    //     "projection": "miller",
    //
    //     "dataProvider": {
    //       "map": "worldLow",
    //       "getAreasFromMap": true
    //     },
    //     "areasSettings": {
    //       "autoZoom": true,
    //       "selectedColor": "#ff7f0e"
    //     },
    //     "smallMap": {},
    //     "export": {
    //       "enabled": false,
    //       "position": "bottom-right"
    //     }
    //   });

    //new map

    /**
 * This example uses pulsating circles CSS by Kevin Urrutia
 * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
 */

var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "dark",
  "projection": "miller",

  "imagesSettings": {
     "rollOverColor": "#9fc6ec",
    "rollOverScale": 3,
    "selectedScale": 3,
     "selectedColor": "#9fc6ec",
     "color": "#9fc6ec"
  },

  "areasSettings": {
    "unlistedAreasColor": "#9fc6ec"
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [ {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Brussels",
      "latitude": 50.8371,
      "longitude": 4.3676
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Copenhagen",
      "latitude": 55.6763,
      "longitude": 12.5681
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Paris",
      "latitude": 48.8567,
      "longitude": 2.3510
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Reykjavik",
      "latitude": 64.1353,
      "longitude": -21.8952
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Moscow",
      "latitude": 55.7558,
      "longitude": 37.6176
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Madrid",
      "latitude": 40.4167,
      "longitude": -3.7033
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "London",
      "latitude": 51.5002,
      "longitude": -0.1262,
      "url": "http://www.google.co.uk"
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Peking",
      "latitude": 39.9056,
      "longitude": 116.3958
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "New Delhi",
      "latitude": 28.6353,
      "longitude": 77.2250
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Tokyo",
      "latitude": 35.6785,
      "longitude": 139.6823,
      "url": "http://www.google.co.jp"
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Ankara",
      "latitude": 39.9439,
      "longitude": 32.8560
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Buenos Aires",
      "latitude": -34.6118,
      "longitude": -58.4173
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Brasilia",
      "latitude": -15.7801,
      "longitude": -47.9292
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Ottawa",
      "latitude": 45.4235,
      "longitude": -75.6979
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Washington",
      "latitude": 38.8921,
      "longitude": -77.0241
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Kinshasa",
      "latitude": -4.3369,
      "longitude": 15.3271
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Cairo",
      "latitude": 30.0571,
      "longitude": 31.2272
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Pretoria",
      "latitude": -25.7463,
      "longitude": 28.1876
    } ]
  }
} );

// add events to recalculate map position when the map is moved or zoomed
map.addListener( "positionChanged", updateCustomMarkers );

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers( event ) {
  // get map object
  var map = event.chart;

  // go through all of the images
  for ( var x in map.dataProvider.images ) {
    // get MapImage object
    var image = map.dataProvider.images[ x ];

    // check if it has corresponding HTML element
    if ( 'undefined' == typeof image.externalElement )
      image.externalElement = createCustomMarker( image );

    // reposition the element accoridng to coordinates
    var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
    image.externalElement.style.top = xy.y + 'px';
    image.externalElement.style.left = xy.x + 'px';
  }
}

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  // create holder
  var holder = document.createElement( 'div' );
  holder.className = 'map-marker';
  holder.title = image.title;
  holder.style.position = 'absolute';

  // maybe add a link to it?
  if ( undefined != image.url ) {
    holder.onclick = function() {
      window.location.href = image.url;
    };
    holder.className += ' map-clickable';
  }

  // create dot
  var dot = document.createElement( 'div' );
  dot.className = 'dot';
  holder.appendChild( dot );

  // create pulse
  var pulse = document.createElement( 'div' );
  pulse.className = 'pulse';
  holder.appendChild( pulse );

  // append the marker to the map container
  image.chart.chartDiv.appendChild( holder );

  return holder;
}

  };

});
