//Define vars
var i = 0;
	
function getPriority(){
	var high = document.getElementById('high'),
		medium = document.getElementById('medium'),
		low = document.getElementById('low');
	if (high.checked){
		priority = "high";
	}
	else if (medium.checked){
		priority = "medium";
	}
	else if (low.checked){
		priority = "low";
	}
	else {
		priority = "defualt";
	}
	return priority;
}

function addItem(e) {
	i++;
	var priority = getPriority(),
		listItem = document.getElementById('todo').value,
		listed = '<li id="item' + i + '"><span class="priority '+ priority + '"></span><a href="#" class="closex" onclick="removeItem(\'item'+ i + '\')"></a><span>' + listItem + '</span></li>';
	document.getElementById('tasks').innerHTML += listed;
	e.preventDefault();
}

function removeItem(item) {
	var node = document.getElementById(item);
	if (node.parentNode) {
		node.parentNode.removeChild(node);
	}
}
