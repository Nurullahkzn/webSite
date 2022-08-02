//    let list = []

//    function searchMenu(searchInput){
//     const searchInput =  document.querySelector('input');

//     searchInput.addEventListener("keyup", function(){
//         let data = this.value.toUpperCase();
//         let li = await fetch(`https://jsonplaceholder.typicode.com/user/name=${searchInput}`)
//         list = li

//         for(let i=0 ; i< list.length;i++){
//             console.log(li[i].innerHTML);
//             if(list[i].innerHTML.indexOf(data)>-1){

//                 list[i].style.display="";

//             } else {

//             list[i].style.display ="none";

//             }
//         }
//     })
//  }



// const searchEl = document.getElementById('search')
// const singleUserEl = document.querySelector('.single-user')

// async function searchUser(searchInput) {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/?name=${searchInput}`)
//   const data = await response.json()

//   singleUserEl.innerHTML += `
//    <div class="card" style="width: 18rem;">
//      <div class="card-body">
//        <h5 class="card-title">${data[0].name}</h5>
//        <p class="card-text">${data[0].email}</p>
//      </div>
//    </div>
//   `
// }

// function getSingleUser() {
//   let input = searchEl.value

//   searchUser(input)
// }


// const sonuc=document.getElementById("sonuc");
// const aramaListesi=document.getElementById("aramaListesi");
// const aramaKutusu=document.getElementById("aramaKutusu");

// const anahtarKelimeler=[];
// const sozler=[];

// verileriYukle();

// async function verileriYukle(){
//   const gelen=await fetch("https://sozluk.gov.tr/atasozu");
//   let veri=await gelen.json();
//   console.log(veri);

//   veri.forEach(eleman => {
//     anahtarKelimeler.push(eleman.anahtar);
//     sozler.push(eleman.sozum);
//   })


// const birlesmisKelimeler = [...new Set(anahtarKelimeler)];
// console.log(birlesmisKelimeler);

// let sayac=0;
// birlesmisKelimeler.sort(() => Math.random() - 0.5);
// birlesmisKelimeler.forEach(kelime => {
//   if(sayac<5){
//     const yeni=document.createElement("option");
//     aramaListesi.appendChild(yeni);
//     yeni.value=kelime;
//     }
//     sayac++;
// })
// }

// aramaKutusu.addEventListener("input",(e) => sonuclariAra(e.target.value));

// function sonuclariAra(arananKelime){
//   sonuc.innerHTML="";
//   let aramaKurali = new RegExp(arananKelime, 'gi');
//   let eslesenler=sozler.filter(soz => aramaKurali.test(soz));
  
//   if(arananKelime.length < 3){
//     eslesenler=[];
//   }

//   eslesenler.forEach(es => {
    
//     const siradakiSonuc=document.createElement("li");
//     sonuc.appendChild(siradakiSonuc);
//     siradakiSonuc.innerHTML=es;
  
//   })
// }