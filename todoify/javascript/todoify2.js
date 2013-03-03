$(function(){
	var i = 0;

	function addTask(){
		i++;
		var newItem = $('#todo').val();
		$('#tasks').append('<li id="item' + i + '">' + newItem + '</li>');
		$('#todo').val("");
		return false;
	}
	
	$('#submit').on('click', addTask);

});