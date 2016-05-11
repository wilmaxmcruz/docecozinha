<?php ?>
<section class="acesso secao" itemscope itemtype="http://schema.org/Person">		
	<div class="login left">
		<h1 itemprop="name">Já sou cadastrado</h1>
		<form id="form-login" onsubmit="return checkLogin();">
			<input type="text" name="login" placeholder="Login" required aria-required="true">
			<input type="password" name="senha-login" placeholder="Senha" maxlength="8" required aria-required="true">
			<input type="submit" value="Entrar" role="button" formmethod="post">
		</form>
	</div> 	
	<div class="cadastro right">
		<h1 itemprop="name">Quero me cadastrar</h1>
		<form id="form-cadastro" onsubmit="return checkCadastro();">
			<input type="text" pattern="[A-Za-z].{1,}"  class="uppercase" name="nome" placeholder="Nome completo" required aria-required="true">
			<input type="date" name="data-nascimento" class="uppercase" placeholder="Data de nascimento" max="2012-01-01" required aria-required="true">
			<input type="text" name="cidade" pattern="[A-Za-z].{1,}"  class="uppercase" placeholder="Cidade">
			<select>
				<option value="acre">ACRE</option>
				<option value="alagoas">ALAGOAS</option>
				<option value="amapa">AMAPÁ</option>
				<option value="amazonas">AMAZONAS</option>
				<option value="bahia">BAHIA</option>
				<option value="ceara">CEARÁ</option>
				<option value="distritofederal">DISTRITO FEDERAL</option>
				<option value="espiritosanto">ESPÍRITO SANTO</option>
				<option value="goias">GOIÁS</option>
				<option value="maranhao">MARANHÃO</option>
				<option value="matogrosso">MATO GROSSO</option>
				<option value="matogrossodosul">MATO GROSSO DO SUL</option>
				<option value="minasgerais">MINAS GERAIS</option>
				<option value="para">PARÁ</option>
				<option value="paraiba">PARAÍBA</option>
				<option value="parana">PARANÁ</option>
				<option value="pernambuco">PERNAMBUCO</option>
				<option value="piaui">PIAUÍ</option>
				<option value="riodejaneiro">RIO DE JANEIRO</option>
				<option value="riograndenorte">RIO GRANDE DO NORTE</option>
				<option value="riograndesul">RIO GRANDE DO SUL</option>
				<option value="rondonia">RONDÔNIA</option>
				<option value="roraima">RORAIMA</option>
				<option value="santacatarina">SANTA CATARINA</option>
				<option value="saopaulo">SÃO PAULO</option>
				<option value="sergipe">SERGIPE</option>
				<option value="tocantins">TOCANTINS</option>
			</select>
			<input type="tel" name="telefone" pattern="\([0-9]{2}\)[\s][0-9].{3,}-[0-9]{4}" placeholder="Telefone - (XX) XXXX-XXXX" maxlength="14" required aria-required="true">
			<input type="email" name="email" placeholder="E-mail" required aria-required="true">
			<input id="confirm-email" type="email" name="confirma-email" placeholder="Digite o e-mail novamente" required aria-required="true">
			<input type="password" name="senha-cadastro" placeholder="Senha" title="A senha deve ser composta por 8 caracteres, sendo: números, letras maiúsculas e minúsculas" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}" maxlength="8" required aria-required="true">
			
			<h2 itemprop="name">Receitas preferidas</h2>
			<div class="preferencias" role="checkbox">
				<input type="checkbox" name="carnes" aria-checked="false"><label>Carnes</label>
				<input type="checkbox" name="doces" aria-checked="false"><label>Doces</label>
				<input type="checkbox" name="massas" aria-checked="false"><label>Massas</label>
				<input type="checkbox" name="saladas" aria-checked="false"><label>Saladas</label>
				<input type="checkbox" name="salgados" aria-checked="false"><label>Salgados</label>
				<input type="checkbox" name="sopas" aria-checked="false"><label>Sopas</label>
			</div>			
			<input type="submit" value="Cadastrar" role="button" formmethod="post">
		</form>
	</div>
	
</section>
<script type="text/javascript" src="js/mask.js"></script>