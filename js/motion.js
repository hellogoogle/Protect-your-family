
    var scrollSpeed = 70;
    var step = 2*Math.PI/75;
    var current = 0;
	var radio= 10;
	var num=0;
    
 
    var restartPosition = 2*Math.PI/100;
 
    function scrollBg(){
        current -= step;
		num++;
        if (current >= restartPosition){
            current = 0;
        }
 
        $('#main').css("background-position",50+radio*Math.cos(current)+"px "+(100+radio*Math.cos(current))+"px");
  	  $('#container').css("background-position",num+"px");

    }
 
    var init = setInterval("scrollBg()", scrollSpeed);
