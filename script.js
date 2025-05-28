const form = document.querySelector('form');
const warning = document.querySelector('#guess')
const prevg = document.querySelector('.guesses'); 
const remain = document.querySelector('.lastResult'); 
let remainvalue = parseInt(remain.textContent)
const result = document.querySelector('.lowOrHi')
// console.log(remainvalue)

let correct = Math.floor(Math.random() * 100) + 1;
console.log(correct);

let pg = "";

let temp;
form.addEventListener('submit', function(e){
  e.preventDefault();
  prevg.textContent = pg
  if(remainvalue <=0) {
    warning.innerHTML = "You already Lost Please Refresh Page"
    return ;
  }
  const guess = parseInt(document.querySelector('.guessField').value)

  if(guess === correct){
    result.textContent = "Winnnnnnnnnnnnnn"

    return ;
  }
  else{
    remainvalue--;
    remain.textContent = remainvalue

    if(pg.length == 0) pg += `${guess}`
    else pg += `, ${guess}`
  }

  
})
