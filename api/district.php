<?php
include('database.php');
$div=$_GET['id'];
if (isset($div) && !empty($div)) {
    $dis=[];
    $sql="SELECT * FROM district WHERE div_id='$div'";
    $result= $mysqli->query($sql);
    $sl=0;
    while ($row=$result->fetch_assoc()) {
        $dis[$sl]['id'] = $row['id'];
        $dis[$sl]['name'] = $row['dist_name'];
        $sl++;
    }
    echo json_encode($dis);
}
else
{
  http_response_code(404);
}
?>