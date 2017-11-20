<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require '../vendor/autoload.php';


$app->get('/api/bycity', function (Request $request, Response $response) {
   require 'dbconnect.php';

   $sql = "SELECT * FROM ingestByCity_r order by id";

   try{
    //GET DB OBJECT
   	$db = new db();
   	//CONNECT
   	$db = $db->connect();

       $stmt = $db->query($sql);
       $services = $stmt->fetchAll(PDO::FETCH_OBJ);
       $db = null;
       echo json_encode($services);

   }catch(PDOException $e){
      echo '{"error":{"text": '.$e->getMessage().'}';
   }



});
