<?php ?>
<section id="conteudo-principal" class="inserir secao" itemscope itemtype="http://schema.org/Recipe">
 	<h1 itemprop="name">Inserir Receita</h1>
	
		<div class="infos-receita left">
			<input type="text" class="autor" name="autor" value="Autor da receita" disabled>
			<input type="text" name="titulo" placeholder="Título da receita" required>
			<h2 itemprop="name">Categorias</h2>
			<div class="categorias">			
				<input type="checkbox" name="carnes"><label itemprop="name">Carnes</label>
				<input type="checkbox" name="doces"><label itemprop="name">Doces</label>
				<input type="checkbox" name="massas"><label itemprop="name">Massas</label>
				<input type="checkbox" name="saladas"><label itemprop="name">Saladas</label>
				<input type="checkbox" name="salgados"><label itemprop="name">Salgados</label>
				<input type="checkbox" name="sopas"><label itemprop="name">Sopas</label>
			</div>
			<input type="text" class="ingrediente" name="ingrediente" placeholder="Ingrediente" required>
			<a class="add-ingrediente" href="javascript:void(0);">
				<img src="images/formulario/mais-ingredientes.svg" alt="Botão com um símbolo de adição para inserir um novo ingrediente"></img>
			</a>
			<textarea name="modo-preparo" placeholder="Modo de preparo" required></textarea>
		</div>
		<div class="fotos-receita right">
			<h2 itemprop="name">Fotos</h2>
			<a class="foto" href="javascript:void(0);">
				<img itemprop="image" src="images/formulario/mais-fotos.svg" alt="Botão com um símbolo de adição para inserir fotos da receita"></img>
			</a>
		</div>
		<button type="button" onclick="alert('Receita salva com sucesso!')">Inserir receita</button>
	</form>
</section>