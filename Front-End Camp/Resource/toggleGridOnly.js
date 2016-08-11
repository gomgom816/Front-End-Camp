'use strict';

var container = document.querySelector('.container');

// console.log(container);

document.onkeydown = function(evt) {
	if (evt.shiftKey && evt.keyCode === 71 ) {
		container.classList.toggle('show-grid');
	}
}