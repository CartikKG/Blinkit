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
import { footerhtml } from "../components/footer.js";
// window.sorting = sorting;
window.clickonaddbtn = clickonaddbtn;
window.subtractqty = subtractqty;
window.increaseqty = increaseqty;
document.getElementById("cartinhtm").innerHTML = cart();
document.getElementById("navbar").innerHTML = navbar("..");
document.getElementById("footerindex").innerHTML = footerhtml("..");
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
    location.href = "../pages/everysearch.html";
  }
});
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = true;
let micflag = true;

let searchFormInput = document.querySelector("#searchnav");
function micBtnClick() {
  if (micflag) {
    // console.log("hello");
    recognition.start();
  } else {
    // console.log("n0-hello");
    recognition.stop();
  }
}
function startSpeechRecognition() {
  // console.log("start");
  document.getElementById("micsearch").className = "fas fa-microphone";
  micflag = false;
  // searchFormInput.focus();
  console.log("Voice activated, SPEAK");
  recognition.addEventListener("result", resultOfSpeechRecognition);
}

function endSpeechRecognition() {
  micflag = true;

  document.getElementById("micsearch").className = "fas fa-microphone-slash ";
  searchFormInput.focus();
  console.log("Speech recognition service disconnected");
}
function resultOfSpeechRecognition(event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;

  if (transcript.toLowerCase().trim() === "stop recording") {
    recognition.stop();
  } else if (!searchFormInput.value) {
    searchFormInput.value = transcript;
  } else {
    if (transcript.toLowerCase().trim() === "go") {
      searchForm.submit();
    } else if (transcript.toLowerCase().trim() === "reset input") {
      searchFormInput.value = "";
    } else {
      searchFormInput.value = transcript;
    }
  }
}
document.getElementById("micsearch").addEventListener("click", micBtnClick);
recognition.addEventListener("start", startSpeechRecognition);
recognition.addEventListener("end", endSpeechRecognition);
