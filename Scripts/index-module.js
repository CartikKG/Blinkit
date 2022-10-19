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
  show,
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
window.clickonaddbtn = clickonaddbtn;
window.subtractqty = subtractqty;
window.increaseqty = increaseqty;
document.getElementById("cartinhtm").innerHTML = cart();
document.getElementById("navbar").innerHTML = navbar(".");
document.getElementById("footerindex").innerHTML = footerhtml(".");
currentupdate();
setTimeout(() => {
  mylocation();
}, 5000);

document.getElementById("logoutcurrent").addEventListener("click", logoutcur);

const addpluschangehtml = () => {
  // console.log(event.target);
};
cartdiv.addEventListener("click", () => {
  cartinhtm.id = "cartinhtml";
  localStorage.setItem("mycartview", "true");
  always();
});
document.getElementById("closeit").addEventListener("click", () => {
  localStorage.setItem("mycartview", "false");
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
    // console.log(searchkey);
    location.href = "./pages/everysearch.html";
  }
});

let searcgbar = true;

function debounced(fn, delay) {
  let Timeout;
  return function () {
    if (Timeout) clearTimeout(Timeout);

    Timeout = setTimeout(function () {
      searcgbar = true;
      fn();
    }, delay);
  };
}

let forsearch = () => {
  if (searcgbar) {
    const substring = document.getElementById("searchnav").value || "";
    document.getElementById("onsearchclick").style.display = "block";
    if (substring == "") {
      // console.log("dasg");
      document.getElementById(
        "onsearchclick"
      ).innerHTML = `<ul id="onsearchclickul">
      <a href="./pages/Freshvegitable.html"><li>   <img
      src="https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png"
      alt="fresh vegitables"
    /> Vegetables</li></a>
      <a href="./pages/combo.html"> <li> <img
      src="https://cdn.grofers.com/app/images/category/cms_images/icon/1503_1647320875474.png"
      alt="fresh vegitables"
    /> Combo</li></a>
      <a href="./pages/exotic.html"><li>  <img
      src="https://cdn.grofers.com/618e1f88-f860-47c2-9ec3-30411903e2f8.png"
      alt="fresh vegitables"
    />Exotic</li></a>
      <a href=./pages/flower.html"> <li>   <img
      src="https://cdn.grofers.com/app/images/category/cms_images/icon/742_1643613650040.png"
      alt="fresh vegitables"
    />Flower</li></a>
      <a href="./pages/fresh.html"><li>  <img
      src="https://cdn.grofers.com/app/images/category/cms_images/icon/928_1658840270707.png"
      alt="fresh vegitables"
    />Fresh</li></a>
      <a href="./pages/frozen.html"><li> <img
      src="https://cdn.grofers.com/app/images/category/cms_images/icon/395_1643443998974.png"
      alt="fresh vegitables"
    />Frozen</li></a>
      <a href="./pages/fruits.html"><li>  <img
      src="https://cdn.grofers.com/66acfb51-c5fe-4718-a200-61efaf773556.png"
      alt="fresh vegitables"
    />Fruits</li></a>
      <a href="./pages/leaf.html"><li>  <img
      src="https://cdn.grofers.com/app/images/category/cms_images/icon/1452_1617891490134.png"
      alt="fresh vegitables"
    />Leaf</li></a>
      <a href="./pages/organic.html"><li> <img
      src="https://cdn.grofers.com/app/images/category/cms_images/icon/157_1643443974388.png"
      alt="fresh vegitables"
    /> Organic</li></a>
    </ul>`;
    } else {
      let count = 0;
      localStorage.setItem("searchkey", substring);
      document.getElementById("onsearchclickul").innerHTML = "";
      let veg = productsAllwithDetails.map((el, indx) => {
        if (el.title.includes(substring)) {
          if (count < 9) {
            count++;

            let li = document.createElement("a");
            li.href = "./pages/everysearch.html";
            li.innerHTML = `<li>   <img 
            src=${el.image}
            alt="fresh vegitables"
          /> ${el.title}</li>`;
            document.getElementById("onsearchclickul").append(li);
          }
        }
      });

      if (count == 0) {
        let li = document.createElement("li");
        li.innerHTML = ` Sorry Not Found - ${substring}`;
        document.getElementById("onsearchclickul").append(li);
      }
    }

    searcgbar = false;
  } else {
    document.getElementById("onsearchclick").style.display = "none";
    searcgbar = true;
  }
};
document.getElementById("searchnav").addEventListener("click", forsearch);
document
  .getElementById("searchnav")
  .addEventListener("input", debounced(forsearch, 500));
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
      searcgbar = true;
      forsearch();
    }
  }
}

let mrpp = 0;
let localStoragebuylisst =
  JSON.parse(localStorage.getItem("localStoragebuylist")) || [];
if (localStoragebuylisst.length != 0) {
  localStoragebuylisst.map((el, inds) => {
    let repww = Number(el.price.replace("₹", ""));
    repww *= el.currentQty;
    mrpp += repww;
  });
  document.getElementById("cartdiv").style.display = "flex";
  document.getElementById("cartdiv").style.padding = "4px 17px";
  document.getElementById(
    "cartdiv"
  ).innerHTML = ` <i class="fa-solid fa-cart-shopping" id="cartanimanttion"></i><span style="display:flex; flex-direction: column;" > ${
    localStoragebuylisst.length
  } items <p> ₹${Number(mrpp) - 11} </p> </span>`;
}
document.getElementById("micsearch").addEventListener("click", micBtnClick);
recognition.addEventListener("start", startSpeechRecognition);
recognition.addEventListener("end", endSpeechRecognition);
