import data from "./products.json" assert {
  type: 'json'
};
import chemistData from "./layout.json" assert {
  type: 'json'
};
let url = "https://blinkit-clone.surge.sh/categories/"
showTopData()
showChemist()
dairy_products()

function showTopData() {
  let topProd = document.getElementById('topProd')
  let offer = document.getElementById('offer')
  topProd.innerHTML = null
  offer.innerHTML = null
  data.topData.map((ele, i) => {
    let a = ` <div class="child">
        <img src="${url}${ele.coverFile}" alt="" loading="lazy" srcset="" class="childImg">
    </div>`
    topProd.innerHTML += a;
  })
  data.objects.map((ele, i) => {
    let b = ` <div class="offerchild ">
        <img src="${ele.data.image_url}" alt="" loading="lazy" srcset="" class="offerchildImg">
    </div>`
    offer.innerHTML += b;
  })
}

function showChemist() {
  var cor1 = document.getElementById('cor_one')
  var cor2 = document.getElementById('cor_two')
  var cor3 = document.getElementById('cor_three')
  let a = chemistData.filter((ele, i) => {
    if (i == 6) {
      return ele
    }
  });
  let b = a[0].objects[0].data.products
  let c1 = b.filter((ele, i) => {
    if (i < 6) {
      return ele
    }
  })
  c1.map((ele) => {
    let name =ele[0].name
    if(name.lenght<=30){
      name = name
    }else{
      name = name.slice(0,30)+'...'
    }
    let img = `<div class="w-20">
                    <img src="${ele[0].image_url}" class="" alt="...">
                    <p>${name}</p>
                    <small>${ele[0].unit}</small>
                    <div class="d-flex justify-content-between align-items-center">
                        <div><p> ${ele[0].price}</p><p> <s> ${ele[0].mrp}</s></p></div>
                            <button class="btn btn-outline-success text-success">ADD</button>
                    </div>
                </div>
                `
    cor1.innerHTML += img;
    console.log("c", c1);
  })
  let c2 = b.filter((ele, i) => {
    if (i > 5 && i < 12) {
      return ele
    }
  })
  c2.map((ele) => {
    let name =ele[0].name
    if(name.lenght<=30){
      name = name
    }else{
      name = name.slice(0,30)+'...'
    }
    let img = ` <div class="w-20">
    <img src="${ele[0].image_url}" class="" alt="...">
    <p>${ele[0].name}</p>
    <small>${ele[0].unit}</small>
    <div class="d-flex justify-content-between align-items-center">
        <div><p> ${ele[0].price}</p><p> <s> ${ele[0].mrp}</s></p></div>
            <button class="btn btn-outline-success text-success">ADD</button>
    </div>
</div>
                `
    cor2.innerHTML += img
  })
  let c3 = b.filter((ele, i) => {
    if (i > 8 && i < 15) {
      return ele
    }
  })
  c3.map((ele) => {
    let name =ele[0].name
    if(name.lenght<=30){
      name = name
    }else{
      name = name.slice(0,30)+'...'
    }
    let img = `  <div class="w-20">
    <img src="${ele[0].image_url}" class="" alt="...">
    <p>${ele[0].name}</p>
    <small>${ele[0].unit}</small>
    <div class="d-flex justify-content-between align-items-center">
        <div><p> ${ele[0].price}</p><p> <s> ${ele[0].mrp}</s></p></div>
            <button class="btn btn-outline-success text-success">ADD</button>
    </div>
</div>`
    cor3.innerHTML += img
  })
}

function dairy_products() {
  var cor1 = document.getElementById('d_cor_one')
  var cor2 = document.getElementById('d_cor_two')
  var cor3 = document.getElementById('d_cor_three')
  let a = chemistData.filter((ele, i) => {
    if (i == 7) {
      return ele
    }
  });
  let b = a[0].objects[0].data.products
  let c1 = b.filter((ele, i) => {
    if (i < 6) {
      return ele
    }
  })
  c1.map((ele) => {
    let name =ele[0].name
    if(name.lenght<=30){
      name = name
    }else{
      name = name.slice(0,30)+'...'
    }
    let img = `  <div class="w-20">
    <img src="${ele[0].image_url}" class="" alt="...">
    <p>${ele[0].name}</p>
    <small>${ele[0].unit}</small>
    <div class="d-flex justify-content-between align-items-center">
        <div><p> ${ele[0].price}</p><p> <s> ${ele[0].mrp}</s></p></div>
            <button class="btn btn-outline-success text-success">ADD</button>
    </div>
</div>`
    cor1.innerHTML += img;
    console.log("c", cor1);
  })
  let c2 = b.filter((ele, i) => {
    if (i > 5 && i < 12) {
      return ele
    }
  })
  c2.map((ele) => {
    let name =ele[0].name
    if(name.lenght<=30){
      name = name
    }else{
      name = name.slice(0,30)+'...'
    }
    let img = ` <div class="w-20">
    <img src="${ele[0].image_url}" class="" alt="...">
    <p>${ele[0].name}</p>
    <small>${ele[0].unit}</small>
    <div class="d-flex justify-content-between align-items-center">
        <div><p> ${ele[0].price}</p><p> <s> ${ele[0].mrp}</s></p></div>
            <button class="btn btn-outline-success text-success">ADD</button>
    </div>
</div>`
    cor2.innerHTML += img
  })
  let c3 = b.filter((ele, i) => {
    if (i > 8 && i < 15) {
      return ele
    }
  })
  c3.map((ele) => {
    let name =ele[0].name
    if(name.lenght<=30){
      name = name
    }else{
      name = name.slice(0,30)+'...'
    }
    let img = `  <div class="w-20">
    <img src="${ele[0].image_url}" class="" alt="...">
    <p>${ele[0].name}</p>
    <small>${ele[0].unit}</small>
    <div class="d-flex justify-content-between align-items-center">
        <div><p> ${ele[0].price}</p><p> <s> ${ele[0].mrp}</s></p></div>
            <button class="btn btn-outline-success text-success">ADD</button>
    </div>
</div>`
    cor3.innerHTML += img
  })
}