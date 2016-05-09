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
			alert("Login do usuário: " +  _usuario['nome'] + " realizado com sucesso!");
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
	$.each(_receitas, function(i, receita)
	{
		var li = "<li>" +
					"<a  href='javascript:changePage(\"detalhes\", \"" + receita['titulo'] + "\");'>" +
						"<img itemprop='image' src='" + receita['imagens'][0] + "' alt='" + receita['titulo'] + "' title='" + receita['titulo'] + "'>" +
						"<label itemprop='name'>" + receita['titulo'] + "</label>" +
						"<div class='flag " + receita['categoria'] + "'></div>" +
					"</a>" +
				"</li>";
		$("ul.bxslider").append(li);
	});

	$('.bxslider').bxSlider({
		pager: false,
		minSlides: 4,
		maxSlides: 5,
		slideWidth: 200,
		slideMargin: 30
	});
}

function userLogged()
{
	if(_usuario != null)
	{
		$(".recomendacao h2").html("Receitas recomendadas para você");
	}
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
			userLogged();
			if(page == "lista")
			{
				loadList(filter);
			}
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


function userLogged()
{
	if(_usuario != null)
	{
		$(".recomendacao h2").html("Receitas recomendadas para você");
	}
}

function loadList(filter)
{
	$(".lista > h1 > span").html(filter);
	$.each(_receitas, function(i, receita)
	{
		if(receita['categoria'].toLowerCase() == filter.toLowerCase())
		{
			var li = "<li>" +
						"<a href='javascript:changePage(\"detalhes\");'>" +
							"<div class='foto' style='background-image:url(\"" + receita['imagens'][0] + "\")'>" +
							"</div>" +
							"<div class='infos'>" +
								"<div>Categoria: </span><span itemprop='name' class='categoria " + receita['categoria'] + "'>" + receita['categoria'] + "</div>" +
								"<div>Publicado por: </span><span itemprop='author' class='publicado'>" + receita['autor'] + "</div>" +
								"<hr class='divisoria " + receita['categoria'] + "'>" +
								"<span class='nome' itemprop='alternateName'>" + receita['titulo'] + "</span>" +
								"<div class='avaliacao'>";
								
			for (var i = 1; i <= parseInt(receita['avaliacao']); i++) 
			{
				li += "<div class='estrela'></div>";
			}
			li += "</div></div></a></li>";
			$(".lista > ul").append(li);
		}
	});
}

