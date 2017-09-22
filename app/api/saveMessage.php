<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require '../vendor/autoload.php';



//Save the message
$app->post('/api/messageadd',function(Request $request,Response $response){
require 'dbconnect.php';

$name = $request->getParam('name');
$email = $request->getParam('email');
$phone = $request->getParam('contact');
$message = $request->getParam('message');


if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
} else {
  exit(1);
}

//echo 'services';
$sql = "INSERT INTO contact_r (name,email,phone,message) values (:name,:email,:phone,:message)";

try{
   //GET DB OBJECT
	$db = new db();
	//CONNECT
	$db = $db->connect();
    $stmt = $db->prepare($sql);

    $stmt->bindParam(':name',$name);
    $stmt->bindParam(':email',$email);
    $stmt->bindParam(':phone',$phone);
    $stmt->bindParam(':message',$message);

    $stmt->execute();

    $st = array('0');
    echo json_encode($st);
}catch(PDOException $e){
    $st = array('1');
    echo json_encode($st);
}


});
