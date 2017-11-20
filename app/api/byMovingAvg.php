<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require '../vendor/autoload.php';


$app->get('/api/bymvg', function (Request $request, Response $response) {
   require 'dbconnect.php';

   $sql = "SELECT week_number,movie1,movie2 FROM movie_moving_avg order by id";

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
