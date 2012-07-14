//Define vars
var i = 0;

function addItem(e) {
    if (e.keyCode == 13) {
	i++;
	var listItem = document.getElementById('todo').value,
	    listed = '<li id="item' + i + '"><span>' + listItem + '</span></li>';
	document.getElementById('tasks').innerHTML += listed;
	return false;
    }
}










	
    

