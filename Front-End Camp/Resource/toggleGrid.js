// 'use strict';

// var container = document.querySelector('.container');

// // console.log(container);

// document.onkeydown = function(evt) {
// 	if (evt.shiftKey && evt.keyCode === 71 ) {
// 		container.classList.toggle('show-grid');
// 	}
// }

// body - show-leading && container - show-grid

'use strict';

var container = document.querySelector('.container');
var body = document.querySelector('body');
// console.log(container);

document.onkeydown = function(evt) {
	if (evt.shiftKey && evt.keyCode === 71 ) {
		container.classList.toggle('show-grid');
		body.classList.toggle('show-leading');
	}
}