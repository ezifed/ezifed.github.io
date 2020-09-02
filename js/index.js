function navmenubar() {
  var x = document.getElementById('mymenu');
  if (x.className === 'menubar') {
    x.className += ' responsive';
  } else {
    x.className = 'menubar';
  }
}

function setCursorByID(id, cursorStyle) {
  var elem;
  if (document.getElementById && (elem = document.getElementById(id))) {
    if (elem.style) elem.style.cursor = cursorStyle;
  }
}

function counter() {
  var n = localStorage.getItem('on_load_counter');

  if (n === null) {
    n = 0;
  }

  n++;

  localStorage.setItem('on_load_counter', n);

  return (document.getElementById('visiter-counter').innerText =
    'You are the ' + n + 'visitor.');
}
counter();
