
  
  
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