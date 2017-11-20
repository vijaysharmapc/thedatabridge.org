google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawTable);

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });
// Load the Visualization API and the line package.
google.charts.load('current', {'packages':['line']});
// Load the Visualization API and the TABLE package.
google.charts.load('current', {'packages':['table']});


google.charts.setOnLoadCallback(
  function() { // Anonymous function that calls drawChart1 and drawChart2
       drawCityMap1();
       drawCityMap2();
       drawRegionsMap1();
       drawRegionsMap2();
    });


//line chart
function drawChart() {

    $.ajax({
    type: 'GET',
    url: 'http://databridge.info/api/bymvg',

  success: function (data1) {
     //alert (data1);
    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();

  data.addColumn('string', 'WEEK_NUMBER');
  data.addColumn('number', 'BAAHUBALI-II');
  data.addColumn('number', 'DANGAL');

  var jsonData = $.parseJSON(data1);

  for (var i = 0; i < jsonData.length; i++) {
        data.addRow([jsonData[i].week_number, parseInt(jsonData[i].movie1), parseInt(jsonData[i].movie2)]);
  }
  var options = {
    chart: {
      title: 'Movie\'s popularity over a 26 week period ',
      subtitle: 'week0 is the release week,week-9 is 9 weeks before release & week16 is 16 weeks after'
    },
    width: 600,
    height: 400,
    lineWidth: 50,
    axes: {
      x: {
        0: {side: 'bottom'}
      }
    }

  };
  var chart = new google.charts.Line(document.getElementById('line_chart'));
  chart.draw(data, options);
   }
 });
}

//table
function drawTable() {

    $.ajax({
    type: 'GET',
    url: 'http://databridge.info/api/bymvg',
    success: function (data1) {
    //alert (data1);
    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();

  data.addColumn('string', 'WEEK');
  data.addColumn('number', 'BAAHUBALI-II');
  data.addColumn('number', 'DANGAL');

  var jsonData = $.parseJSON(data1);

  for (var i = 0; i < jsonData.length; i++) {
        data.addRow([jsonData[i].week_number, parseInt(jsonData[i].movie1), parseInt(jsonData[i].movie2)]);
  }
  var options = {

  };
   var table = new google.visualization.Table(document.getElementById('line_table'));
   table.draw(data, {showRowNumber: true, width: '80%', height: '50%'});
   }
 });
}




//geo world
google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyDJEVHpdrrT-pwLVT2-kw2xBzZKpXv1cfY'
  });
//  google.charts.setOnLoadCallback(drawCityMap1);
//  google.charts.setOnLoadCallback(drawCityMap2);
//  google.charts.setOnLoadCallback(drawRegionsMap1);
//  google.charts.setOnLoadCallback(drawRegionsMap2);

//BAAHUBALI
function drawRegionsMap1() {
var data = google.visualization.arrayToDataTable([
['latitude','longitude','Popularity'],
[-25.274398,133.775136,2],
[23.684994,90.356331,45],
[-16.290154,-63.588653,5],
[56.130366,-106.346771,1],
[35.86166,104.195397,8],
[20.593684,78.96288,80],
[29.31166,47.481766,16],
[4.210484,101.975766,6],
[	28.394857,84.124008,55],
[9.081999,8.675277,5],
[21.512583,55.923255,17],
[30.375321,69.345116,15],
[12.879721,121.774017,1],
[25.354826,51.183884,22],
[23.885942,45.079162,6],
[1.352083,103.819836,6],
[873054,80.771797,25],
[15.870032,100.992541,1],
[23.424076,53.847818,22],
[55.378051,-3.435973,1],
[37.09024,-95.712891,1]
  ]);

    var options = {
      sizeAxis: { minValue: 0, maxValue: 100 },
      //region: 'IN',regions,markers
      title: 'Dangal  reach',
      displayMode: 'markers',
      colorAxis: {colors: ['red','brown']}, // orange to blue
      //defaultColor: '#f5f5f5'
      //backgroundColor: '#F2F4F4'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regionschart1'));

    chart.draw(data, options);
  }
//dangal
function drawRegionsMap2() {
var data = google.visualization.arrayToDataTable([
  ['latitude','longitude','Popularity'],
  [28.033886,1.659626,4],
  [-25.274398,133.775136,1],
  [25.930414,50.637772,8],
  [23.684994,90.356331,27],
  [56.130366,-106.346771,1],
  [35.86166,104.195397,25],
  [26.820553,30.802498,3],
  [20.593684,78.96288,39],
  [33.223191,43.679291,6],
  [29.31166,47.481766,6],
  [4.210484,101.975766,3],
  [-20.348404,57.552152,11],
  [21.913965,95.956223,9],
  [28.394857,84.124008,34],
  [-40.900557,174.885971,1],
  [21.512583,55.923255,22],
  [12.879721,121.774017,1],
  [25.354826,51.183884,17],
  [23.885942,45.079162,6],
  [1.352083,103.819836,2],
  [7.873054,80.771797,3],
  [38.963745,35.243322,1],
  [23.424076,53.847818,15],
  [55.378051,-3.435973,1],
  [37.09024,-95.712891,1],
  [15.552727,48.516388,7]
  ]);

    var options = {
      sizeAxis: { minValue: 0, maxValue: 100 },
      //region: 'IN',
      title: 'Dangal  reach',
      displayMode: 'markers',
      colorAxis: {colors: ['green','teal']}, // orange to blue
      //backgroundColor: '#F2F4F4'
      //defaultColor: '#f5f5f5'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regionschart2'));

    chart.draw(data, options);
    //BAAHUBALI City
  }

  function drawCityMap1() {
  var data = google.visualization.arrayToDataTable([
  ['City', 'Popularity'],
  ['Ahmedabad',47],
  ['Bengaluru',36],
  ['Bhankrota',54],
  ['Bhopal',25],
  ['Bhubaneswar',68],
  ['Chandigarh',6],
  ['Chennai',32],
  ['Coimbatore',24],
  ['Dehradun',39],
  ['Guntur',76],
  ['Gurgaon',15],
  ['Guwahati',44],
  ['Howrah',26],
  ['Hyderabad',66],
  ['Indore',56],
  ['Jammu',36],
  ['Kochi',68],
  ['Kolkata',15],
  ['Lucknow',37],
  ['Mumbai',19],
  ['Nagpur',32],
  ['Navi Mumbai',39],
  ['New Delhi',21],
  ['Noida',14],
  ['Pimpri-Chinchwad',19],
  ['Plano',8],
  ['Pune',28],
  ['Raipura',61],
  ['Secunderabad',54],
  ['Singapore',2],
  ['Surat',41],
  ['Thana Shankar+Agra',86],
  ['Thiruvananthapuram',29],
  ['Vadodara',29],
  ['Vijayawada',65],
  ['Visakhapatnam',57],
  ['Srinagar',1]
    ]);

      var options = {
        sizeAxis: { minValue: 0, maxValue: 100 },
        region: 'IN',
        title: 'Dangal  reach',
        displayMode: 'markers',
        colorAxis: {colors: ['red','brown']}, // orange to blue
        domain: 'IN',
        backgroundColor: '#1B2631'
      };

      var chart = new google.visualization.GeoChart(document.getElementById('citychart1'));

      chart.draw(data, options);
    }
  //Dangal City
  function drawCityMap2() {
  var data = google.visualization.arrayToDataTable([
    ['City', 'Popularity'],
    ['Ahmedabad',19],
    ['Bengaluru',7],
    ['Bhankrota',41],
    ['Bhopal',17],
    ['Bhubaneswar',25],
    ['Chandigarh',2],
    ['Chennai',6],
    ['Coimbatore',4],
    ['Dehradun',22],
    ['Gurgaon',9],
    ['Guwahati',24],
    ['Howrah',11],
    ['Hyderabad',10],
    ['Indore',36],
    ['Jammu',32],
    ['Kochi',17],
    ['Kolkata',10],
    ['Lucknow',30],
    ['Mumbai',8],
    ['Nagpur',14],
    ['Navi Mumbai',27],
    ['New Delhi',9],
    ['Noida',8],
    ['Pimpri-Chinchwad',8],
    ['Plano',6],
    ['Pune',12],
    ['Raipura',43],
    ['Secunderabad',10],
    ['Singapore',1],
    ['Surat',13],
    ['Thana Shankar+Agra',100],
    ['Thiruvananthapuram',5],
    ['Vadodara',10],
    ['Vijayawada',6],
    ['Visakhapatnam',8],
    ['Srinagar',2]
  ]);

      var options = {

        sizeAxis: { minValue: 0, maxValue: 100 },
        region: 'IN',
        title: 'Dangal  reach',
//regions/markers
        displayMode: 'markers',
        colorAxis: {colors: ['green','teal']}, // orange to blue
        domain: 'IN',
        backgroundColor: '#1B2631'
      };

      var chart = new google.visualization.GeoChart(document.getElementById('citychart2'));

      chart.draw(data, options);
    }
