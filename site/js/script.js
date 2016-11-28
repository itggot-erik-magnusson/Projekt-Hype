function expand() {
  document.getElementById('top').style.height = '530pt';
  document.getElementById('top').style.transition = 'ease 1.5s';
  document.getElementById('expandDown').style.display = 'none';
  document.getElementById('expandUp').style.display = 'block';
  document.getElementById('topTitle').innerHTML = 'Less';
}

function retract() {
  document.getElementById('top').style.height = '300pt';
  document.getElementById('top').style.transition = 'ease 1s';
  document.getElementById('expandDown').style.display = 'block';
  document.getElementById('expandUp').style.display = 'none';
  document.getElementById('topTitle').innerHTML = 'More';
}

function menuOn() {
  document.getElementById('menu').style.height = '230pt';
  document.getElementById('menu').style.transition = '0.3s';
}

function menuOff() {
  document.getElementById('menu').style.height = '0';
  document.getElementById('menu').style.transition = '0.15s';
}
