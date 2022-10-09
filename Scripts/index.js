import navbar from "../components/navbar.js";
import { cart } from "../components/cart.js";
document.getElementById("cartinhtm").innerHTML = cart();
document.getElementById("navbar").innerHTML = navbar();

cartinhtm.addEventListener("click", () => {});
cartdiv.addEventListener("click", () => {
  cartinhtm.id = "cartinhtml";
});
closeit.addEventListener("click", () => {
  cartinhtml.id = "cartinhtm";
});

const always = () => {
  let flag = "true";
  if (flag == "true") {
    ` <h5><span>4</span> items</h5>
    -
    <h5><span> ₹458</span></h5>
    <h5>Proceed <i class="fa-solid fa-right-to-bracket"></i></h5>`;
  } else if (flag == "false") {
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
