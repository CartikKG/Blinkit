import data from "./products.json"assert {
  type: 'json'
};
import chemistData from "./layout.json"assert {
  type: 'json'
};
import navbar from "../components/navbar.js";
let url = "https://blinkit-clone.surge.sh/categories/"
// document.getElementById("navbar").innerHTML = navbar(
//   "../img/Untitled-1.jpg",
//   "../index.html"
// );
showTopData()
showChemist()
dairy_products()
biscuits()

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
  var cor_s1 = document.getElementById('couroSlider')
  let a = chemistData.filter((ele, i) => {
    if (i == 6) {
      return ele
    }
  });
  let b = a[0].objects[0].data.products
  b.map((ele) => {
    let name = ''
    name = ele[0].name
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
      console.log(name);
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = `<div class="s_child">
                    <img src="${ele[0].image_url}" class="" alt="...">
                    <p>${name}</p>
                    <small>${ele[0].unit}</small>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                        <p> ${ele[0].price}</p><p> <s> ${ele[0].mrp}</s></p>
                        </div>
                        <span class="addonchangeclick">
                          <h5 onclick="clickonaddbtn()">ADD</h5>
                        </span>
                    </div>
                  </div>`
    cor_s1.innerHTML += img;
  })

  let c1 = b.filter((ele, i) => {
    if (i < 6) {
      return ele
    }
  })
  c1.map((ele) => {
    let name = ''
    name = ele[0].name
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
      console.log(name);
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = `<div class="w-20_per">
                <img src="${ele[0].image_url}" class="" alt="...">
                    <div class="bVEkMr">${x}% OFF</div>
                      <p>${name}</p>
                      <small>${ele[0].unit}</small>
                      <div class="d-flex justify-content-between align-items-center">
                      <div><p> ₹${ele[0].price}</p><small> <s> ₹${ele[0].mrp}</s></small></div>
                       <span class="addonchangeclick"><h5 onclick="clickonaddbtn()">ADD</h5> </span>
                    </div>
                </div> `
    cor1.innerHTML += img;
  })
  let c2 = b.filter((ele, i) => {
    if (i > 5 && i < 12) {
      return ele
    }
  })
  c2.map((ele) => {
    let name = ''
    name = ele[0].name
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = `<div class="w-20_per">
                <img src="${ele[0].image_url}" class="" alt="...">
                    <div class="bVEkMr">${x}% OFF</div>
                      <p>${name}</p>
                      <small>${ele[0].unit}</small>
                      <div class="d-flex justify-content-between align-items-center">
                      <div><p> ₹${ele[0].price}</p><small> <s> ₹${ele[0].mrp}</s></small></div>
                       <span class="addonchangeclick"><h5 onclick="clickonaddbtn()">ADD</h5> </span>
                    </div>
                </div> `
    cor2.innerHTML += img
  })
  let c3 = b.filter((ele, i) => {
    if (i > 8 && i < 15) {
      return ele
    }
  })
  c3.map((ele) => {
    let name = ''
    name = ele[0].name
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = `<div class="w-20_per">
                <img src="${ele[0].image_url}" class="" alt="...">
                    <div class="bVEkMr">${x}% OFF</div>
                      <p>${name}</p>
                      <small>${ele[0].unit}</small>
                      <div class="d-flex justify-content-between align-items-center">
                      <div><p> ₹${ele[0].price}</p><small> <s> ₹${ele[0].mrp}</s></small></div>
                       <span class="addonchangeclick"><h5 onclick="clickonaddbtn()">ADD</h5> </span>
                    </div>
                </div> `
    cor3.innerHTML += img
  })
}

function dairy_products() {
  var cor1 = document.getElementById('d_cor_one')
  var cor2 = document.getElementById('d_cor_two')
  var cor3 = document.getElementById('d_cor_three')
  var cor_s2 = document.getElementById('couroSlider1')
  let a = chemistData.filter((ele, i) => {
    if (i == 7) {
      return ele
    }
  });
  let b = a[0].objects[0].data.products
  b.map((ele) => {
    let name = ''
    name = ele[0].name
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
      console.log(name);
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = `<div class="s_child">
                    <img src="${ele[0].image_url}" class="" alt="...">
                    <p>${name}</p>
                    <small>${ele[0].unit}</small>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                        <p> ${ele[0].price}</p><p> <s> ${ele[0].mrp}</s></p>
                        </div>
                        <span class="addonchangeclick">
                          <h5 onclick="clickonaddbtn()">ADD</h5>
                        </span>
                    </div>
                  </div>`
    cor_s2.innerHTML += img;
  })
  let c1 = b.filter((ele, i) => {
    if (i < 6) {
      return ele
    }
  })
  c1.map((ele) => {
    let name = ''
    name = ele[0].name
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = `<div class="w-20_per">
                <img src="${ele[0].image_url}" class="" alt="...">
                    <div class="bVEkMr">${x}% OFF</div>
                      <p>${name}</p>
                      <small>${ele[0].unit}</small>
                      <div class="d-flex justify-content-between align-items-center">
                      <div><p> ₹${ele[0].price}</p><small> <s> ₹${ele[0].mrp}</s></small></div>
                       <span class="addonchangeclick"><h5 onclick="clickonaddbtn()">ADD</h5> </span>
                    </div>
                </div> `
    cor1.innerHTML += img;
    console.log("c", cor1);
  })
  let c2 = b.filter((ele, i) => {
    if (i > 5 && i < 12) {
      return ele
    }
  })
  c2.map((ele) => {
    let name = ''
    name = ele[0].name
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = `<div class="w-20_per">
                <img src="${ele[0].image_url}" class="" alt="...">
                    <div class="bVEkMr">${x}% OFF</div>
                      <p>${name}</p>
                      <small>${ele[0].unit}</small>
                      <div class="d-flex justify-content-between align-items-center">
                      <div><p> ₹${ele[0].price}</p><small> <s> ₹${ele[0].mrp}</s></small></div>
                       <span class="addonchangeclick"><h5 onclick="clickonaddbtn()">ADD</h5> </span>
                    </div>
                </div> `
    cor2.innerHTML += img
  })
  let c3 = b.filter((ele, i) => {
    if (i > 8 && i < 15) {
      return ele
    }
  })
  c3.map((ele) => {
    let name = ''
    name = ele[0].name
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = `<div class="w-20_per">
                <img src="${ele[0].image_url}" class="" alt="...">
                    <div class="bVEkMr">${x}% OFF</div>
                      <p>${name}</p>
                      <small>${ele[0].unit}</small>
                      <div class="d-flex justify-content-between align-items-center">
                      <div><p> ₹${ele[0].price}</p><small> <s> ₹${ele[0].mrp}</s></small></div>
                       <span class="addonchangeclick"><h5 onclick="clickonaddbtn()">ADD</h5> </span>
                    </div>
                </div> `
    cor3.innerHTML += img
  })
}

function biscuits() {
  var cor1 = document.getElementById('b_cor_one')
  var cor2 = document.getElementById('b_cor_two')
  var cor3 = document.getElementById('b_cor_three')
  var cor_s3 = document.getElementById('couroSlider2')
  let a = chemistData.filter((ele, i) => {
    if (i == 8) {
      return ele
    }
  });
  let b = a[0].objects[0].data.products
  b.map((ele) => {
    let name = ''
    name = ele[0].name
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
      console.log(name);
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = `<div class="s_child">
                    <img src="${ele[0].image_url}" class="" alt="...">
                    <p>${name}</p>
                    <small>${ele[0].unit}</small>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                        <p> ${ele[0].price}</p><p> <s> ${ele[0].mrp}</s></p>
                        </div>
                        <span class="addonchangeclick">
                          <h5 onclick="clickonaddbtn()">ADD</h5>
                        </span>
                    </div>
                  </div>`
    cor_s3.innerHTML += img;
  })
  let c1 = b.filter((ele, i) => {
    if (i < 6) {
      return ele
    }
  })
  c1.map((ele) => {
    let name = ''
    name = ele[0].name
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = `<div class="w-20_per">
                <img src="${ele[0].image_url}" class="" alt="...">
                    <div class="bVEkMr">${x}% OFF</div>
                      <p>${name}</p>
                      <small>${ele[0].unit}</small>
                      <div class="d-flex justify-content-between align-items-center">
                      <div><p> ₹${ele[0].price}</p><small> <s> ₹${ele[0].mrp}</s></small></div>
                       <span class="addonchangeclick"><h5 onclick="clickonaddbtn()">ADD</h5> </span>
                    </div>
                </div> `
    cor1.innerHTML += img;
    console.log("c", cor1);
  })
  let c2 = b.filter((ele, i) => {
    if (i > 5 && i < 12) {
      return ele
    }
  })
  c2.map((ele) => {
    let name = ''
    name = ele[0].name
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = `<div class="w-20_per">
                <img src="${ele[0].image_url}" class="" alt="...">
                    <div class="bVEkMr">${x}% OFF</div>
                      <p>${name}</p>
                      <small>${ele[0].unit}</small>
                      <div class="d-flex justify-content-between align-items-center">
                      <div><p> ₹${ele[0].price}</p><small> <s> ₹${ele[0].mrp}</s></small></div>
                       <span class="addonchangeclick"><h5 onclick="clickonaddbtn()">ADD</h5> </span>
                    </div>
                </div> `
    cor2.innerHTML += img
  })
  let c3 = b.filter((ele, i) => {
    if (i > 8 && i < 15) {
      return ele
    }
  })
  c3.map((ele) => {
    let name = ''
    name = ele[0].name
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = `<div class="w-20_per">
                <img src="${ele[0].image_url}" class="" alt="...">
                    <div class="bVEkMr">${x}% OFF</div>
                      <p>${name}</p>
                      <small>${ele[0].unit}</small>
                      <div class="d-flex justify-content-between align-items-center">
                      <div><p> ₹${ele[0].price}</p><small> <s> ₹${ele[0].mrp}</s></small></div>
                       <span class="addonchangeclick"><h5 onclick="clickonaddbtn()">ADD</h5> </span>
                    </div>
                </div> `
    cor3.innerHTML += img
  })
}