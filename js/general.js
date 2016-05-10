var _receitas = [];
var _usuarios = [];
var _usuario = null;
var _busca = null;

$(function () 
{
	$.ajax(
	{
		url: 'database/receitas.json', 
		dataType: 'json',
		cache: false,
		success: function(data) 
		{
			var tituloReceitas = [];
			_receitas = $.makeArray(data['receitas']).sort(function() 
			{
				return .5 - Math.random();
			});

			var options = 
			{
				data: _receitas,
				getValue: "titulo",
				list: {	
					match: {
						enabled: true
					},
					maxNumberOfElements: 6,
					sort: {
						enabled: true
					}
				},
				highlightPhrase: false,				
				theme: "square",
				placeholder: "Procurar receitas"
			};
			$("#search").easyAutocomplete(options);	
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

$(document).on("click", ".login input[type='submit']", function()
{	
	$.each(_usuarios, function(i, usuario)
	{
		if(usuario["email"] == $(".login input[name='login']").val() &&
			usuario["senha"] == $(".login input[name='senha-login']").val())
		{
			_usuario = _usuarios[i];
			$(".entre > .title").html(_usuario['nome']);
			$(".entre > .title").attr("href", "javascript:void(0)");			
			alert("Login do usuário: " +  _usuario['nome'] + " realizado com sucesso!");
		}
	});
});

$(document).on("click", ".search a.buscar", function()
{
	changePage("detalhes", $("#search").val());
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

$(document).on("mouseenter", "a.estrela", function()
{
	for (var i = 0; i < $(this).index(); i++) 
	{		
		var $item = $($("a.estrela")[i]);
		$item.attr("style", "background-position: 0 -36px");
	}
});

$(document).on("mouseleave", "a.estrela", function()
{
	$("a.estrela").attr("style", "background-position: 0 0");
});

$(document).on("click", ".exportar a.copiar", function()
{
	var code = $(this).siblings("pre.codigo").attr("name");
	var toCopy = document.getElementById("copiar-" + code);
	
	if (document.createRange) 
	{
		document.getSelection().removeAllRanges();
		var r = document.createRange();
		r.setStartBefore(toCopy);
		r.setEndAfter(toCopy);
		r.selectNode(toCopy);
		var sel = window.getSelection();
		sel.addRange(r);
		document.execCommand('Copy');
    }
});

$(document).on("click", ".ingredientes a.add-ingrediente", function()
{
	$(".ingredientes").append($("input.ingrediente").first().clone().val(""));
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
			userLogged();

			switch(page) {
				case "index":
					ativeSlider();
					break;
				case "lista":
					loadList(filter);
					break;
				case "detalhes":
					loadReceita(filter);
					break;
				case "exportar":
					exportReceita(filter);
					break;
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
		$(".comentarios > textarea").attr("placeholder", "Envie um comentário para essa receita");
		$(".comentarios > textarea").prop("disabled", false);
		$(".comentarios > button").prop("disabled", false);
	}
}

function loadList(filter)
{
	$(".lista > h1 > span").html(filter);
	$.each(_receitas, function(i, receita)
	{
		if(receita['categoria'].toLowerCase() == filter.toLowerCase())
		{
			var li = "<li itemscope itemtype='http://schema.org/Recipe'>" +
						"<a href='javascript:changePage(\"detalhes\", \"" + receita['titulo'] + "\");'>" +
							"<div class='foto' style='background-image:url(\"" + receita['imagens'][0] + "\")'>" +
							"</div>" +
							"<div class='infos'>" +
								"<div>Categoria: </span><span itemprop='name' class='categoria " + receita['categoria'] + "'>" + receita['categoria'] + "</div>" +
								"<div>Publicado por: </span><span itemprop='author' class='publicado'>" + receita['autor'] + "</div>" +
								"<hr class='divisoria " + receita['categoria'] + "'>" +
								"<span class='nome' itemprop='alternateName'>" + receita['titulo'] + "</span>" +
								"<div class='avaliacao'>";
								
			for (var i = 1; i <= 5; i++) 
			{
				var ativa = "ativa";
				if(i > parseInt(receita['avaliacao']))
				{
					ativa = "";
				}
				li += "<div class='estrela " + ativa + "'></div>";
			}
			li += "</div></div></a></li>";
			$(".lista > ul").append(li);
		}
	});
}

function loadReceita(filter)
{
	var receita = null;

	$.each(_receitas, function(i, r)
	{
		if(r['titulo'].toLowerCase() == filter.toLowerCase())
		{
			receita = r;
			return false;
		}
	});

	if(receita != null)
	{
		$(".receita > .detalhes > h1").html(receita['titulo']);
		$(".receita > .detalhes > .autoria > .categoria").html(receita['categoria']);
		$(".receita > .detalhes > .autoria > .publicado").html(receita['autor']);

		var li = "";
		for (var i = 1; i <= 5; i++) 
		{
			var ativa = "ativa";
			if(i > parseInt(receita['avaliacao']))
			{
				ativa = "";
			}
			li += "<div class='estrela " + ativa + "'></div>";
		}

		$(".receita > .detalhes > .avaliacao").append(li);
		$(".receita > .detalhes > .galeria > .flag").addClass(receita['categoria']);
		$(".receita > .detalhes > .galeria > img.principal").attr("src", receita['imagens'][0]);
		$(".receita > .detalhes > .galeria > img.principal").attr("alt", "Imagem de " + receita['titulo']);
		$(".receita > .detalhes > .galeria > img.mini.um").attr("src", receita['imagens'][1]);
		$(".receita > .detalhes > .galeria > img.mini.um").attr("alt", "Imagem de " + receita['titulo']);
		$(".receita > .detalhes > .galeria > img.mini.dois").attr("src", receita['imagens'][2]);
		$(".receita > .detalhes > .galeria > img.mini.dois").attr("alt", "Imagem de " + receita['titulo']);
		$(".receita > .detalhes > .galeria > img.mini.tres").attr("src", receita['imagens'][3]);
		$(".receita > .detalhes > .galeria > img.mini.tres").attr("alt", "Imagem de " + receita['titulo']);

		var tempoContent = "PT" + receita['tempo'].split(" ")[0] + receita['tempo'].split(" ")[1].substr(0, 1).toUpperCase();
		$(".receita > .detalhes > .infos > .tempo").html(receita['tempo']);
		$(".receita > .detalhes > .infos > .tempo").attr("content", tempoContent);
		$(".receita > .detalhes > .infos > .rendimento").html(receita['rendimento']);

		$.each(receita['ingredientes'], function(i, ingred)
		{
			var li = "<li>" + ingred + "</li>";
			$(".receita > .detalhes > .ingredientes > ul").append(li);
		});

		$(".receita > .detalhes > .preparo > p").html(receita['preparo']);

		$(".receita > .comentarios > .exportar").attr("href", "javascript:changePage('exportar', \"" + receita['titulo'] + "\");")
		
		$.each(receita['comentarios'], function(i, comment)
		{
			var li = "<li class='comentario' itemscope itemtype='http://schema.org/Comment'>" +
						"<div class='texto'>" +
							"<span itemprop='author' class='usuario'>" + comment['usuario'] + "</span> em <span class='data' itemprop='datePublished'>" + comment['data'] + "</span>" +
							"<p  itemprop='comment'>" + comment['comentario'] + "</p>" +
						"</div>" +
						"<span class='pointer'></span>" +
						"<span itemprop='image' class='foto' style='background-image:url(\"images/usuarios/default.svg\")'></span>" +
					"</li>";
			$(".receita > .comentarios > ul").append(li);
		});	
	}
	else
	{
		var html = "<h1>Desculpe, mas não foi encontrado nenhuma receita<br>" + 
					"relativa ao termo: <strong>" + filter + "</strong></h1>" + 
					"<h2>Por favor, faça a busca novamente.</h2>";
		$(".receita").html(html);
	}
}

function exportReceita(filter)
{
	var receita = null;

	$.each(_receitas, function(i, r)
	{
		if(r['titulo'].toLowerCase() == filter.toLowerCase())
		{
			receita = r;
			return false;
		}
	});

	$(".exportar > h1 > .resultado").html(receita['titulo']);
	
	var json = "{<br>" +
					"	\"autor\" : \"" + receita['autor'] + "\",<br>" +
					"	\"titulo\" : \"" + receita['titulo'] + "\",<br>" +
					"	\"tempo\" : \"" + receita['tempo'] + "\",<br>" +
					"	\"rendimento\" : \"" + receita['rendimento'] + "\",<br>" +
					"	\"ingredientes\" : <br>" +
					"	[<br>";

	$.each(receita['ingredientes'], function(i, ingred)
	{		
		var virgula = ",";
		if(i == receita['ingredientes'].length - 1)
		{
			virgula = "";
		}

		json += "		\"" + ingred + "\"" + virgula + "<br>";
	});

	json +=	"	],<br>" +
				"	\"preparo\" : \"" + receita['preparo'] + "\",<br>" +
				"	\"imagens\" : <br>" +
				"	[<br>";

	$.each(receita['imagens'], function(i, imagem)
	{		
		var virgula = ",";
		if(i == receita['imagens'].length - 1)
		{
			virgula = "";
		}
		
		json += "		\"http://www.docecozinha.com.br/" + imagem + "\"" + virgula + "<br>";
	});

	json += "	],<br>" +
				"	\"avaliacao\" : " + receita['avaliacao'] + ",<br>" +
				"	\"categoria\" : \"" + receita['categoria'] + "\",<br>" +
				"	\"data\" : \"" + receita['data'] + "\"<br>" +
			"}";
	$(".exportar > .json > .codigo").html(json);

	var xml = "&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;<br>" +
				"&lt;recipe&gt;<br>" +
				"	&lt;autor&gt;" + receita['autor'] + "&lt;/autor&gt;<br>" +
				"	&lt;titulo&gt;" + receita['titulo'] + "&lt;/titulo&gt;<br>" +
				"	&lt;tempoPrep&gt;" + receita['tempo'] + "&lt;/tempoPrep&gt;<br>" +
				"	&lt;porcoes&gt;" + receita['rendimento'] + "&lt;/porcoes&gt;<br>" +
				"	&lt;ingredientes&gt;<br>";
	
	$.each(receita['ingredientes'], function(i, ingred)
	{
		xml += "		&lt;item&gt;" + ingred + "&lt;/item&gt;<br>";
	});
		
	xml +=		"	&lt;/ingredientes&gt;<br>" +
				"	&lt;preparo&gt;" + receita['preparo'] + "&lt;/preparo&gt;<br>" +
				"	&lt;imagens&gt;<br>";

	$.each(receita['imagens'], function(i, imagem)
	{
		xml += "		&lt;img&gt;http://www.docecozinha.com.br/" + imagem + "&lt;/img&gt;<br>";
	});

	xml +=		"	&lt;/imagens&gt;<br>" +
				"	&lt;detalhes&gt;<br>" +
				"		&lt;avaliacao&gt;" + receita['avaliacao'] + "&lt;/avaliacao&gt;<br>" +
				"		&lt;categoria&gt;" + receita['categoria'] + "&lt;/categoria&gt;<br>" +
				"		&lt;data&gt;" + receita['data'] + "&lt;/data&gt;<br>" +
				"	&lt;/detalhes&gt;<br>" +
				"&lt;/recipe&gt;";
	$(".exportar > .xml > .codigo").html(xml);
}