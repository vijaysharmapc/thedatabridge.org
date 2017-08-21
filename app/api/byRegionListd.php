<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require '../vendor/autoload.php';


$app->get('/api/byregiond', function (Request $request, Response $response) {
   require 'dbconnect.php';

   $sql = "SELECT geoName,movie1,movie2 FROM ingestByRegion_r order by movie1 desc";

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
