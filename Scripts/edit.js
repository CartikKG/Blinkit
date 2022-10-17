document.querySelector("#ok").addEventListener("click", submitdata);

let dataa = JSON.parse(localStorage.getItem("users")) || [];

let curname = localStorage.getItem("username") || [];
dataa.map((el, en) => {
  if (el.name == curname) {
    document.getElementById("name").value = el.name;
    document.getElementById("email").value = el.email;
    document.getElementById("password").value = el.password;
  }
});

function submitdata() {
  //   console.log();
  let name = document.getElementById("name").value;
  //   let password = document.getElementById("password").value;
  //   let email = document.getElementById("email").value;
  dataa.map((el, en) => {
    if (el.name == curname) {
      el.email = document.getElementById("email").value;
      el.password = document.getElementById("password").value;
      el.name = document.getElementById("name").value;
    }
  });
  localStorage.setItem("username", name);
  localStorage.setItem("users", JSON.stringify(dataa));
}
