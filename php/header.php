<?php ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head itemscope itemtype="http://schema.org/Recipe">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title itemprop="name">Site Doce Cozinha</title>
	<link rel="shortcut icon" href="css/images/favicon.ico">
	<link href='https://fonts.googleapis.com/css?family=Roboto:100,300,500,300italic' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Cousine' rel='stylesheet' type='text/css'>
	<link href="css/reset.css" rel="stylesheet" type="text/css" />		
	<link href="css/jquery-ui.css" rel="stylesheet" type="text/css" />
	<link href="css/jquery.bxslider.css" rel="stylesheet" type="text/css" />
	<link href="css/general.css" rel="stylesheet" type="text/css" />
	<link href="css/conteudo.css" rel="stylesheet" type="text/css" />
	<link id="plus" href="" rel="stylesheet" type="text/css" />
	<link id="contrast" href="" rel="stylesheet" type="text/css" />

	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- JavaScript Lib -->	
	<script type="text/javascript" src="js/lib/jquery-2.1.1.js"></script>
	<script type="text/javascript" src="js/lib/jquery-ui.js"></script>
	<script type="text/javascript" src="js/lib/jquery.easy-autocomplete.js"></script>
	<script type="text/javascript" src="js/lib/jquery.bxslider.js"></script>	
	<script type="text/javascript" src="js/general.js"></script>
	
	<link rel="shortcut icon" href="favicon.ico">
	<link rel='mask-icon' itemprop="url" href='docecozinha.svg' color='#ffffff'>
</head>

<body>
	<header>
		<div class="container menu-acessibilidade">
			<div class="secao">
				<nav>
					<ul>
						<li>
							<a href="#content" accesskey="1">Conteúdo principal<br>(ALT + 1)</a>
						</li>
						<li>
							<a href="#menu-site" accesskey="2">Menu do site<br>(ALT + 2)</a>
						</li>
						<li>
							<a href="javascript:changePage('acessibilidade');"  id="#acessibilidade" accesskey="3">Acessibilidade<br>(ALT + 3)</a>
						</li>
						<li id="aumentar-diminuir">
							<a id="tamanho-letras" class="aumentar" href="javascript:void(0)"><span>Aumentar</span><br>as letras</a>		
						</li>
						<li>
							<a id="contraste" class="contraste" href="javascript:void(0)">Contraste</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<div class="container cabecalho" itemscope itemtype="http://schema.org/Recipe">
			<section class="secao">
				<div class="menu left">
					<div class="title">Menu</div>
					<hr class="line">
					<ul>
						<li id="menu-site">
							<a href="javascript:changePage('lista', 'carnes');">Carnes</a>
							<span class="divisoria"></span>
						</li>
						<li>
							<a href="javascript:changePage('lista', 'doces');">Doces</a>
							<span class="divisoria"></span>
						</li>
						<li>
							<a href="javascript:changePage('lista', 'massas');">Massas</a>
							<span class="divisoria"></span>
						</li>
						<li>
							<a href="javascript:changePage('lista', 'saladas');">Saladas</a>
							<span class="divisoria"></span>
						</li>
						<li>
							<a href="javascript:changePage('lista', 'salgados');">Salgados</a>
							<span class="divisoria"></span>
						</li>
						<li>
							<a href="javascript:changePage('lista', 'sopas');">Sopas</a>
						</li>
					</ul>
				</div>
				<a href="javascript:changePage('index');">
					<img class="logo left" src="images/logo.svg" alt="Logo da Doce Cozinha">
				</a>
				<div class="entre left">
					<a class="title" href="javascript:changePage('login');">Entrar</a>
					<hr class="line">
					<a href="javascript:changePage('inserir');">Inserir uma receita</a>
				</div>
			</section>		
		</div>
	</header>
	<div class="container">
		<section class="search secao">			
			<input id="search" type="search">
			<a class="buscar" href="javascript:void(0)">
				<img src="images/lupa.svg" alt="Procurar receita">
			</a>			
		</section>
	</div>
	