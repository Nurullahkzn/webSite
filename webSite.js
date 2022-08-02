const newUser = document.querySelector('#firstButton')
const user = document.querySelector('#secondButton')

list = []

function register () {

   let product = document.getElementById('input').value

   list.push(product)
   document.getElementById('input').value = ''

   console.log(...list)
} /* Hepsini kapsocak Şekilde Ayarlamak lazım --Zamaan kalırsa bak*/





