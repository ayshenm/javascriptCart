
const container = document.querySelector("#container");
const namee = document.querySelector("#name");
const about = document.querySelector("#about");
const img = document.querySelector("#img");
const price = document.querySelector("#price");
const parsent = document.querySelector("#parsent");



function yarat(){
    if( namee.value == "" || about.value == "" || img.value == "" || price.value == ""){
        alert("inputlara deyer daxil edin!!");
    }else{
        let faiz = price.value * parsent.value / 100;
        let result = (parsent.value == '') ? `${price.value}` :
                    `<span>${price.value}</span> ${ price.value - faiz}`
        container.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${img.value}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${namee.value}</h5>
      <p class="card-text">${about.value}</p>
      <a href="#" class="btn btn-primary">Qiymet: ${result} azn</a>
    </div>
  </div> 
    `

    }
    
   clear();

}

function clear(){
    namee.value = "";
    about.value = "";
    img.value = "";
    price.value = "";
    parsent.value = "";

}

