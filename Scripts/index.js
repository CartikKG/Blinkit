import navbar from "../components/navbar.js";
import { cart } from "../components/cart.js";
document.getElementById("cartinhtm").innerHTML = cart();
document.getElementById("navbar").innerHTML = navbar();

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

    <h3>Bill details</h3>
    <span><p> MRP</p> <p>₹165 </p> </span> 
    <span><p> Product discount </p> <p> - ₹37</p> </span> 
    <span><p>  Delivery charge </p> <p> ₹15 FREE</p> </span> 
    <span><p> Hooray! You saved ₹15 on delivery charge</p> </span> 
    <span><p>Coupoun</p> <input type="text" id=coupunencer placeholder="Enter Coupon.."> </span> 
    
    <span id="finallbill"><h6> Bill total </h6> <h6> ₹128</h6> </span> 
      `;

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
