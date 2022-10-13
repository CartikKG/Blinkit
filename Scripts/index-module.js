import navbar from "../components/navbar.js";
import {
  cart,
  caraosual,
  productsAllwithDetails,
  DispalyAlliteminCart,
  dataforinnercartcara,
  x,
  clickLeftButton,
  clickRightButton,
  clickonaddbtn,
  subtractqty,
  increaseqty,
  always,
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
window.clickonaddbtn = clickonaddbtn;
window.subtractqty = subtractqty;
window.increaseqty = increaseqty;
document.getElementById("cartinhtm").innerHTML = cart();
document.getElementById("navbar").innerHTML = navbar(".");
currentupdate();
mylocation();
document.getElementById("logoutcurrent").addEventListener("click", logoutcur);

const addpluschangehtml = () => {
  console.log(event.target);
};
cartdiv.addEventListener("click", () => {
  cartinhtm.id = "cartinhtml";
  always();
});
document.getElementById("closeit").addEventListener("click", () => {
  document.getElementById("cartinhtml").id = "cartinhtm";
});
let flaarg = true;
document.getElementById("pngnavanimation").addEventListener("click", () => {
  if (flaarg) {
    document.getElementById("animationmen").id = "animationmenu";
    flaarg = false;
  } else {
    document.getElementById("animationmenu").id = "animationmen";
    flaarg = true;
  }
});
document.getElementById("searchnav").value = "";
document.getElementById("searchnav").addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    let searchkey = document.getElementById("searchnav").value;
    localStorage.setItem("searchkey", searchkey);
    console.log(searchkey);
    location.href = "./pages/everysearch.html";
  }
});
let micflag = true;
document.getElementById("micsearch").addEventListener("click", () => {
  if (micflag) {
    micflag = false;
    console.log("GELL");
    document.getElementById("micsearch").classList.remove = "fa-microphone";
    document.getElementById("micsearch").classList.add = "fa-microphone-slash";
    // document.getElementById("micsearch")..add("c");
  } else {
    document.getElementById("micsearch").classList.remove =
      "fa-microphone-slash";
    document.getElementById("micsearch").classList.add = "fa-microphone";
    micflag = true;
  }
});
