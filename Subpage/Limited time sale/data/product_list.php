<?php
/*接收客户端提交的汽车编号，返回该汽车的详情*/
header('Content-Type: application/json;charset=UTF-8');

$conn = mysqli_connect('127.0.0.1','root','','okbuy');

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT pid, pic,ptit1,ptit2,price FROM product_list";
$result = mysqli_query($conn,$sql);

//读取查询到的一行——关联数组
$auto = mysqli_fetch_assoc($result);

//以JSON格式向客户端输出
echo json_encode($auto);