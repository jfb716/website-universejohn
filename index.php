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

    $arr = json_decode($json, true);

    $JohnW = 0;
    $AmitW = 0;
    $DavidW = 0;
    $OlegW = 0;
    $TotalG = 0;
    $AmitH = 0;
    $JohnH = 0;
    $OlegH = 0;
    $DavidH = 0;

    foreach ($arr as $key => $jsons) {
      foreach ($jsons as $key => $value) {
        if ($key == 'winner' && $value == 'John') {
          $JohnW++;
        }
        elseif ($key == 'winner' && $value == 'Oleg') {
          $OlegW++;
        }
        elseif ($key == 'winner' && $value == 'David') {
          $DavidW++;
        }
        elseif ($key == 'winner' && $value == 'Amit') {
          $AmitW++;
        }
        elseif ($key == 'id') {
          $TotalG++;
        }
        elseif ($key == 'home' && $value == 'Amit') {
          $AmitH++;
        }
        elseif ($key == 'home' && $value == 'Oleg') {
          $OlegH++;
        }
        elseif ($key == 'home' && $value == 'John') {
          $JohnH++;
        }
        elseif ($key == 'home' && $value == 'David') {
          $DavidH++;
        }
      }
    }

    $JohnP = round(($JohnW / $TotalG) * 100);
    $AmitP = round(($AmitW / $TotalG) * 100);
    $DavidP = round(($DavidW / $TotalG) * 100);
    $OlegP = round(($OlegW / $TotalG) * 100);

    $JohnHP = round(($JohnH / $TotalG) * 100);
    $AmitHP = round(($AmitH / $TotalG) * 100);
    $DavidHP = round(($DavidH / $TotalG) * 100);
    $OlegHP = round(($OlegH / $TotalG) * 100);

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

      <div class="charts">
        <div id="winp_chart_div"></div>
        <div id="homep_chart_div"></div>
      </div>

    </body>



    <script>
    google.charts.load('current', {'packages':['corechart', 'annotationchart']});
    google.charts.setOnLoadCallback(drawWinPChart);
    google.charts.setOnLoadCallback(drawHomePChart);

    var JP = <?php echo $JohnP ?>;
    var OP = <?php echo $OlegP ?>;
    var AP = <?php echo $AmitP ?>;
    var DP = <?php echo $DavidP ?>;

    var JHP = <?php echo $JohnHP ?>;
    var OHP = <?php echo $OlegHP ?>;
    var AHP = <?php echo $AmitHP ?>;
    var DHP = <?php echo $DavidHP ?>;

    function drawWinPChart() {

     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Player');
     data.addColumn('number', 'Win Percent');
     data.addRows([
       ['John', JP],
       ['Amit', AP],
       ['David', DP],
       ['Oleg', OP]
     ]);

     var options = {title:'Percentage of Total Wins',
                    width:400,
                    height:300};

     var chart = new google.visualization.PieChart(document.getElementById('winp_chart_div'));
     chart.draw(data, options);
    }

    function drawHomePChart() {

     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Player');
     data.addColumn('number', 'Home Percent');
     data.addRows([
       ['John', JHP],
       ['Amit', AHP],
       ['David', DHP],
       ['Oleg', OHP]
     ]);

     var options = {title:'Percentage of Total Home Games',
                    width:400,
                    height:300};

     var chart = new google.visualization.PieChart(document.getElementById('homep_chart_div'));
     chart.draw(data, options);
    }
    </script>



</html>
