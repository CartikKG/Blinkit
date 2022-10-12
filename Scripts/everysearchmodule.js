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
document.getElementById("navbar").innerHTML = navbar("../img/Untitled-1.jpg");
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
