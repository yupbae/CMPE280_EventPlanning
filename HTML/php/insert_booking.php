<?php
	header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST');
        header('Access-Control-Max-Age: 1000');
        header("content-type: application/json");
        
        $jsonobj->operation = null;

        $dbhost = 'eclectic.ciwss8n8nsgm.us-west-1.rds.amazonaws.com';
        $dbuser = 'cmpe280';
        $dbpass = 'cmpe280project';
        $dbname = 'eclectic';
	 //connect to database
  $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
  // Check connection
  if ($conn->connect_error >0) {
    $jsonobj->operation = "Error" ;
    die("Connection failed: " . $conn->connect_error);
  } 
// through the global variable $_POST, like this:
  $eventdate= $_POST['eventdate'];
  $loc_id= $_POST['loc_id'];
  $user= $_POST['user'];

  $sql = "SELECT max(booking_id) as book_id from bookings;";
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  $book_id = $row["book_id"];
  $book_id = $book_id + 1;

  $sql = "INSERT INTO bookings(booking_id,username,location_id,eventdate) VALUES('".$book_id."','".$user."','".$loc_id."','".$eventdate."');";

  if($conn->query($sql) === TRUE){
      $jsonobj->sqlINSERTstatus = 'Success';
  } else {
      $jsonobj->sqlINSERTstatus = 'DUPLICATEError';
  }
  $jsonobj->operation = "success";
  $conn->close();
  echo json_encode($jsonobj);
?>