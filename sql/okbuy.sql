set names utf8;
drop database if exists okbuy;
create database okbuy charset=utf8;
use okbuy;

create table product (
  pid int primary key auto_increment,
  pname varchar(32),
  price float(10,2),  #99999999.99
  pic varchar(64),
  birthday bigint
);
insert into product values(
  null,'耐克男鞋', '3.50','img/1.jpg','12133242432343'
);
insert into product values(
  null,'耐克男鞋', '3.60','img/2.jpg','14233242432344'
);
insert into product values(
  null,'耐克拖鞋', '3.70','img/3.jpg','16333242432345'
);
insert into product values(
  null,'耐克板鞋', '3.70','img/3.jpg','16333242432345'
);
insert into product values(
  null,'耐克卫衣', '3.70','img/3.jpg','16333242432345'
);
insert into product values(
  null,'茉莉花茶', '3.70','img/3.jpg','16333242432345'
);
insert into product values(
  null,'耐克童鞋', '3.70','img/3.jpg','16333242432345'
);
insert into product values(
  null,'耐克女装', '3.70','img/3.jpg','16333242432345'
);
insert into product values(
  null,'耐克女鞋', '3.70','img/3.jpg','16333242432345'
);
insert into product values(
  null,'阿迪板鞋', '3.70','img/3.jpg','16333242432345'
);
insert into product values(
  null,'阿迪篮球鞋', '3.70','img/3.jpg','16333242432345'
);
insert into product values(
  null,'阿迪童鞋', '3.70','img/3.jpg','16333242432345'
);
insert into product values(
  null,'阿迪三叶草', '3.70','img/3.jpg','16333242432345'
);
insert into product values(
  null,'阿迪女装', '3.70','img/3.jpg','16333242432345'
);
select * from product;


CREATE TABLE ok_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(128),
  age INT,
  birthday BIGINT
);
INSERT INTO ok_user VALUES
(1, 'xiaohai', '0000','xh@163.com',23, 25541343434),
(2, 'xiaohua', '0000','xh@163.com',20, 23423462347);




CREATE TABLE product_list(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  ptit1 VARCHAR(64),
  ptit2 VARCHAR(64),
  price FLOAT(10,2)
  
);
INSERT INTO product_list VALUES
(null,'f1-temai1.jpg','玫瑰金色','移动联通电信4G手机',1199),
(null,'f1-temai2.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai3.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai4.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai5.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai6.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai7.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai8.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai9.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai10.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai11.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai12.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai13.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai14.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai15.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai16.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai17.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai18.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai19.jpg','玫瑰金色','移动联通电信4G手机',1199.00),
(null,'f1-temai20.jpg','玫瑰金色','移动联通电信4G手机',1199.00);

