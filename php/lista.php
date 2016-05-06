<?php ?>
<section class="lista secao">	
	<h1>Lista de receitas relacionadas com: <span class="resultado"><?php echo $_POST['filter']; ?></span></h1>
	<ul>
		<li>
			<a href="javascript:changePage('detalhes');">	
				<div class="foto" style="background-image:url('images/receitas/canape-de-batata.jpg')">
				</div>
				<div class="infos">
					<div>Categoria: </span><span class="categoria">Carnes</div>
					<div>Publicado por: </span><span class="publicado">Doce Cozinha</div>
					<hr class="divisoria">
					<span class="nome">Canapé de batata</span>
					<div class="avaliacao">
						<div class="estrela ativa"></div>
						<div class="estrela ativa"></div>
						<div class="estrela ativa"></div>
						<div class="estrela ativa"></div>
						<div class="estrela"></div>
					</div>
				</div>
			</a>
		</li>		
	</ul>
	<div class="mais-receitas clear">
		<hr class="divisoria">
		<button>Ver mais receitas</button>
		<hr class="divisoria">
	</div>
</section>