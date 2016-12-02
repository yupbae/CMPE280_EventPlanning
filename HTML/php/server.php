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
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $email = $_POST['email1'];
  $password = $_POST['password1'];

  $sql = "INSERT INTO registration(FIRSTNAME,LASTNAME,EMAIL,PASSWORD) VALUES('".$fname."','".$lname."','".$email."','".$password."');";

  if($conn->query($sql) === TRUE){
      //print("error <br>");
      $jsonobj->sqlINSERTstatus = 'Success';
      $jsonobj->userid = $email;
  }else{
      $jsonobj->sqlINSERTstatus = 'DUPLICATEError';
  }
  $jsonobj->operation = "success";
  echo json_encode($jsonobj);
?>