'use strict';

var ref = new Firebase('https://qnbattleship.firebaseio.com/');

$(document).ready(init);

function init() {
	ref.remove();
	$('button').click(function() {ref.remove();});
	$('td').click(coChooser);
	ref.on("value", getData);
	// ...
}

function coChooser() {
	var co = $(this).attr('class') + $(this).parent().attr('class');
	console.log(co);
	ref.push( {co: co });
}

function getData(snapshot) {
	var snapshot = snapshot.val();
  console.log(snapshot);
}


