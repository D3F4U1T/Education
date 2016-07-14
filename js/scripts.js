(function($){

}) (jQuery)

function Authorize(){
	return JSON.parse(localStorage.getItem('Value'))||[];
}

function setItem(item){
	var value = Authorize();
	value.push(item);
	localStorage.setItem('Value', JSON.stringify(value));
}

function drawItem(item){
	var template = "<p>" + item + "</p>";
	$(".auth").append(template);
}

$('#add').on('click', function addTask(){
 	var val = $("#new-text").val();
 	if(task){
 		setItem(val);
 		drawItem(val);
 		delitem(val);
 	}
})