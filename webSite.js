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

   // let photos = []
   // const companyPhotos = document.getElementById('userPhotos')

   const companyUsers = document.getElementById('users')


   async function enter() {

   const firstResponse = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await firstResponse.json()

   console.log(data)
   users = data
   let newUsers = users;

   newUsers.forEach((user) => {
      companyUsers.innerHTML += `
      <ol id="firstBox">
         <p><b>Name  :</b>${user.name}</p>
         <p><b>E-mail :</b>${user.email}</p>
         <p><b>Adress :</b>${user.address.street} , ${user.address.suite} , ${user.address.city} , ${user.address.zipcode}</p>
         <p><b>Phone :</b>${user.phone}</p>
      </ol>`
   });
   }

   // async function img() {

   // const thirdResponse = await fetch('https://jsonplaceholder.typicode.com/photos')
   // const img = await thirdResponse.json()

   // console.log(img)
   // userPhotos = img
   // let newPhotos = userPhotos.slice(7,17);

   // newPhotos.forEach((photo) => {
   //    companyPhotos.innerHTML += `
   //    <ol id="">
   //       <img style="width:8vw;" src="${photo.url}" alt="">
   //    </ol>`
   // });
   // }


   let todos = []
   const companyTodos = document.getElementById('todos')

   async function task() {

   const secondResponse = await fetch('https://jsonplaceholder.typicode.com/todos')
   const value = await secondResponse.json()

   console.log(value)
   todos = value
   let newTodos = todos.slice(7,17)

   newTodos.forEach((todo) => {
      companyTodos.innerHTML += `
      <ol id="secondBox">
         <p><b>Task- ${todo.id}  :</b>${todo.title}</p>
         <p><b>Completed  :</b>${todo.completed}</p>
      </ol>
   `
   });

   }



