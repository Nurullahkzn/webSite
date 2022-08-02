// const newUser = document.querySelector('#firstButton')
// const user = document.querySelector('#secondButton')

//  list = []

//  function register () {

//     let product = document.getElementById('input').value

//     list.push(product)
//     document.getElementById('input').value = ''

//       console.log(...list)
//  } /* Hepsini kapsocak Şekilde Ayarlamak lazım --Zamaan kalırsa bak*/


let users = []
const companyUsers = document.getElementById('users')

async function enter() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
 
  console.log(data)
  users = data

  let newUsers = users;

  newUsers.forEach((user) => {
    companyUsers.innerHTML += `
    <li>  
      <p><b>Name  :</b>${user.name}</p>
      <p><b>E-mail :</b>${user.email}</p>
      <p><b>Adress :</b>${user.address.street} , ${user.address.suite} , ${user.address.city} , ${user.address.zipcode}</p>
      <p><b>Phone :</b>${user.phone}</p>
    </li>
  `
  }); 
} 


