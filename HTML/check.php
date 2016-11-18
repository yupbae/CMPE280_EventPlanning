<?php
   include("connect.php");
   session_start();
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      
      $userid = $_POST['userid'];
      $mypassword = $_POST['password1']; 
      
      $sql = "SELECT email FROM registration WHERE email = '$userid' and password = '$mypassword'";
      $result = mysqli_query($db,$sql);    
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count > 0) {
         echo "ok";
         $_SESSION['id'] = $userid;
      }else {
         $error = "Your Login Name or Password is invalid";
      }
   }
?>