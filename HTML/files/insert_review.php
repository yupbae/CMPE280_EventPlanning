<?php
	header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST');
        header('Access-Control-Max-Age: 1000');
        header("content-type: application/json");
        
        $jsonobj = new stdClass();
        $jsonobj->operation = null;

	$conn = new mysqli('eclectic.ciwss8n8nsgm.us-west-1.rds.amazonaws.com', 'cmpe280', 'cmpe280project', 'eclectic');
  // Check connection
  if ($conn->connect_error >0) {
    $jsonobj->operation = "Error" ;
    die("Connection failed: " . $conn->connect_error);
  } 
// through the global variable $_POST, like this:
  $book_id= (int)$_POST['book_id'];
  $review = $_POST['review'];

  $sql = "UPDATE bookings set review = '$review' where booking_id = $book_id;";
  if($conn->query($sql) === TRUE){
      $jsonobj->sqlUPDATEstatus = 'Success';
      $jsonobj->operation = "Ok";
  } else {
      $jsonobj->sqlUPDATEstatus = 'Error';
      $jsonobj->operation = "Error";
  }
  $conn->close();
  echo json_encode($jsonobj);
?>
