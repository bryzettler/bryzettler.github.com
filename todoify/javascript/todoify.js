//Define vars
var i = 0;

function toggleVis(id){
	var e = document.getElementById(id);
	if(e.style.display == 'block'){
		e.style.display = 'none';
	}
	else {
		e.style.display = 'block';
	}
}
function addItem(e) {
    if (e.keyCode == 13) {
	i++;
	var listItem = document.getElementById('todo').value,
		listed = '<li id="item' + i + '"><span>' + listItem + '</span></li>';
	document.getElementById('tasks').innerHTML += listed;
	return false;
    }
    e.style.display = 'none';
}










	
    

