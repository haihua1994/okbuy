<?php
/**接收客户端提交的搜索关键字，到数据库中查询包含该关键字的产品名称，以HTML片段格式返回给客户端**/
header('Content-Type: text/html');

$kw = $_REQUEST['kw'];

$conn = mysqli_connect('127.0.0.1', 'root', '', 'okbuy');

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT pname FROM product WHERE pname LIKE '%$kw%'";
$result = mysqli_query($conn,$sql);

//从查询结果集中获取数据
$list = mysqli_fetch_all($result);
//[ ['XXXX'],['YYYY'] ]
for($i=0; $i<count($list); $i++){
	$pname = $list[$i][0];
	echo "<li>$pname</li>";
}