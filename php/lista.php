<?php ?>
<section class="lista secao">	
	<h1>Lista de receitas relacionadas com: <span id="resultado" class="resultado"><?php echo $_POST['filter']; ?></span></h1>
	<ul>
		<li>
			<a id="" href="javascript:changePage('detalhes');">										
				<div class="foto">
					<img src="images/receitas/canape-de-batata.jpg" alt="Canapé de batata" title="Canapé de batata">
				</div>
				<div class="infos">
					<span>Categoria: </span><span class="categoria">Carnes</span>
					<span>Publicado por: </span><span class="publicado">Doce Cozinha</span>
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
	<div class="mais-receitas">
		<hr class="divisoria">
		<button>Ver mais receitas</button>
		<hr class="divisoria">
	</div>
</section>