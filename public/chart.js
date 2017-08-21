

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });
// Load the Visualization API and the line package.
google.charts.load('current', {'packages':['line']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

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
