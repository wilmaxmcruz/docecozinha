var _receitas = [];
var _usuarios = [];
var _usuario = null;

$(function () 
{
	var options = {
		data: ["blue", "green", "pink", "red", "yellow"],
		placeholder: "Procurar receitas"
	};
	$("#search").easyAutocomplete(options);	
	ativeSlider();

	$.ajax(
	{
		url: 'database/receitas.json', 
		dataType: 'json',
		cache: false,
		success: function(data) 
		{
			_receitas = $.makeArray(data['receitas']);	
			ativeSlider();	
		},
		complete: function (data) 
		{

		},
		error: function(r, s, e)
		{
			console.log("ERROR!!!");
			console.log(r.responseText);
		}
	});

	$.ajax(
	{
		url: 'database/usuarios.json', 
		dataType: 'json',
		cache: false,
		success: function(data) 
		{
			_usuarios = $.makeArray(data['usuarios']);
		},
		complete: function (data) 
		{

		},
		error: function(r, s, e)
		{
			console.log("ERROR!!!");
			console.log(r.responseText);
		}
	});
});

$(document).on("click", ".alt1", function()
{	
	$("h1").focus();
	console.log($("h1"));
});

$(document).on("click", ".login button", function()
{	
	$.each(_usuarios, function(i, usuario)
	{
		if(usuario["email"] == $(".login input[name='login']").val() &&
			usuario["senha"] == $(".login input[name='senha-login']").val())
		{
			_usuario = _usuarios[0];
			$(".entre > .title").html(_usuario['nome']);
			$(".entre > .title").attr("href", "javascript:void(0)");
			alert('Login realizado com sucesso!');
		}
	});
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
	/*$.each(_receitas, function(i, receita)
	{
		var li = "<li>" +
					"<a href='javascript:changePage(\"detalhes\", \"" + receita['titulo'] + "\");'>" +
						"<img src='" + receita['imagens'][0] + "' alt='" + receita['titulo'] + "' title='" + receita['titulo'] + "'>" +
						"<label>" + receita['titulo'] + "</label>" +
						"<div class='flag " + receita['categoria'] + "'></div>" +
					"</a>" +
				"</li>";
		$("ul.bxslider").append(li);
	});	*/

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