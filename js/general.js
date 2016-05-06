$(function () 
{
	var options = {
		data: ["blue", "green", "pink", "red", "yellow"],
		placeholder: "Procurar receitas"
	};
	$("#search").easyAutocomplete(options);
	ativeSlider();
});

$(document).on("click", "a", function()
{
	var id = $(this).attr("id");
	
	if(id != undefined)
	{
		changePage(id);
	}
});

function ativeSlider()
{
	$('.bxslider').bxSlider({
		pager: false,
		minSlides: 4,
		maxSlides: 5,
		slideWidth: 200,
		slideMargin: 30
	});
}

function changePage(page, filter) 
{
	if(filter == undefined)
	{
		filter = "";
	}

	$.ajax(
	{				
		url: 'php/' + page + '.php', 
		type: 'POST',
		cache: false,
		data: { filter: filter },
		success: function(result) 
		{
			$("#content").html(result);
			ativeSlider();
		},
		complete: function (result) 
		{

		},
		error: function(r, s, e)
		{
			console.log("ERROR!!!");
			console.log(r.responseText);
		}
	});		
}			