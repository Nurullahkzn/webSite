   let list = []

   function searchMenu(searchInput){
    const searchInput =  document.querySelector('input');

    searchInput.addEventListener("keyup", function(){
        let data = this.value.toUpperCase();
        let li = await fetch(`https://jsonplaceholder.typicode.com/user/name=${searchInput}`)
        list = li

        for(let i=0 ; i< list.length;i++){
            console.log(li[i].innerHTML);
            if(list[i].innerHTML.indexOf(data)>-1){

                list[i].style.display="";

            } else {

            list[i].style.display ="none";

            }
        }
    })
 }