<?php
/*���տͻ����ύ��������ţ����ظ�����������*/
header('Content-Type: application/json;charset=UTF-8');

$conn = mysqli_connect('127.0.0.1','root','','okbuy');

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT pid, pic,ptit1,ptit2,price FROM product_list";
$result = mysqli_query($conn,$sql);

//��ȡ��ѯ����һ�С�����������
$auto = mysqli_fetch_assoc($result);

//��JSON��ʽ��ͻ������
echo json_encode($auto);