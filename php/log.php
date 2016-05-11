<?php 
	session_start(); 
	$_SESSION['nome'] = $_POST['nome'];
	$_SESSION['senha'] = $_POST['senha'];
	$_SESSION['email'] = $_POST['email'];
?>