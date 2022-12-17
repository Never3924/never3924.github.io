<?php
  header('Content-Type: application/json; charset=UTF-8');
  $arr["ver"]='0.0.1';
  print json_encode($arr, JSON_PRETTY_PRINT);
?>
