$(function () 
{
	var options = {
		data: ["blue", "green", "pink", "red", "yellow"],
		placeholder: "Procurar receitas"
	};
	$("#search").easyAutocomplete(options);
	ativeSlider();
});

$(document).on("click", "#tamanho-letras", function()
{
	if($(this).hasClass("aumentar"))
	{
		$("#plus").attr("href", "css/fonts-plus.css");
		$(this).children("span").html("Diminuir");
		$(this).removeClass("aumentar");
	}
	else 
	{
		$("#plus").attr("href", "");
		$(this).children("span").html("Aumentar");
		$(this).addClass("aumentar");
	}
});

$(document).on("click", "#contraste", function()
{
	if($(this).hasClass("contraste"))
	{
		$("#contrast").attr("href", "css/contraste.css");
		$(this).removeClass("contraste");
	}
	else 
	{
		$("#contrast").attr("href", "");
		$(this).addClass("contraste");
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