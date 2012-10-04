//Define vars
var i = 0;

function toggleVis(id) {
	var e = document.getElementById(id);
	if(e.style.display == 'block') {
		e.style.display = 'none';
	}
	else {
		e.style.display = 'block';
	}
}
function addItem() {
	i++;
	var listItem = document.getElementById('todo').value,
		listed = '<li id="item' + i + '"><span class="priority defualt"></span><a href="#" class="closex"></a><span>' + listItem + '</span></li>';
	document.getElementById('tasks').innerHTML += listed;
	document.getElementById('taskadder').style.display = 'none';
	return false;
}










	
    

