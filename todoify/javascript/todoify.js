//Define vars
var i = 0;

function addItem(e) {
	i++;
	var listItem = document.getElementById('todo').value,
		listed = '<li id="item' + i + '"><span class="priority defualt"></span><a href="#" class="closex" onclick="removeItem(\'item'+ i + '\')"></a><span>' + listItem + '</span></li>';
	document.getElementById('tasks').innerHTML += listed;
	e.preventDefault();
}

function removeItem(item) {
	var node = document.getElementById(item);
	if (node.parentNode) {
		node.parentNode.removeChild(node);
	}
}
