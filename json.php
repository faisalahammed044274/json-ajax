<?php
header("content-type","application/json");
//$json = file_get_contents('json.json');

$MyArray = array("firstName" => " Mike", "LastName" =>"Smith");
$json = json_encode($MyArray);

echo $json;
?>