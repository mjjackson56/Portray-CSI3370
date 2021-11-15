<?php
session_start();

include_once 'databaseconnect.php';
$username = $_POST['username'];
$password = $_POST['password'];
$pathname = "/home/portray-admin/school/csi-3370/CSI-3370-Project/saved_work/" . $username;
mkdir($pathname);

$sql = "INSERT INTO user_login_info (login_username, login_password) VALUES ('$username', '$password');";
mysqli_query($conn, $sql);
$sql = "SELECT user_id, login_username FROM user_login_info WHERE login_username = '$username';";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$_SESSION['userid'] = $row['user_id'];
$_SESSION['username'] = $row['login_username'];
//echo $response;
exit;
