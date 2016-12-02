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
  	$sql = "SELECT username, eventdate, review FROM bookings;";
  	$result = $conn->query($sql);
      	$count = mysqli_num_rows($result);
        $response["Review"] = array();
		
      if($count > 0) {
	 while($row = $result->fetch_assoc()) {
             array_push($response["Review"], $row);
         }   
         $response["operation"] = 'Ok';
      }else {
         $response["Review"] = null;
         $response["operation"] = 'Error';
      }
  $conn->close();
      echo json_encode($response);
?>