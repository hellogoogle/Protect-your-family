$(document).ready(function()
{
	slide("#sliding-navigation", 13, 10, 150, .8);
});

function slide(navigation_id, pad_out, pad_in, time, multiplier)
{
	// creates the target paths
	var list_elements = navigation_id + " li.sliding-element";
	var link_elements = list_elements + " a";
	
	// initiates the timer used for the sliding animation
	var timer = 0;
	
	// creates the slide animation for all list elements 
	$(list_elements).each(function(i)
	{
		// margin left = - ([width of element] + [total vertical padding of element])
		//$(this).css("margin-left","-180px");
		// updates timer
		timer = (timer*multiplier + time);
		$(this).animate({ marginTop: "0" }, timer);
		$(this).animate({ marginTop: "15px" }, timer);
		$(this).animate({ marginTop: "0" }, timer);
		
		
	});

	// creates the hover-slide effect for all link elements 		
	$(link_elements).each(function(i)
	{
		$(this).hover(
		function()
		{
			$(this).animate({ paddingTop: "13px" }, 150);
			$(this).animate({ paddingBottom: pad_out }, 150);
		},		
		function()
		{
			$(this).animate({ paddingTop: "8px" }, 150);
			$(this).animate({ paddingBottom: pad_in }, 150);
		});
	});
	
}