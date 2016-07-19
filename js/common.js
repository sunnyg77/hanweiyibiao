$(function(){
	/*iphone导航列表*/
	var $nav_icon=$(".nav_icon");
	var $nav_list=$(".nav_list");
	var $flag=true;
	
	$nav_icon.bind('touchstart',function(e){
		 e.preventDefault();
		if($flag){
			 $nav_list.stop().hide();
			} else {
			 $nav_list.stop().show();
			}
		$flag=!$flag;
	});



})


/*热门产品 start*/

			window.onload=function(){
				var odiv = document.getElementById('div1');
				var oul = odiv.getElementsByTagName('ul')[0];
				var ali = oul.getElementsByTagName('li');
				var spa = -2;				
				oul.innerHTML=oul.innerHTML+oul.innerHTML;
				oul.style.width=(ali[0].offsetWidth+20)*ali.length+'px';
				function move(){
					if(oul.offsetLeft<-oul.offsetWidth/2){
						oul.style.left='0';
					}
					if(oul.offsetLeft>0){
						oul.style.left=-oul.offsetWidth/2+'px'
					}
					oul.style.left=oul.offsetLeft+spa+'px';
				}
				var timer = setInterval(move,100)
				
				odiv.onmousemove=function(){clearInterval(timer);}
				odiv.onmouseout=function(){timer = setInterval(move,100)};
				
			}

/*热门产品 end*/