<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)
//1-8
$date = date("M dS, Y");
echo "This page was generated: " . $date . "<hr/>";
//1-9 对应格式的日期
echo date("l, F dS , Y G:i:s");
echo "<br>";
//1-11 修改后的
if(date("L")==1){
    $remaining = 366 - date("z");
    echo "There are ". $remaining . " days left in the year";
}else{
    $remaining = 365 - date("z");
    echo "There are ". $remaining . " days left in the year";
}
?>
</body>
</html>