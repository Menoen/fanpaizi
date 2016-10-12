var data=['坂本直弥','陳楚河','夏目贵志','无人侍寝','山下智久','錦戸亮','二宮和也','工藤新一'],
    timer=null,
    flag=0;

window.onload=function(){
	var play=document.getElementById('play');
	var stop=document.getElementById('stop');
	play.onclick=playFunc;
	stop.onclick=stopFunc;
}

function playFunc(){
	var title=document.getElementById('title');
	var pic=document.getElementById('pic')
	var paly=document.getElementById('play');
	clearInterval(timer);
	timer=setInterval(function(){
		var random=Math.floor(Math.random()*data.length);
		title.innerHTML=data[random];
		console.log(random);
	  switch(random){
	  	case 0:
	  		pic.style.backgroundImage = "url(img/0.png)";
	  		break;
	  	case 1:
	  		pic.style.backgroundImage = "url(img/1.png)";
	  		break;
	  	case 2:
	  		pic.style.backgroundImage = "url(img/2.jpg)";
	  		break;
	  	case 3:
	  		pic.style.backgroundImage = "url(img/3.jpg)";
	  		break;
	  	case 4:
	  		pic.style.backgroundImage = "url(img/4.jpg)";
	  		break;
	  	case 5:
	  		pic.style.backgroundImage = "url(img/5.png)";
	  		break;
	  	case 6:
	  		pic.style.backgroundImage = "url(img/6.png)";
	  		break;
	  	case 7:
	  		pic.style.backgroundImage = "url(img/7.png)";
	  		break;
	  	
	  	default:
	  		// alert("haha");
	  		break;
	  }
	},50);
	play.style.background='#631f04'
}
function stopFunc(){
	clearInterval(timer);
	var play=document.getElementById('play');
	play.style.background='#e6b764';
}