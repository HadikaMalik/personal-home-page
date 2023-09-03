
  
  
let element_Aboutme = document.getElementById('Aboutme');
element_Aboutme.style.backgroundColor = '#00cccc';

var rolls, dice, keep_playing_button;

// Describe this function...
function display_the_rolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  let element_list2 = document.getElementById('list');
  rolls.forEach((rolls) => {
    let new_ul = document.createElement('ul');
    new_ul.innerText = rolls;
    new_ul.style.backgroundColor = '#330099';
    new_ul.style.color = '#ff99ff';

    element_list2.appendChild(new_ul);
  });
  let element_total = document.getElementById('total');
  element_total.innerText = rolls.reduce((a,b) => a+b, 0);
  keep_playing_button = rolls.reduce((a,b) => a+b, 0);
  if (keep_playing_button < 11) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'Keep playing!';
  } else if (keep_playing_button == 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'You won!';
  } else {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'You lost!';
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


rolls = [1, 2, 3];
dice = [1, 2, 3, 4, 5, 6];
display_the_rolls();


document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  display_the_rolls();

});

document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.push(randomMember(dice));
  display_the_rolls();

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  let element_list3 = document.getElementById('list');
  rolls.pop();
  display_the_rolls();

});

document.getElementById('Day').addEventListener('click', (event) => {
  let element_page = document.getElementById('page');
  element_page.style.backgroundColor = '#ffff00';
  element_page.style.color = '#000000';

});

document.getElementById('Night').addEventListener('click', (event) => {
  let element_page2 = document.getElementById('page');
  element_page2.style.backgroundColor = '#000000';
  element_page2.style.color = '#ffff00';

});

var images, nav, x;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = document.getElementById('text').value;

  element_list.appendChild(new_li);

});

document.getElementById('button1').addEventListener('click', (event) => {
  let element_cart_list = document.getElementById('cart_list');
  let new_ul = document.createElement('ul');
  new_ul.innerText = 'Yoghurt 🍶';

  element_cart_list.appendChild(new_ul);

});

document.getElementById('button2').addEventListener('click', (event) => {
  let element_cart_list2 = document.getElementById('cart_list');
  let new_ul2 = document.createElement('ul');
  new_ul2.innerText = 'Milk 🥛';

  element_cart_list2.appendChild(new_ul2);

});

document.getElementById('button3').addEventListener('click', (event) => {
  let element_cart_list3 = document.getElementById('cart_list');
  let new_ul3 = document.createElement('ul');
  new_ul3.innerText = 'Toast 🍞';

  element_cart_list3.appendChild(new_ul3);

});

document.getElementById('button4').addEventListener('click', (event) => {
  let element_cart_list4 = document.getElementById('cart_list');
  let new_ul4 = document.createElement('ul');
  new_ul4.innerText = 'Butter 🧈';

  element_cart_list4.appendChild(new_ul4);

});

document.getElementById('button5').addEventListener('click', (event) => {
  let element_cart_list5 = document.getElementById('cart_list');
  let new_ul5 = document.createElement('ul');
  new_ul5.innerText = 'Eggs 🥚';

  element_cart_list5.appendChild(new_ul5);

});
images = ['https://images.pexels.com/photos/13027954/pexels-photo-13027954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/2198626/pexels-photo-2198626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/7965943/pexels-photo-7965943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'];


document.getElementById('button_next').addEventListener('click', (event) => {
  let element_list_imag = document.getElementById('list_imag');
  images.push(images[0]);
  images.shift();
  element_list_imag.setAttribute("src", images[0]);

});

document.getElementById('button_prev').addEventListener('click', (event) => {
  let element_list_imag2 = document.getElementById('list_imag');
  images.unshift(images.slice(-1)[0]);
  images.pop();
  element_list_imag2.setAttribute("src", images[0]);

});
nav = ['Shopping cart', 'Image Carousel', 'Comments'];
x = [];


document.getElementById('nav').addEventListener('click', (event) => {
  if (!nav.length) {
    let element_nav_list = document.getElementById('nav_list');
    while (!!x.length) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      nav.unshift(x.shift());
    }
    element_nav_list.replaceChildren();
    let element_nav = document.getElementById('nav');
    element_nav.innerText = '☰';
  } else {
    let element_nav_list2 = document.getElementById('nav_list');
    while (!!nav.length) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      x.unshift(nav[0]);
      let new_li2 = document.createElement('li');
      new_li2.innerText = nav.shift();

      element_nav_list2.appendChild(new_li2);
    }
    let element_nav2 = document.getElementById('nav');
    element_nav2.innerText = 'X';
  }

});