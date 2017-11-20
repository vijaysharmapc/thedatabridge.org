<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$app = new \Slim\App;


$app->get('/hello/{name}', function (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");

    return $response;
});




//Customers routes
require '../app/api/byMovingAvg.php';
require '../app/api/byCityList.php';
require '../app/api/byRegionList.php';
require '../app/api/byRegionListd.php';
require '../app/api/saveMessage.php';
$app->run();

?>
