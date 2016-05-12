<?php ?>
<section class="inserir secao" itemscope itemtype="http://schema.org/Recipe">
 	<h1 itemprop="name">Inserir Receita</h1>
	<form id="form-inserir" onsubmit="return checkInserir();">
		<div class="infos-receita left">
			<input type="text" class="autor" name="autor" value="" disabled>
			<input type="text" name="titulo" placeholder="Título da receita" required>
			<h2 itemprop="name">Categorias</h2>
			<div class="categorias">			
				<input type="checkbox" name="carnes" role="checkbox"><label itemprop="name">Carnes</label>
				<input type="checkbox" name="doces" role="checkbox"><label itemprop="name">Doces</label>
				<input type="checkbox" name="massas" role="checkbox"><label itemprop="name">Massas</label>
				<input type="checkbox" name="saladas" role="checkbox"><label itemprop="name">Saladas</label>
				<input type="checkbox" name="salgados" role="checkbox"><label itemprop="name">Salgados</label>
				<input type="checkbox" name="sopas" role="checkbox"><label itemprop="name">Sopas</label>
			</div>
			<div class="ingredientes">
				<input type="text" class="ingrediente" name="ingrediente" placeholder="Ingrediente" required>
				<a class="add-ingrediente" href="javascript:void(0);">
					<img src="images/formulario/mais-ingredientes.svg" alt="Botão com um símbolo de adição para inserir um novo ingrediente"></img>
				</a>
			</div>
			<textarea name="modo-preparo" placeholder="Modo de preparo" required></textarea>
		</div>
		<div class="fotos-receita right">
			<h2 itemprop="name">Fotos</h2>
			<div id="files" class="files"></div>
			<span class="btn btn-success fileinput-button left">
				<input id="fileupload" type="file" name="files[]" data-url="server/php/" multiple>
			</span>
		</div>
		<input type="submit" value="Inserir receita" formmethod="post">
	</form>
</section>
<script src="js/upload/jquery.ui.widget.js"></script>
<script src="js/upload/load-image.all.min.js"></script>
<script src="js/upload/jquery.iframe-transport.js"></script>
<script src="js/upload/jquery.fileupload.js"></script>
<script src="js/upload/jquery.fileupload-process.js"></script>
<script src="js/upload/jquery.fileupload-image.js"></script>
<script>
$(function () 
{
	$('#fileupload').fileupload(
	{
		dataType: 'json',
		autoUpload: false,
		maxFileSize: 999000,
		previewMaxWidth: 86,
		previewMaxHeight: 86,
		previewCrop: true
	}).on('fileuploadadd', function (e, data) 
	{
		data.context = $('<div/>').appendTo('#files');
		$.each(data.files, function (index, file) 
		{
			var node = $('<span/>');
			node.appendTo(data.context);
		});
	}).on('fileuploadprocessalways', function (e, data) 
	{
		var index = data.index,
			file = data.files[index],
			node = $(data.context.children()[index]);

		if (file.preview) 
		{
			node.prepend(file.preview);
		}
	});
});
</script>