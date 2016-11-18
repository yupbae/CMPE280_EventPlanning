<?php

$mysqlConnection = mysql_connect("localhost","root","");
if (!$mysqlConnection)
{
  echo "Please try later.";
}
else {
  echo "successful";
  mysql_select_db("femmefatale_db",$mysqlConnection);
}

?>