$(function () 
{
	var options = {
		data: ["blue", "green", "pink", "red", "yellow"],
		placeholder: "Procurar receitas"
	};
	$("#search").easyAutocomplete(options);
});

$(document).on("click", "a", function()
{
	var id = $(this).attr("id");
	
	if(id != undefined)
	{
		changePage(id);
	}
});

function changePage(page) 
{	
	$.ajax(
	{				
		url: 'php/' + page + '.php', 
		type: 'POST',
		cache: false,
		success: function(result) 
		{
			$("#content").html(result);
		},
		complete: function (result) 
		{

		},
		error: function(r, s, e)
		{
			console.log("ERROR!!!");
			console.log(r.responseText);
		}
	});		
}			