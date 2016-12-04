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
  $fname = isset($_REQUEST['fname']) ? $_REQUEST['fname'] : 'null';
  $lname = isset($_REQUEST['lname']) ? $_REQUEST['lname'] : 'null';
  $email = isset($_REQUEST['email1']) ? $_REQUEST['email1'] : 'null';
  $password = isset($_REQUEST['password1']) ? $_REQUEST['password1'] : 'null';

  $sql = "INSERT INTO registration(FIRSTNAME,LASTNAME,EMAIL,PASSWORD) VALUES('".$fname."','".$lname."','".$email."','".$password."');";

  if($conn->query($sql) == TRUE){
      //print("error <br>");
      $jsonobj->sqlINSERTstatus = 'Success';
      $jsonobj->userid = $email;
  }else{
      $jsonobj->sqlINSERTstatus = 'DUPLICATEError';
  }
  $jsonobj->operation = "success";
  echo json_encode($jsonobj);
?>
