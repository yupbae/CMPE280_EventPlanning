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
//	through the global variable $_POST, like this:
        $user= isset($_POST['user']) ? $_POST['user'] : 'null';
  	$sql = "SELECT booking_id, location_id, eventdate, review FROM bookings WHERE username = '$user'";
  	$result = $conn->query($sql);
      	$count = mysqli_num_rows($result);
        $response["Booking"] = array();
        $response["count"] = $count;
		
      if($count > 0) {
	 while($row = $result->fetch_assoc()) {
             array_push($response["Booking"], $row);
         }
             //array_push($response["Booking"], $items);
             
         $response["operation"] = 'Ok';
      }else {
         $response["Booking"] = null;
         $response["operation"] = 'Error';
      }
  $conn->close();
      echo json_encode($response);
?>