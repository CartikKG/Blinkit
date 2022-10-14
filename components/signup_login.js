let users = JSON.parse(localStorage.getItem("users")) || [];
// document.getElementById("openlogin").addEventListener("click",
const openonclick = () => {
  let modal_container = document.getElementById("modal_container");
  modal_container.innerHTML = `
    <div id="modals">
            <div id="cancelBox">
            <div><button  id="cancelmodal">&#215;</button></div>
            </div>
            <h2>LOGIN</h2>
            <div id="input_coonntainer">
                <p>Email</p>
                <input type="text" placeholder="Enter email" id="email" class="input">
                <p>Password</p>
                <input type="password" placeholder="Enter password" id="password" class="input">
            </div>
            <button  id="loginbtn">Login</button>
            <p>Don't have an account? </p><button  id="signupPage">Sign Up</button>
        </div>
    `;

  modal_container.classList.add("show");
  document.getElementById("cancelmodal").addEventListener("click", cancel);
  document.getElementById("loginbtn").addEventListener("click", login);
  document.getElementById("signupPage").addEventListener("click", signupPage);
  document.getElementById("signupPage").addEventListener("click", signupPage);
};

function cancel() {
  document.getElementById("modal_container").classList.remove("show");
  // console.log("cancel!");
}

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email === "" || password === "") {
    alert("Please fill all the fields!");
  } else {
    let flag = false;
    for (let i = 0; i < users.length; i++) {
      if (email === users[i].email && password === users[i].password) {
        flag = true;
        localStorage.setItem("Loginflag", "true");
        localStorage.setItem("username", users[i].name);
        alert("Logged In Successfully!");
        document.getElementById("modal_container").classList.remove("show");
        location.reload();
        break;
      }
    }
    if (flag === false) {
      alert("Wrong credentials entered!");
    }
  }
}

function loginPage() {
  document.getElementById("modal_container").innerHTML = `
    <div id="modals">
    <div id="cancelBox">
        <div><button  id="cancelmodal">&#215;</button></div>
        </div>
        <h2>LOGIN</h2>
        <div id="input_coonntainer">
            <p>Email</p>
            <input type="text" placeholder="Enter email" id="email" class="input">
            <p>Password</p>
            <input type="password" placeholder="Enter password" id="password" class="input">
        </div>
        <button  id="loginbtn">Login</button>
        <p>Don't have an account? </p><button id="signupPage">Sign Up</button>
    </div>
    `;
  document.getElementById("cancelmodal").addEventListener("click", cancel);
  document.getElementById("loginbtn").addEventListener("click", login);
  document.getElementById("signupPage").addEventListener("click", signupPage);
}

function signupPage() {
  document.getElementById("modal_container").innerHTML = `
    <div id="modals">
        <div id="cancelBox">
        <div><button id="cancelmodal">&#215;</button></div>
        </div>
        <h2>SIGN UP</h2>
        <div id="input_coonntainer">
            <p>Name</p>
            <input type="text" placeholder="Enter your full name" id="name" class="input">
            <p>Email</p>
            <input type="text" placeholder="Enter email" id="email" class="input">
            <p>Password</p>
            <input type="password" placeholder="Enter password" id="password" class="input">
        </div>
        <button  id="signuppp">Sign Up</button>
        <p>Already have an account? </p><button  id="loginPage">Login</button>
    </div>
    `;
  // console.log("SignUp Clicked!");
  document.getElementById("cancelmodal").addEventListener("click", cancel);
  document.getElementById("signuppp").addEventListener("click", signUp);
  document.getElementById("loginPage").addEventListener("click", loginPage);
}

function signUp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (name === "" || email === "" || password === "") {
    alert("Please fill all the fields!");
  } else {
    let userObj = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    let flag = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === userObj.email) {
        flag = true;
        break;
      }
    }
    if (flag === true) {
      alert("This email is already exist!");
    } else {
      users.push(userObj);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Signed Up Successfully!");
      document.getElementById("modal_container").innerHTML = `
            <div id="modals">
                <div id="cancelBox">
                <div><button id="cancelmodal">&#215;</button></div>
                </div>
                <h2>LOGIN</h2>
                <div id="input_coonntainer">
                    <p>Email</p>
                    <input type="text" placeholder="Enter email" id="email" class="input">
                    <p>Password</p>
                    <input type="password" placeholder="Enter password" id="password" class="input">
                </div>
                <button  id="loginbtn">Login</button>
                <p>Don't have an account? </p><button id="signupPage">Sign Up</button>
            </div>
            `;
      document.getElementById("cancelmodal").addEventListener("click", cancel);
      document.getElementById("loginbtn").addEventListener("click", login);
      document
        .getElementById("signupPage")
        .addEventListener("click", signupPage);
    }
  }
}

const currentupdate = () => {
  let flag = localStorage.getItem("Loginflag") || "false";
  let name = localStorage.getItem("username") || "";
  if (flag == "true") {
    document.getElementById("logoutdiv").style.display = "none";
    document.getElementById("logindiv").innerHTML = `
     Hello, ${name}  <i class="fa-solid fa-caret-down"></i>
    `;
    let flag = true;
    document.getElementById("logindiv").addEventListener("click", () => {
      if (flag) {
        document.getElementById("logoutdiv").style.display = "flex";
        flag = false;
      } else {
        document.getElementById("logoutdiv").style.display = "none";
        flag = true;
      }
    });
  } else if (flag == "false") {
    document.getElementById("logoutdiv").style.display = "none";
    document.getElementById("logindiv").style.right = "0%";
    document.getElementById("logindiv").innerHTML = `
    LOGIN
   `;
    document.getElementById("logindiv").addEventListener("click", openonclick);
  }
};
const logoutcur = () => {
  localStorage.setItem("username", "");
  localStorage.setItem("Loginflag", "false");
  // currentupdate();
  location.reload();
};

function mylocation() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);

    // getdatabycurrent();
    getReverseGeocodingData(crd.latitude, crd.longitude);
  }

  function error(err) {
    // alert("Please Allow Location and Reload Page");
    // console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}
function getReverseGeocodingData(lat, lon) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0e13cf00fef1bfec8244a88bd982e5c6&units=metric`;
  async function promisee(res, rej) {
    try {
      let ans = await fetch(url);
      let ans1 = await ans.json();
      // console.log(ans1);
      // console.log();
      document.getElementById(
        "currentcity"
      ).innerHTML = ` Your Current City <b> ${ans1.name} </b> <i class="fa-solid fa-caret-down">`;
    } catch (error) {}
  }
  promisee();
}

export {
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
};
