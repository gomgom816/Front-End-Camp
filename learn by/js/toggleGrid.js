/*! toggleGrid.js © yamoo9.net, 2016 */
'use strict';

var container = document.querySelector('.container');

document.onkeydown = function(evt) {
  if ( evt.shiftKey && evt.keyCode === 71 ) {
    container.classList.toggle('show-grid');
  }
}
