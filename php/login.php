<?php ?>
<section class="acesso secao" itemscope itemtype="http://schema.org/Person">		
	<div class="login left">
		<h1 itemprop="name">Já sou cadastrado</h1>
		<form>
			<input type="text" name="login" placeholder="Login" required>
			<input type="password" name="senha-login" placeholder="Senha" maxlength="8" required>
			<button type="button">Entrar</button>
		</form>
	</div> 	
	<div class="cadastro right">
		<h1 itemprop="name">Quero me cadastrar</h1>
		<form>
			<input type="text" name="nome" placeholder="Nome completo" required>
			<input type="date" name="data-nascimento" placeholder="Data de nascimento" max="2012-01-01" required>
			<input type="text" name="cidade" placeholder="Cidade" maxlength="50">
			<select>
				<option value="acre">Acre</option>
				<option value="alagoas">Alagoas</option>
				<option value="amapa">Amapá</option>
				<option value="amazonas">Amazonas</option>
				<option value="bahia">Bahia</option>
				<option value="ceara">Ceará</option>
				<option value="distritofederal">Distrito Federal</option>
				<option value="espiritosanto">Espírito Santo</option>
				<option value="goias">Goiás</option>
				<option value="maranhao">Maranhão</option>
				<option value="matogrosso">Mato Grosso</option>
				<option value="matogrossodosul">Mato Grosso do Sul</option>
				<option value="minasgerais">Minas Gerais</option>
				<option value="para">Pará</option>
				<option value="paraiba">Paraíba</option>
				<option value="parana">Paraná</option>
				<option value="pernambuco">Pernambuco</option>
				<option value="piaui">Piauí</option>
				<option value="riodejaneiro">Rio de Janeiro</option>
				<option value="riograndenorte">Rio Grande do Norte</option>
				<option value="riograndesul">Rio Grande do Sul</option>
				<option value="rondonia">Rondônia</option>
				<option value="roraima">Roraima</option>
				<option value="santacatarina">Santa Catarina</option>
				<option value="saopaulo">São Paulo</option>
				<option value="sergipe">Sergipe</option>
				<option value="tocantins">Tocantins</option>
			</select>
			<input type="tel" name="telefone" placeholder="Telefone">
			<input type="email" name="email" placeholder="E-mail" required>
			<input type="email" name="confirma-email" placeholder="Digite o e-mail novamente" required>
			<input type="password" name="senha-cadastro" placeholder="Senha" maxlength="8" required>
			
			<h2 itemprop="name">Receitas preferidas</h2>
			<div class="preferencias">
				<input type="checkbox" name="carnes"><label>Carnes</label>
				<input type="checkbox" name="doces"><label>Doces</label>
				<input type="checkbox" name="massas"><label>Massas</label>
				<input type="checkbox" name="saladas"><label>Saladas</label>
				<input type="checkbox" name="salgados"><label>Salgados</label>
				<input type="checkbox" name="sopas"><label>Sopas</label>
			</div>
			<button type="button" onclick="alert('Cadastro realizado com sucesso!')">Salvar</button>
		</form>
	</div>
	
</section>