<?php
	header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST');
        header('Access-Control-Max-Age: 1000');
        header("content-type: application/json");
        
        $jsonobj->operation = null;
		session_start();

        $dbhost = 'localhost';
        $dbuser = 'id232855_eclectic';
        $dbpass = 'project@cmpe280';
        $dbname = 'id232855_eclectic_db';
	 //connect to database
  	$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
  	// Check connection
  	if ($conn->connect_error >0) {
    	$jsonobj->operation = "Error" ;
    	die("Connection failed: " . $conn->connect_error);
  	} 
//	through the global variable $_POST, like this:
        $email = isset($_POST['email1']) ? $_POST['email1'] : 'null';
        $password = isset($_POST['password1']) ? $_POST['password1'] : 'null';
  	$sql = "SELECT email FROM registration WHERE email = '$email' and password = '$password'";
  	$result = $conn->query($sql);    
      	$count = mysqli_num_rows($result);
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count > 0) {
		 $sql = "select firstname from registration where email = '$email'";
		 $result = $conn->query($sql);
		 $row = $result->fetch_assoc();
		 $fname = $row["firstname"];
         $jsonobj->userid= $fname;
         $jsonobj->operation = 'Ok';
		
		 $_SESSION["username"] = $fname;
		 echo $fname;
      }else {
         $jsonobj->userid= null;
         $jsonobj->operation = 'Error';
      }
      echo json_encode($jsonobj);
?>