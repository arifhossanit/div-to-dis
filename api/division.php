<?php
include('database.php');
$div=[];
$sql="SELECT * FROM division";
if ($result=$mysqli->query($sql)) {
    $sl=0;
    while ($row=$result->fetch_assoc()) {
        $div[$sl]['id'] = $row['id'];
        $div[$sl]['name'] = $row['div_name'];
        $sl++;
    }
    echo json_encode($div);
}
else
{
  http_response_code(404);
}
?>