///*功能1:广告轮播*/
//var imgs=[
//	{"i":0,"img":"images/index.img/lun1.jpg"},
//    {"i":1,"img":"images/index.img/lun2.jpg"},
//    {"i":2,"img":"images/index.img/lun3.jpg"},
//    {"i":3,"img":"images/index.img/lun4.jpg"},
//    {"i":4,"img":"images/index.img/lun5.jpg"},
//];
//var slider= {
//	LIWIDTH:0,
//	DURATION:0,
//	WAIT:3000,
//	timer:null,
//	canAuto:true,
//	init:function(){
//		this.LIWIDTH=parseFloat(
//            $("#slider").css("width")
//        );
//		this.updateView();
//		$("#indexs").on("mouseover","li:not(.hover)",
//			function(e){
//			var $target=$(e.target);
//			this.move($target.index()
//				-$target.siblings(".hover").index());
//		}.bind(this));
//		$("#slider").hover(
//			function(){this.canAuto=false;}.bind(this),
//			function(){this.canAuto=true;}.bind(this)
//		)
//		this.autoMove();
//	},
//	autoMove:function(){
//		this.timer=
//		setTimeout(function(){
//			if(this.canAuto){
//				this.move(1)
//			}else{
//					this.autoMove();
//				}
//		}.bind(this), this.WAIT);
//	},
//	move:function(n){
//		clearTimeout(this.timer);
//		this.time=null;
//		$("#imgs").stop(true);
//
//		if(n<0){
//			n*=-1;
//			imgs=imgs.splice(imgs.length-n,n).concat(imgs);
//			this.updateView();
//          var left=parseFloat($("#imgs").css("left"));
//			$("#imgs").css("left",left-n*this.LIWIDTH);
//			$("#imgs").animate(
//                {left:"0"},
//                this.DURATION,
//                this.autoMove.bind(this));
//		}
//		else{
//          $("#imgs").animate(
//		{left:-n*this.LIWIDTH+"px"},
//              this.DURATION,
//              this.endMove.bind(this,n)
//          );
//		}
//	},
//	endMove:function(n){
//		imgs=imgs.concat(imgs.splice(0,n));
//		this.updateView();
//		$("#imgs").css("left","0");
//		this.autoMove();
//	},
//	updateView:function(){
//		for(var i=0,html="",idxs="";i<imgs.length;i++){
//			html+="<li><img src='"+imgs[i].img+"'></li>";
//			idxs+="<li></li>";
//		}
//		//设置id为img的内容为html,在设置起宽度为liwidth*imgs的元素个数
//		$("#imgs").html(html)
//            .css("width",this.LIWIDTH*imgs.length);
//		$("#indexs").html(idxs);
//		$("#indexs>li:eq("+imgs[0].i+")").addClass("hover")
//			.siblings(".hover").removeClass("hover");
//	},
//}
//slider.init();
/*功能2:搜索框提示功能*/
//当用户输入敲击键盘弹起时，获得当前输入框中的内容
    kw.onkeyup = function(){
      var k = this.value;
      if(!k){ //用户没有任何输入
        suggest.style.display = 'none';
        return; 
      }
      /**发起异步请求，获取包含当前关键字的产品名称**/
      //1获取ajax对象
      var xhr = new XMLHttpRequest();
      //3绑定一个事件处理函数
      xhr.onreadystatechange = function(){
		  //ajax与服务器的通讯状态，当值为4是，
		  //表示已经获得服务器返回的所有数据
        if(xhr.readyState===4){
          if(xhr.status===200){
            doResponse(xhr);
          }else {
            alert('响应完成但有问题');
          }
        }
      }
      //3创建get请求
      xhr.open('GET','2_search.php?kw='+k, true);
      //4发送请求
      xhr.send(null);
      function doResponse(xhr){
        console.log('开始处理响应数据');
        //console.log(xhr);
        suggest.style.display = 'block';
        var ul = document.querySelector('#suggest ul');
        ul.innerHTML = xhr.responseText;
      }
    }
	/* 功能 3：弹出广告*/
	var adv={
  DISTANCE:0,//总距离
  DURATION:2000,//总时间
  STEPS:200,//总步数
  step:0,//步长
  interval:0,//每步时间间隔
  timer:null,//保存定时器序号
  moved:0,//保存已经移动的步数
  div:null,//保存广告div
  WAIT:3000,//保存等待时间
  init:function(){
    //查找id为msg的div保存在div属性中
    this.div=document.getElementById("msg");
    //获得DISTANCE: 获得div计算后的样式中的bottom属性值,转为浮点数,*-1
    this.DISTANCE=-parseFloat(
      getComputedStyle(this.div).bottom
    );
    //计算interval: DURATION/STEPS
    this.interval=this.DURATION/this.STEPS;
    //计算step:DISTANCE/STEPS
    this.step=this.DISTANCE/this.STEPS;
    this.moveUp();//启动上移
  },
  moveUp:function(){//启动上移
    //启动周期性定时器，设置任务为moveUpStep,将序号保存在timer
    this.timer=setInterval(
      this.moveStep.bind(this,1),this.interval);
  },
  moveStep:function(dir){//向上移动一步
    //获得div计算后的样式的bottom值，转为浮点数，保存在变量bottom中
    var bottom=parseFloat(
      getComputedStyle(this.div).bottom);
    //设置div的bottom值为bottom+step
    this.div.style.bottom=
      bottom+dir*this.step+"px";
    this.moved++;//moved+1
    //如果moved等于STEPS
    if(this.moved==this.STEPS){
      //停止定时器,timer置为null,moved归零
      clearInterval(this.timer);
      this.timer=null;
      this.moved=0;
      //如果是下移结束
     /* if(dir==-1){
        //启动一次性定时器，传入moveUp方法作为任务，等待时间设置为WAIT
			setTimeout(
			  this.moveUp.bind(this),this.WAIT);
      }*/
    }
  },
  moveDown:function(){
    if(this.timer==null)//如果timer是null
      //启动周期性定时器，传入moveStep作为任务，将序号保存在timer中
      this.timer=setInterval(
        this.moveStep.bind(this,-1),this.interval
      );
  }
}
adv.init();




 /****功能4:回到顶部*****/

    document.addEventListener("scroll",
      function(){
        //查找id为toTop的div
        var div=document.getElementById("toTop");
        //设置div的display为:
          //滚动过的距离>=500?block:none
        div.style.display=
          document.body.scrollTop>=500?
                              "block":"none";
        
      }
    );

	/********回到顶部添加过渡效果******/
	$("#toTop>a").click(function(){
		$('body,html').animate({scrollTop:0},2000);
  });




  /**********功能5：实现商品倒计时效果********/

//Step1: 定义任务函数，计算now到end的时间差
function task(){
  //定义目标时间end: 2016/9/13 12:00
  var end=new Date("2016/11/30 12:00");
  var now=new Date();//获得当前时间now
  //获得时间差(s): end-now /1000
  var s=Math.round((end-now)/1000);
  if(s>0){//如果s>0
	  var day=Math.floor(s/(3600*24));//求天数
    var h=Math.floor(s/3600)-day*24;//求小时(h): 
   // h<10&&(h="0"+h);//如果h<10,就改为0+h
    var m=Math.floor(s%3600/60);//求分钟(m):
    m<10&&(m="0"+m);//如果m<10,就改为0+m
    s%=60;//求秒(s):
    s<10&&(s="0"+s);//如果s<10,就改为0+s
      var html=day+"<b>天</b>" + h+"<b>时</b>" + m+"<b>分</b>" + s+"<b>秒</b>";
	$('#time').html(html);
     $('#time1').html(html);
	  $('#time2').html(html);
	  $('#time3').html(html);
	  $('#time4').html(html);
	  $('#time5').html(html);
	  $('#time6').html(html);
	  $('#time7').html(html);
	  $('#time8').html(html);
	  $('#time9').html(html);
	  $('#time10').html(html);
	  $('#time11').html(html);
	  $('#time12').html(html);
	  $('#time13').html(html);
	  $('#time14').html(html);
	  $('#time15').html(html);
	  $('#time16').html(html);
	  $('#time17').html(html);
	  $('#time18').html(html);
	  $('#time19').html(html);
	  $('#time20').html(html);
	  $('#time21').html(html);
	  $('#time22').html(html);
	  $('#time23').html(html);
	  $('#time24').html(html);
	  $('#time25').html(html);
	   //$('#time3').html(html);
	   //document.getElementById("time3").innerHTML=html;
  }else{
    //停止定时器
    clearInterval(timer);
    timer=null;
    document.getElementsByClassName("time")
            .innerHTML="活动结束！";
  }
}
task();
var timer=setInterval(task,1000);
/*************/
/**功能点2：点击登录按钮，异步验证登录信息**/
$('#bt-login').click(function(){
  //读取用户的输入——表单序列化
  var inputData = $('#login-form').serialize();
  //异步提交请求，进行验证
  $.ajax({
    type: 'POST',
    url: 'data/1_login.php',
    data: inputData,
		
    success: function(txt, msg, xhr){
      if(txt=='ok'){  //登录成功
			
        $('.modal').fadeOut(300);
        var loginName = $('[name="uname"]').val();
        sessionStorage['loginName']= loginName;
        $('#welcome').html('欢迎回来：'+loginName); //修改页头上的欢迎消息
      }else { //登录失败
        $('.modal .alert').html('登录失败！错误消息为：'+txt);
      }
    }
  });
});