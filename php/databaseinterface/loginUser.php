<?php

session_start();

include_once 'databaseconnect.php';
if (array_key_exists('user_name', $_POST) && array_key_exists('user_password', $_POST)) {
    $user_name = $_POST['user_name'];
    $user_password = $_POST['user_password'];
    $sql = "SELECT login_password FROM user_login_info WHERE login_username = '$user_name';";
    $result = mysqli_query($conn, $sql);

    $row = mysqli_fetch_assoc($result);
    $databasePassword = $row['login_password'];
    if ($user_password == $databasePassword) {
        $sql = "SELECT user_id, login_username FROM user_login_info WHERE login_username = '$user_name';";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        $_SESSION['userid'] = $row['user_id'];
        $_SESSION['username'] = $row['login_username'];
        echo json_encode(array("success" => "user logged in", "session" => $_SESSION));
    } 
    else {
        echo json_encode(array("error" => "Invalid login provided."));
    }
} 
else {
    echo "Something Went Wrong With the Input";
}
