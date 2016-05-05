<?php 

	function get_index()
	{		
		$index = file_get_contents('./php/index.php');
		echo $index;
	}

	function get_header()
	{		
		$header = file_get_contents('./php/header.php');
		echo $header;
	}

	function get_footer()
	{		
		$footer = file_get_contents('./php/footer.php');
		echo $footer;
	}
?>