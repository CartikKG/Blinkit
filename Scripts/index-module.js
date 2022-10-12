import navbar from "../components/navbar.js";
import {
  cart,
  caraosual,
  DispalyAlliteminCart,
  dataforinnercartcara,
  x,
  clickLeftButton,
  clickRightButton,
} from "../components/cart.js";
import {
  users,
  openonclick,
  cancel,
  login,
  loginPage,
  signupPage,
  signUp,
  currentupdate,
  logoutcur,
  mylocation,
  getReverseGeocodingData,
} from "../components/signup_login.js";

document.getElementById("cartinhtm").innerHTML = cart();
document.getElementById("navbar").innerHTML = navbar("./img/Untitled-1.jpg");
currentupdate();
mylocation();
document.getElementById("logoutcurrent").addEventListener("click", logoutcur);

cartdiv.addEventListener("click", () => {
  cartinhtm.id = "cartinhtml";
  always();
});
document.getElementById("closeit").addEventListener("click", () => {
  document.getElementById("cartinhtml").id = "cartinhtm";
});
const always = () => {
  let flag = "true";
  if (flag == "true") {
    document.getElementById("incarthtmldetial").innerHTML = `
   <div id="allitemincart" >  </div> <h2 id="Beforecheckout" >Before you checkout</h2>
    <div id="cartinUpCara" >
   <span id="leftforcarousel"><i class="fa-solid fa-angle-left"></i></span>
    <div id="process">
    <div id="carsusal">
     </div>
   </div>
 <span id="rightforcarousel"><i class="fa-solid fa-angle-right"></i></span>
 </div>
 <div id="billdetailsamount">
    <h3>Bill details</h3>
    <span><p> MRP</p> <p>₹165 </p> </span> 
    <span><p> Product discount </p> <p> - ₹37</p> </span> 
    <span><p>  Delivery charge </p> <p> ₹15 FREE</p> </span> 
    <span><p> Hooray! You saved ₹15 on delivery charge</p> </span> 
    <span><p>Coupoun</p> <input type="text" id=coupunencer placeholder="Enter Coupon.."> </span> 
    
    <span id="finallbill"><h6> Bill total </h6> <h6> ₹128</h6> </span> 
    </div>
    <div style="background-color: white; height: 50px;width:100%" ></div>
      `;
    document
      .getElementById("leftforcarousel")
      .addEventListener("click", clickLeftButton);
    document
      .getElementById("rightforcarousel")
      .addEventListener("click", clickRightButton);

    document.getElementById(
      "showitemdetial"
    ).innerHTML = ` <h5><span>4</span> items</h5>
    -
    <h5><span> ₹458</span></h5>
    <h5>Proceed <i class="fa-solid fa-right-to-bracket"></i></h5>`;
    dataforinnercartcara(caraosual);
    DispalyAlliteminCart(caraosual);
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

// let x = 0;

const addpluschangehtml = () => {
  console.log(event.target);
};
