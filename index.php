<?php
    $conn = mysqli_connect('localhost', 'galacticJohn', 'bull1607', 'galacticJohn');
    $sql = "SELECT * FROM xboxTracker";
    $result = mysqli_query($conn, $sql);
    $myArray = array();
    while ($row = mysqli_fetch_assoc($result)) {
    $myArray[] = $row;
    }

    mysqli_close($conn);

    $json = json_encode($myArray);

    $arr = json_decode($json);

    $JWCount = 0;
    $OWCount = 0;
    $DWCount = 0;
    $AWCount = 0;

    foreach ($arr as $key => $jsons) {
      foreach ($jsons as $key => $value) {
        if ($key == 'winner' && $value == 'John') {
          $JWCount++;
        }
        elseif ($key == 'winner' && $value == 'Oleg') {
          $OWCount++;
        }
        elseif ($key == 'winner' && $value == 'David') {
          $DWCount++;
        }
        elseif ($key == 'winner' && $value == "Amit") {
          $AWCount++;
        }
      }
    }

    echo "John's Wins: " . $JWCount . '<br>';

    $JHCount = 0;
    $OHCount = 0;
    $DHCount = 0;
    $AHCount = 0;

    foreach ($arr as $key => $jsons) {
      foreach ($jsons as $key => $value) {
        if ($key == 'home' && $value == 'John') {
          $JHCount++;
        }
        elseif ($key == 'home' && $value == 'Oleg') {
          $OHCount++;
        }
        elseif ($key == 'home' && $value == 'David') {
          $DHCount++;
        }
        elseif ($key == 'home' && $value == "Amit") {
          $AHCount++;
        }
      }
    }

    echo "John's Home Games: " . $JHCount . '<br>';
    echo "Oleg's Home Games: " . $OHCount . '<br>';
    echo "David's Home Games: " . $DHCount . '<br>';
    echo "Amit's Home Games: " . $AHCount . '<br>';

?>



<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="author" content="John F. Black">
        <meta name="description" content="Test Site for John F. Black">
        <meta name="keywords" content="John, John Black, John F Black, John F. Black, John Francis Black, Test Site, Test, Synacor, Facebook, NBC, NBCUniversal, LocalEdge, Buffalo, New York, New York City, NYC, Grand Island, University at Buffalo, UB, Technical Support, Ad Operations, AdOps, AdTech">
        <title>UniverseJohn</title>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <h2>Total Wins</h2>
      <div class="meters">
        <div id="chart1_div" style="width: 220px; height: 220px;"></div>
        <div id="chart2_div" style="width: 220px; height: 220px;"></div>
        <div id="chart3_div" style="width: 220px; height: 220px;"></div>
        <div id="chart4_div" style="width: 220px; height: 220px;"></div>
      </div>
      <br>
       <div id="home_div"></div>
    </body>



<script type="text/javascript">
google.charts.load('current', {packages: ['corechart', 'bar', 'gauge']});
google.charts.setOnLoadCallback(drawWinsChart);
google.charts.setOnLoadCallback(drawGoalsChart);

  var JBH = <?php echo $JHCount; ?>;
  var ABH = <?php echo $AHCount; ?>;
  var ORH = <?php echo $OHCount; ?>;
  var DRH = <?php echo $DHCount; ?>;

  function drawGoalsChart() {
    var dataGoals = google.visualization.arrayToDataTable([
      ['Player', 'Home'],
      ['John', JBH, ],
      ['David', DRH, ],
      ['Amit', ABH, ],
      ['Oleg', ORH, ]
    ]);

    var optionsGoals = {
      title: 'Total Home Games',
      chartArea: {width: '30%'},
      hAxis: {
        title: 'Home',
        minValue: 0
      },
      vAxis: {
        title: 'Players'
      }
    };

    var chart5 = new google.visualization.BarChart(document.getElementById('home_div'));
    chart5.draw(dataGoals, optionsGoals);
  }


  var JB = <?php echo $JWCount; ?>;
  var AB = <?php echo $AWCount; ?>;
  var OR = <?php echo $OWCount; ?>;
  var DR = <?php echo $DWCount; ?>;

  function drawWinsChart() {

    var data1 = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Amit', AB],
    ]);

    var data2 = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['John', JB],
    ]);

    var data3 = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Oleg', OR],
    ]);

    var data4 = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['David', DR],
    ]);

    var options = {
      width: 220, height: 220,
      redFrom: 0, redTo: 50,
      greenFrom: 50, greenTo: 100,
      minorTicks: 5
    };



    var chart1 = new google.visualization.Gauge(document.getElementById('chart1_div'));
    var chart2 = new google.visualization.Gauge(document.getElementById('chart2_div'));
    var chart3 = new google.visualization.Gauge(document.getElementById('chart3_div'));
    var chart4 = new google.visualization.Gauge(document.getElementById('chart4_div'));

    chart1.draw(data1, options);
    chart2.draw(data2, options);
    chart3.draw(data3, options);
    chart4.draw(data4, options);

  }
</script>

</html>
