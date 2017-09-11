<?php
$conn = new mysqli("localhost","jfblack","bull1607","john_master");
if($conn->connect_error){die("error");}

$sql = $conn->prepare("INSERT INTO classes (class, site, category, complete) VALUES (?,?,?,?)");
$sql->bind_param("sssi",$_POST['class'],$_POST['site'], $_POST['category'], $_POST['complete']);

if($sql->execute()){
  echo 'success';
}else{
  echo 'error '. mysqli_error($conn);
}

$sql->close();
?>
