

const btn = document.getElementById('menu-btn');
const mnu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle(){
  btn.classList.toggle('open');
  mnu.classList.toggle('flex');
  mnu.classList.toggle('hidden');
}


