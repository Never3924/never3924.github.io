<?php
  if(isset($_POST)){
    echo "<h1>".basename($_POST["post"])."<br>をダウンロードします。</h1>";
    echo "<a download href='".$_POST["post"]."'>はい</a><br>";
  }
  echo "<a href='./index.php'>いいえ(トップに戻ります)</a>"
?>