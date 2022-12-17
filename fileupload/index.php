<html>
<head>
<meta charset='utf-8'>
</head>
<body>
<h1>ファイル置き場</h1>
<?php
  $file = glob("./upload/*");
  $path = "./upload/";
  foreach($file as $dat){
    echo "<form action='./filedownload.php' method='post'><button type='submit' class='button' name='post' value='".$dat."'>".basename($dat)."</button></form><style>.button{border:none;border-radius:20px;cursor:pointer;color:orange;}.button:hover{color:darkorange;}</style>";
  }
?>
<p>合計<?php
$file = glob("./upload/*");
$countfile = 0;
if ($file != false ){
    $countfile = count($file);
}
echo $countfile;
?>件</p>
