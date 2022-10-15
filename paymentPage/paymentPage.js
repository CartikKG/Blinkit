
document.getElementById("address-btn2").addEventListener("click", ()=>{
    let modal_container=document.getElementById("modal_container");
    modal_container.classList.add("show");
});
function cancel(){
    document.getElementById("modal_container").classList.remove("show");
}

let totalAmount=JSON.parse(localStorage.getItem("total-amount")) || 0;
document.getElementById("total-amount-value").innerText=`₹${totalAmount}`;
document.getElementById("payable-amount-value").innerText=`₹${totalAmount}`;

let cartArr=JSON.parse(localStorage.getItem("catArr")) || [];
document.getElementById("no-of-items").innerText=`${cartArr.length} items`;

cartArr.map(function(ele,index){
    let item_count=ele.quantity;
    let image=ele.image;
    let name=ele.name;
    let unit=ele.unit;
    let price=ele.price;
    document.getElementById("cart-item-container").innerHTML+=`
    <div class="checkout-cart-item">
        <div class="checkout-cart-item-count">${item_count}</div>
        <div class="checkout-cart-item-image">
            <img src="${image}" alt="">
        </div>
        <div class="checkout-cart-item-desc">
            <div class="checkout-cart-item-name">${name}</div>
            <div class="checkout-cart-item-unit">${unit}</div>
            <div>
                <span class="checkout-cart-item-price">${price}</span>
            </div>
        </div>
    </div>
    `;
});

document.getElementById("card-container").classList.add("hideanything");
document.getElementById("cash-container").classList.add("hideanything");

function payByWallet(){
    document.getElementById("wallet").classList.add("payment-method-selected");
    document.getElementById("upi").classList.remove("payment-method-selected");
    document.getElementById("card").classList.remove("payment-method-selected");
    document.getElementById("cash").classList.remove("payment-method-selected");
    document.getElementById("netbanking").classList.remove("payment-method-selected");

    document.getElementById("cash-container").classList.add("hideanything");
    document.getElementById("card-container").classList.add("hideanything");
}

function payByUpi(){
    document.getElementById("wallet").classList.remove("payment-method-selected");
    document.getElementById("upi").classList.add("payment-method-selected");
    document.getElementById("card").classList.remove("payment-method-selected");
    document.getElementById("cash").classList.remove("payment-method-selected");
    document.getElementById("netbanking").classList.remove("payment-method-selected");

    document.getElementById("cash-container").classList.add("hideanything");
    document.getElementById("card-container").classList.add("hideanything");
}

function payByCard(){
    document.getElementById("wallet").classList.remove("payment-method-selected");
    document.getElementById("upi").classList.remove("payment-method-selected");
    document.getElementById("card").classList.add("payment-method-selected");
    document.getElementById("cash").classList.remove("payment-method-selected");
    document.getElementById("netbanking").classList.remove("payment-method-selected");

    document.getElementById("cash-container").classList.add("hideanything");
    document.getElementById("card-container").classList.remove("hideanything");
}

function payByCash(){
    document.getElementById("wallet").classList.remove("payment-method-selected");
    document.getElementById("upi").classList.remove("payment-method-selected");
    document.getElementById("card").classList.remove("payment-method-selected");
    document.getElementById("cash").classList.add("payment-method-selected");
    document.getElementById("netbanking").classList.remove("payment-method-selected");

    document.getElementById("cash-container").classList.remove("hideanything");
    document.getElementById("card-container").classList.add("hideanything");
}

function payByNetbanking(){
    document.getElementById("wallet").classList.remove("payment-method-selected");
    document.getElementById("upi").classList.remove("payment-method-selected");
    document.getElementById("card").classList.remove("payment-method-selected");
    document.getElementById("cash").classList.remove("payment-method-selected");
    document.getElementById("netbanking").classList.add("payment-method-selected");

    document.getElementById("cash-container").classList.add("hideanything");
    document.getElementById("card-container").classList.add("hideanything");
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
        document.getElementById("modal_container").classList.remove("show");
    }
}

function orderPlaced(){
    let address=document.getElementById("selected-address").innerText;
    console.log(address);
    if(address==""){
        alert("Please select address first");
    }
    else{
        document.getElementById("order_placed_modal_container").classList.add("show");
    }
}
function cancelModal(){
    document.getElementById("order_placed_modal_container").classList.remove("show");
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
        document.getElementById("order_placed_modal_container").classList.add("show");
    }
}