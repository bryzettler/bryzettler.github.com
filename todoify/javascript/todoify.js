//Define vars
var i = 0;

function getPriority(){
	var	high = document.getElementById('high'),
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
		priority = "low";
	}
	return priority;
}

function sortItems(){
	var tasks = document.querySelector('#tasks'),
			items = document.querySelectorAll('#tasks > li');

	for (var i = 0, arr = ['high', 'medium', 'low']; i < arr.length; i++) {
			for (var j = 0; j < items.length; j++) {
					if (~(" " + items[j].className + " ").indexOf(" " + arr[i] + " "))
						tasks.appendChild(items[j]);
			}
	}
}

function addItem(e) {
	i++;
	var priority = getPriority(),
		listItem = document.getElementById('todo').value,
		listed = '<li id="item' + i + '" class="'+ priority +'"><span class="priority '+ priority + '"></span><a href="#" class="closex" onclick="removeItem(\'item'+ i + '\')"></a><span>' + listItem + '</span></li>';
	if(listItem !== "" && listItem !== "Add a new task"){
		document.getElementById('tasks').innerHTML += listed;
	}
	sortItems();
	e.preventDefault();
}

function removeItem(item) {
	var node = document.getElementById(item);
	if (node.parentNode) {
		node.parentNode.removeChild(node);
	}
}
