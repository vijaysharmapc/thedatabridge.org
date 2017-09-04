

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });
// Load the Visualization API and the line package.
google.charts.load('current', {'packages':['line']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

//line chart
function drawChart() {

    $.ajax({
    type: 'GET',
    url: 'http://databridge.info/api/byregiond',

  success: function (data1) {
   //alert (data1);
    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();

  data.addColumn('string', 'country');
  data.addColumn('number', 'bahubali');
  data.addColumn('number', 'dangal');

  var jsonData = $.parseJSON(data1);

  for (var i = 0; i < jsonData.length; i++) {
        data.addRow([jsonData[i].geoName, parseInt(jsonData[i].movie1), parseInt(jsonData[i].movie2)]);
  }
  var options = {
    chart: {
      title: 'Movie Performance',
      subtitle: 'Show Interest by Country'
    },
    width: 900,
    height: 500,
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

//geo world
google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
//  google.charts.setOnLoadCallback(drawRegionsMap1);
//  google.charts.setOnLoadCallback(drawRegionsMap2);
  google.charts.setOnLoadCallback(drawCityMap1);
  google.charts.setOnLoadCallback(drawCityMap2);

//BAAHUBALI
function drawRegionsMap1() {
var data = google.visualization.arrayToDataTable([
['Country', 'Popularity'],
['Australia',2],
['Bangladesh',45],
['Bolivia',5],
['Canada',1],
['China',8],
['India',100],
['Kuwait',16],
['Malaysia',6],
['Nepal',75],
['Nigeria',5],
['Oman',17],
['Pakistan',15],
['Philippines',1],
['Qatar',22],
['Saudi Arabia',6],
['Singapore',6],
['Sri Lanka',25],
['Thailand',1],
['United Arab Emirates',22],
['United Kingdom',1],
['United States',1]
  ]);

    var options = {
      sizeAxis: { minValue: 0, maxValue: 100 },
      //region: 'IN',
      title: 'Dangal  reach',
      displayMode: 'markers',
      colorAxis: {colors: ['red','brown']} // orange to blue
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regionschart1'));

    chart.draw(data, options);
  }
//dangal
function drawRegionsMap2() {
var data = google.visualization.arrayToDataTable([
  ['Country', 'Popularity'],
  ['Algeria',4],
  ['Australia',1],
  ['Bahrain',8],
  ['Bangladesh',27],
  ['Canada',1],
  ['China',25],
  ['Egypt',3],
  ['India',39],
  ['Iraq',6],
  ['Kuwait',6],
  ['Malaysia',3],
  ['Mauritius',11],
  ['Myanmar (Burma)',9],
  ['Nepal',34],
  ['New Zealand',1],
  ['Oman',22],
  ['Philippines',1],
  ['Qatar',17],
  ['Saudi Arabia',6],
  ['Singapore',2],
  ['Sri Lanka',3],
  ['Turkey',1],
  ['United Arab Emirates',15],
  ['United Kingdom',1],
  ['United States',1],
  ['Yemen',7]
  ]);

    var options = {
      sizeAxis: { minValue: 0, maxValue: 100 },
      //region: 'IN',
      title: 'Dangal  reach',
      displayMode: 'markers',
      colorAxis: {colors: ['black','blue']} // orange to blue
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
  ['Homagama',9],
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
    ['Homagama',1],
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
        displayMode: 'markers',
        colorAxis: {colors: ['green','teal']}, // orange to blue
        domain: 'IN',
        backgroundColor: '#1B2631'
      };

      var chart = new google.visualization.GeoChart(document.getElementById('citychart2'));

      chart.draw(data, options);
    }
