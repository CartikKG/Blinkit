import navbar from "../components/navbar.js";
import { cart } from "../components/cart.js";
import {
  users,
  openonclick,
  cancel,
  login,
  loginPage,
  signupPage,
  signUp,
} from "../components/signup_login.js";
// console.log(user);

document.getElementById("cartinhtm").innerHTML = cart();
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("logindiv").addEventListener("click", openonclick);

cartinhtm.addEventListener("click", () => {});
cartdiv.addEventListener("click", () => {
  cartinhtm.id = "cartinhtml";
  always();
});
closeit.addEventListener("click", () => {
  cartinhtml.id = "cartinhtm";
});

const always = () => {
  let flag = "true";
  if (flag == "true") {
    document.getElementById("incarthtmldetial").innerHTML = `
  
    <div ></div> <h2 id="Beforecheckout" >Before you checkout</h2>
    <div id="cartinUpCara" >
   
    <span id="leftforcarousel"><i class="fa-solid fa-angle-left"></i></span>
    <div id="process">
  
    <div id="carsusal">
      <div class="process-items">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391805a.jpg"
          alt=""
        />
        <h5>Vim Lemon Dishwash Bar - Pack of 1</h5>
        <p>3 x 200 g</p>
        <span
          ><p>₹32</p>
          <span class="addonchangeclick"
            ><h5 onclick="clickonaddbtn()">ADD</h5></span
          ></span
        >
      </div>
      <div class="process-items">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3889a.jpg"
          alt=""
        />
        <h5>Coriander Bunch</h5>
        <p>3 x 200 g</p>
        <span
          ><p>₹27</p>
          <span class="addonchangeclick"
            ><h5 onclick="clickonaddbtn()">ADD</h5></span
          ></span
        >
      </div>
      <div class="process-items">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391306a.jpg"
          alt=""
        />
        <h5>Onion 1 kg</h5>
        <p>1000 g</p>
        <span
          ><p>₹39</p>
          <span class="addonchangeclick"
            ><h5 onclick="clickonaddbtn()">ADD</h5></span
          ></span
        >
      </div>
      <div class="process-items">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/43a.jpg"
          alt=""
        />
        <h5>Fortune sunlight refine oil</h5>
        <p>1 Ltr.</p>
        <span
          ><p>₹125</p>
          <span class="addonchangeclick">
            <h5 onclick="clickonaddbtn()">ADD</h5></span
          ></span
        >
      </div>
      <div class="process-items">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/470636a.jpg"
          alt=""
        />
        <h5>Banana</h5>
        <p>3 Unit</p>
        <span
          ><p>₹67</p>
          <span class="addonchangeclick"
            ><h5 onclick="clickonaddbtn()">ADD</h5></span
          ></span
        >
      </div>
      <div class="process-items">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/15286a.jpg"
          alt=""
        />
        <h5>coca cola zero</h5>
        <p>1 Unit</p>
        <span
          ><p>₹25</p>
          <span class="addonchangeclick"
            ><h5 onclick="clickonaddbtn()">ADD</h5></span
          ></span
        >
      </div>
      <div class="process-items">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445396a.jpg"
          alt=""
        />
        <h5>Cauliflower ( Gobhi ) - Fresh</h5>
        <p>1kg</p>
        <span
          ><p>₹22</p>
          <span class="addonchangeclick"
            ><h5 onclick="clickonaddbtn()">ADD</h5></span
          ></span
        >
      </div>
      <div class="process-items">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/300635a.jpg"
          alt=""
        />
        <h5>Red & Yellow Capsicum</h5>
        <p>2 Unit</p>
        <span
          ><p>₹102</p>
          <span class="addonchangeclick"
            ><h5 onclick="clickonaddbtn()">ADD</h5></span
          ></span
        >
      </div>
    </div>
   

   
  </div>
 <span id="rightforcarousel"><i class="fa-solid fa-angle-right"></i></span>
 </div>
    <h3>Bill details</h3>
    <span><p> MRP</p> <p>₹165 </p> </span> 
    <span><p> Product discount </p> <p> - ₹37</p> </span> 
    <span><p>  Delivery charge </p> <p> ₹15 FREE</p> </span> 
    <span><p> Hooray! You saved ₹15 on delivery charge</p> </span> 
    <span><p>Coupoun</p> <input type="text" id=coupunencer placeholder="Enter Coupon.."> </span> 
    
    <span id="finallbill"><h6> Bill total </h6> <h6> ₹128</h6> </span> 
    <div style="background-color: white; height: 50px;width:100%" ></div>
      `;
    document
      .getElementById("leftforcarousel")
      .addEventListener("click", clickLeftButton);
    document
      .getElementById("rightforcarousel")
      .addEventListener("click", clickRightButton);

    // document.getElementById("").addEventListener("click");
    // document.getElementById("").addEventListener("click");
    document.getElementById(
      "showitemdetial"
    ).innerHTML = ` <h5><span>4</span> items</h5>
    -
    <h5><span> ₹458</span></h5>
    <h5>Proceed <i class="fa-solid fa-right-to-bracket"></i></h5>`;
  } else if (flag == "false") {
    document.getElementById(
      "incarthtmldetial"
    ).innerHTML = `<img src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png" alt="shopping">
    <h3> You don't have any items in your cart </h3> <h5>Your favourite items are just a click away</h5>
      <span id="startshopping">Start Shopping </span>
      

      
      `;
    document
      .querySelector("#incarthtmldetial>span")
      .addEventListener("click", () => {
        cartinhtml.id = "cartinhtm";
      });
  }
};

{
  /* <div id="cartinhtm">
      <div>
        <div>
          <h4>My Cart</h4>
          <i class="fa-sharp fa-solid fa-xmark" id="closeit"></i>
        </div>
        <div></div>
        <div id="showitemdetial">
         
        </div>
      </div>
    </div> */
}
// Bill details
// MRP
// ₹165
// Product discount
// - ₹37
// Delivery charge
// ₹15 FREE
// Hooray! You saved ₹15 on delivery charge
// Bill total
// ₹128
// Coupons are only applicable on the Blinkit app

// document.getElementById
let x = 0;

function clickLeftButton() {
  x++;
  if (x > 0) {
    x = -3;
  }
  document.getElementById("carsusal").style.transform = `translateX(${
    x * 25
  }%)`;
}

function clickRightButton() {
  x--;
  if (x < -3) {
    x = 0;
  }
  document.getElementById("carsusal").style.transform = `translateX(${
    x * 25
  }%)`;
}

const addpluschangehtml = () => {
  console.log(event.target);

  // document.querySelector("addonchangeclick").innerHTML = `<i class="fa-solid fa-minus"></i> <span>1  </span><i class="fa-solid fa-plus"></i>`;
};

// document
//   .querySelector(".addonchangeclick")
//   .addEventListener("click", addpluschangehtml);

function dataforinnercartcara() {
  dataforcarou.map((el, ind) => {
    let div = document.createElement("div");
    div.className = "process-items";
    div.innerHTML = `
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/43a.jpg"
          alt=""
        />
        <h5>Fortune sunlight refine oil</h5>
        <p>1 Ltr.</p>
        <span
          ><p>₹125</p>
          <span class="addonchangeclick">
            <h5 onclick="clickonaddbtn()">ADD</h5></span
          ></span
        >
      `;
  });
}
