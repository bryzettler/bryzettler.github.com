//Define vars
var i = 0;

/*function toggleVis() {
	var e = document.getElementById('taskadder');
	if(e.style.visibility == 'visible') {
		e.style.visibility = 'hidden';
		}
	else {
		e.style.visibility = 'visible';
	}
}*/
function addItem() {
	i++;
	var listItem = document.getElementById('todo').value,
		listed = '<li id="item' + i + '"><span class="priority defualt"></span><a href="#" class="closex" onclick="removeItem(\'item'+ i + '\')"></a><span>' + listItem + '</span></li>';
	document.getElementById('tasks').innerHTML += listed;
}
function removeItem(item) {
	var node = document.getElementById(item);
	if (node.parentNode) {
		node.parentNode.removeChild(node);
	}
}










	
    

