<?php ?>
<section class="inserir secao">	
	<h1>Inserir Receita</h1>
	<form>
		<div class="infos-receita left">
			<input type="text" class="autor" name="autor" value="Autor da receita" disabled>
			<input type="text" name="titulo" placeholder="Título da receita" required>
			<h2>Categorias</h2>
			<div class="categorias">			
				<input type="checkbox" name="carnes"><label>Carnes</label>
				<input type="checkbox" name="doces"><label>Doces</label>
				<input type="checkbox" name="massas"><label>Massas</label>
				<input type="checkbox" name="saladas"><label>Saladas</label>
				<input type="checkbox" name="salgados"><label>Salgados</label>
				<input type="checkbox" name="sopas"><label>Sopas</label>
			</div>
			<input type="text" class="ingrediente" name="ingrediente" placeholder="Ingrediente" required>
			<a class="add-ingrediente" href="javascript:void(0);">
				<img src="images/formulario/mais-ingredientes.svg" alt="Botão com um símbolo de adição para inserir um novo ingrediente"></img>
			</a>
			<textarea name="modo-preparo" placeholder="Modo de preparo" required></textarea>
		</div>
		<div class="fotos-receita right">
			<h2>Fotos</h2>
			<a class="foto" href="javascript:void(0);">
				<img src="images/formulario/mais-fotos.svg" alt="Botão com um símbolo de adição para inserir fotos da receita"></img>
			</a>
		</div>
		<button type="button" onclick="alert('Receita salva com sucesso!')">Inserir receita</button>
	</form>
</section>