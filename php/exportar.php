<?php ?>
<section class="exportar secao">	
	<h1>Exportar receita: <span id="resultado" class="resultado"><?php echo $_POST['filter']; ?></span></h1>
	<div class="xml">
		<h2>&lt;XML&gt;</h2>
		<div class="codigo"></div>
		<a href="javascript:void(0);">
			<img src="images/copiar.png" align="Copiar o código XML">
		</a>
		<button>Salvar XML</button>
	</div>
	<div class="json">
		<h2>{JSON}</h2>
		<div class="codigo"></div>
		<a href="javascript:void(0);">
			<img src="images/copiar.png" align="Copiar o código JSON">
		</a>
		<button>Salvar JSON</button>
	</div>

</section>