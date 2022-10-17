
document.getElementById("address-btn2").addEventListener("click", ()=>{
    document.getElementById("map-modal_container").classList.add("display");
});
function cancelMapModal(){
    document.getElementById("map-modal_container").classList.remove("display");
}

// let totalAmount=JSON.parse(localStorage.getItem("total-amount")) || 0;
let cartArr=JSON.parse(localStorage.getItem("localStoragebuylist")) || [];
let amount = 0
total_amount()
function total_amount(){
    let a = cartArr.map((ele)=>{
     let a =  ele.price
     a = parseInt(a.replace(/\D/g,''))
     return a
     })
     amount = a.reduce((a,b)=>{
         return a+b
     },0)
     
 }

document.getElementById("total-amount-value").innerText=`₹${amount}`;
document.getElementById("payable-amount-value").innerText=`₹${amount}`;
document.getElementById("total-items").innerText=`${cartArr.length} items`;
let carListtHtml = document.getElementById('cartItemslist')
carListtHtml.innerHTML = ''
cartArr.map(function(ele,index){
    let item_count=ele.currentQty;
    let image=ele.image;
    let name=ele.title;
    let unit=ele.weight;
    let price=ele.price;
    // document.getElementById("cart-item-container-pk").innerHTML+=`
    // <div class="checkout-cart-item">
    //     <div class="checkout-cart-item-count">${item_count}</div>
    //     <div class="checkout-cart-item-image">
    //         <img src="${image}" alt="">
    //     </div>
    //     <div class="checkout-cart-item-desc">
    //         <div class="checkout-cart-item-name">${name}</div>
    //         <div class="checkout-cart-item-unit">${unit}</div>
    //         <div>
    //             <span class="checkout-cart-item-price">${price}</span>
    //         </div>
    //     </div>
    // </div>
    // `;
    let items = `<div class="row botmGrayRedius">
    <div class="unit col-1 align-y">${item_count}</div>
    <div class="ItemImage col-4 align-y">
        <img src="${image}" alt="" srcset="">
    </div>
    <div class="itemDetails col-7 align-y">
    <div>
    <div>${name}</div>
    <div>${unit}</div>
    <div>${price}</div>
    </div>
    </div>
    </div>`
    carListtHtml.innerHTML+=items
});


document.getElementById("upi-container").classList.add("hideanything");
document.getElementById("card-container").classList.add("hideanything");
document.getElementById("cash-container").classList.add("hideanything");
document.getElementById("netBanking-container").classList.add("hideanything");

payByWallet()
function payByWallet(){
    document.getElementById("wallet").classList.add("payment-method-selected");
    document.getElementById("upi").classList.remove("payment-method-selected");
    document.getElementById("card").classList.remove("payment-method-selected");
    document.getElementById("cash").classList.remove("payment-method-selected");
    document.getElementById("netbanking").classList.remove("payment-method-selected");

    document.getElementById("wallet-container").classList.remove("hideanything");
    document.getElementById("upi-container").classList.add("hideanything");
    document.getElementById("cash-container").classList.add("hideanything");
    document.getElementById("card-container").classList.add("hideanything");
    document.getElementById("netBanking-container").classList.add("hideanything");
}

function payByUpi(){
    document.getElementById("wallet").classList.remove("payment-method-selected");
    document.getElementById("upi").classList.add("payment-method-selected");
    document.getElementById("card").classList.remove("payment-method-selected");
    document.getElementById("cash").classList.remove("payment-method-selected");
    document.getElementById("netbanking").classList.remove("payment-method-selected");

    document.getElementById("upi-container").classList.remove("hideanything");
    document.getElementById("wallet-container").classList.add("hideanything");
    document.getElementById("cash-container").classList.add("hideanything");
    document.getElementById("card-container").classList.add("hideanything");
    document.getElementById("netBanking-container").classList.add("hideanything");
}

function payByCard(){
    document.getElementById("wallet").classList.remove("payment-method-selected");
    document.getElementById("upi").classList.remove("payment-method-selected");
    document.getElementById("card").classList.add("payment-method-selected");
    document.getElementById("cash").classList.remove("payment-method-selected");
    document.getElementById("netbanking").classList.remove("payment-method-selected");

    document.getElementById("upi-container").classList.add("hideanything");
    document.getElementById("wallet-container").classList.add("hideanything");
    document.getElementById("cash-container").classList.add("hideanything");
    document.getElementById("card-container").classList.remove("hideanything");
    document.getElementById("netBanking-container").classList.add("hideanything");
}

function payByCash(){
    document.getElementById("wallet").classList.remove("payment-method-selected");
    document.getElementById("upi").classList.remove("payment-method-selected");
    document.getElementById("card").classList.remove("payment-method-selected");
    document.getElementById("cash").classList.add("payment-method-selected");
    document.getElementById("netbanking").classList.remove("payment-method-selected");

    document.getElementById("wallet-container").classList.add("hideanything");
    document.getElementById("upi-container").classList.add("hideanything");
    document.getElementById("cash-container").classList.remove("hideanything");
    document.getElementById("card-container").classList.add("hideanything");
    document.getElementById("netBanking-container").classList.add("hideanything");
}

function payByNetbanking(){
    document.getElementById("wallet").classList.remove("payment-method-selected");
    document.getElementById("upi").classList.remove("payment-method-selected");
    document.getElementById("card").classList.remove("payment-method-selected");
    document.getElementById("cash").classList.remove("payment-method-selected");
    document.getElementById("netbanking").classList.add("payment-method-selected");

    document.getElementById("wallet-container").classList.add("hideanything");
    document.getElementById("upi-container").classList.add("hideanything");
    document.getElementById("cash-container").classList.add("hideanything");
    document.getElementById("card-container").classList.add("hideanything");
    document.getElementById("netBanking-container").classList.remove("hideanything");
}

function getMap(){
    let place=document.getElementById("place").value;
    document.getElementById("gmap_canvas").setAttribute("src",`https://maps.google.com/maps?q=${place}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
}

function saveAddress(){
    let place=document.getElementById("place").value;
    let flate=document.getElementById("flate").value;
    let street=document.getElementById("street").value;
    let pincode=document.getElementById("pincode").value;
    let select=document.getElementById("address-as").value;

    if(place==="" || flate==="" || street==="" || pincode==="" || select==""){
        alert("Please fill all the fields and select the address as");
    }
    else{
        document.getElementById("selected-address").innerHTML=`
        <span id="home-office">${select}: </span>${flate}, ${street}, ${place}, ${pincode}, India
        `;
        document.getElementById("map-modal_container").classList.remove("display");
    }
}

function orderPlaced(){
    let address=document.getElementById("selected-address").innerText;
    if(address==""){
        alert("Please select address first");
    }
    else{
        orderSucceful()
    }
}
function payNowByWallet(){
    let address=document.getElementById("selected-address").innerText;
    if(address==""){
        alert("Please select address first");
    }
    else{
        orderSucceful()
    }
}
function payNowByNetbank(){
    let address=document.getElementById("selected-address").innerText;
    let bank=document.getElementById("select-bank-tag").value;
    if(address==""){
        alert("Please select address first");
    }
    if(bank==""){
        alert("Please select Bank");
    }
    else{
        orderSucceful()
    }
}
function cancelGifModal(){
    document.getElementById("order_placed_modal_container").classList.remove("display");
}

function payNow(){
    let cardNumber=document.getElementById("cardNumber").value;
    let month=document.getElementById("month").value;
    let year=document.getElementById("year").value;
    let cvv=document.getElementById("cvv").value;

    let address=document.getElementById("selected-address").innerText;
    if(address==""){
        alert("Please select address first");
    }
    else if(cardNumber==="" || month==="" || month<1 || month>12 || year==="" || year<22 || cvv===""){
        alert("Please provide all proper details");
    }
    else{
        // document.getElementById("order_placed_modal_container").classList.add("display");
        orderSucceful()
    }
}

function payNowUPI(){
    let upi=document.getElementById("upi-input").value;
    let address=document.getElementById("selected-address").innerText;
    if(address==""){
        alert("Please select address first");
    }
    else if(upi===""){
        alert("Please provide a proper UPI ID")
    }
    else{
        orderSucceful()
        // document.getElementById("order_placed_modal_container").classList.add("display");

    }
}

function back(){
document.querySelector('.modal-backdrop').classList.remove("show");
document.querySelector('.show').classList.remove("show");
}

var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
  })
  function orderSucceful(){
var modalToggle = document.getElementById('exampleModal') // relatedTarget
myModal.show(modalToggle)
setTimeout(() => {
    myModal.hide()
    let a =[]
    localStorage.setItem('localStoragebuylist',JSON.stringify(a))
    localStorage.setItem('FinalTotalByaLl',0)
    window.location.href = '../index.html'
}, 3000);
}