<?php
	include("db.php");
		
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $email = $_POST['email1'];
	$password = $_POST['password1'];
        if (isset($_POST['fname'])) {
	mysql_query("INSERT INTO registration(firstName,lastName,email,password) VALUES('$fname','$lname','$email','$password')");
	echo("form submitted successfully");
        }

?>