<?php
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST');
        header('Access-Control-Max-Age: 1000');
        header("content-type: application/json");

        $jsonobj = new stdClass();
        $jsonobj->operation = null;

        $conn = mysqli_connect('eclectic.ciwss8n8nsgm.us-west-1.rds.amazonaws.com', 'cmpe280', 'cmpe280project', 'eclectic');
        // Check connection
  if ($conn->connect_error >0) {
    $jsonobj->operation = "Error" ;
    die("Connection failed: " . $conn->connect_error);
  }
// through the global variable $_POST, like this:
  $fname= $_POST['fname'];
  $lname= $_POST['lname'];
  $email1= $_POST['email1'];
  $password1=$_POST['password1'];

  $sql = "INSERT INTO registration(firstname,lastname,email,password) VALUES('".$fname."','".$lname."','".$email1."','".$password1."');";
  if($conn->query($sql) === TRUE){
      $jsonobj->sqlINSERTstatus = 'success';
      $jsonobj->userid = $fname;
  } else {
      $jsonobj->sqlINSERTstatus = 'DUPLICATEError';
  }
  $jsonobj->operation = "success";
  $conn->close();
  echo json_encode($jsonobj);
?>
