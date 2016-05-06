<?php ?>
<section class="login secao">	
	<h1>Já sou cadastrado</h1>
	
	<div>
	<form>
		<input type="text" name="login" placeholder="Login" maxlength="25" required>
		<input type="password" name="senha-login" placeholder="Senha" maxlength="8" required>
		<button type="button" onclick="alert('Login realizado com sucesso!')">Entrar</button>
	</form>
	</div>
	
	<div>
	<h1>Quero me cadastrar</h1>
	<form>
		<input type="text" name="nome" placeholder="Nome completo" required>
		<input type="date" name="data-nascimento" placeholder="Data de nascimento" min="2012-01-01" required>
		<input type="text" name="cidade" placeholder="Cidade" maxlength="50">
		<select>
			<option value="saopaulo">São Paulo</option>
			<option value="minasgerais">Minas Gerais</option>
		</select>
		<input type="tel" name="telefone" placeholder="Telefone">
		<input type="email" name="email" placeholder="E-mail" required>
		<input type="email" name="confirma-email" placeholder="Digite o e-mail novamente" required>
		<input type="password" name="senha-cadastro" placeholder="Senha" maxlength="8" required>
		
		<h2>Preferências</h2>
		<input type="checkbox" name="carnes"><label>Carnes</label>
		<input type="checkbox" name="doces"><label>Doces</label>
		<input type="checkbox" name="massas"><label>Massas</label>
		<input type="checkbox" name="saladas"><label>Saladas</label>
		<input type="checkbox" name="salgados"><label>Salgados</label>
		<input type="checkbox" name="sopas"><label>Sopas</label>
		<button type="button" onclick="alert('Cadastro realizado com sucesso!')">Salvar</button>
	</form>
	</div>
	
</section>