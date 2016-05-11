<?php 
	session_start(); 
	include './php/setup.php';
?>

<?php get_header(); ?>

<div class="container" id="content">
	<?php
		get_index();
	?>
</div>

<?php get_footer(); 
	
	if (isset($_SESSION['nome'], $_SESSION['senha'], $_SESSION['email'])) 
	{
		echo "<script type='text/javascript'>";
		echo "login('" . $_SESSION['email'] . "','" . $_SESSION['senha'] . "');";
		echo "</script>";
	}
	else
	{
		echo "<script type='text/javascript'>";
		echo "console.log('Nenhum usuário logado.');";
		echo "</script>";
	}

?>