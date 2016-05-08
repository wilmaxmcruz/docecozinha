<?php ?>
<section class="inserir secao">	
	<h1>Inserir Receita</h1>
	<form>
		<div>
			<input type="text" name="autor" placeholder="Autor da receita" required>
			<input type="text" name="titulo" placeholder="Título da receita" required>
			<a href="javascript:void(0);">
				<img src="images/formulario/mais-fotos.svg" alt="Botão com um símbolo de adição para inserir fotos da receita"></img>
			</a>
		</div>
		<div>
			<h2>Categorias</h2>
			<input type="checkbox" name="carnes"><label>Carnes</label>
			<input type="checkbox" name="doces"><label>Doces</label>
			<input type="checkbox" name="massas"><label>Massas</label>
			<input type="checkbox" name="saladas"><label>Saladas</label>
			<input type="checkbox" name="salgados"><label>Salgados</label>
			<input type="checkbox" name="sopas"><label>Sopas</label>
			
			<div>
				<input type="text" name="ingredientes" placeholder="Ingrediente" required>
				<a href="javascript:void(0);">
					<img src="images/formulario/mais-ingredientes.svg" alt="Botão com um símbolo de adição para inserir um novo ingrediente"></img>
				</a>
			</div>
			<div>
				<input type="textarea" name="modo-preparo" placeholder="Modo de preparo" required>
			</div>
			<button type="button" onclick="alert('Receita salva com sucesso!')">Salvar</button>
		</div>
	</form>
</section>