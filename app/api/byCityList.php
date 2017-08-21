<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require '../vendor/autoload.php';


$app->get('/api/bycity', function (Request $request, Response $response) {
     echo "welecome to apiiii";

    return $response;
});
