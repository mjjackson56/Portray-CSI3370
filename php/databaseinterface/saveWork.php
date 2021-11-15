<?php
session_start();

include_once 'databaseconnect.php';
$image = explode(";base64,", $_POST['image']);
$image_type_aux = explode("image/", $image[0]);
$image_type = $image_type_aux[1];
$image_base64 = base64_decode($image[1]);
$filename = $_POST['filename'] . '.png';
$shapesStack = $_POST['shapesStack'];
$markStack = $_POST['markStack'];
$textStack = $_POST['textStack'];
$target_dir = "/home/portray-admin/school/csi-3370/CSI-3370-Project/saved_work/" . $_SESSION['username'] . "/$filename";
$file_extension = pathinfo($target_dir, PATHINFO_EXTENSION);
$file_extension = strtolower($file_extension);
$response = 0;
if (file_put_contents($target_dir, $image_base64)) {
  $response = 1;
}
$user_id = $_SESSION['userid'];
$sql = "INSERT INTO saved_work_paths (user_id, path_string, path_file_name, shapes_stack, marker_stack, text_stack) VALUES ('$user_id', '$target_dir', '$filename', '$shapesStack', '$markStack', '$textStack');";
mysqli_query($conn, $sql);
echo $response;
exit;