<?php

    include './connection.php';

    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin : *");
    header("Access-Control-Allow-Headers : *");
    header("Access-Control-Allow-Methods : *");


    // $objDB = new Connection;
    $conn = $objDB -> connect();

    $sql = "SELECT * FROM dossier";

    $method = $_SERVER['REQUEST_METHOD'];
    
    $stmt = $conn -> prepare($sql);
    $stmt -> execute();

    // $users = $stmt ->

    // echo json_encode();

    // switch($method){
    //     case "GET":
    //         $alluser = mysqli_query()
    // }

?>