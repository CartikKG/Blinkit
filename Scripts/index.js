function check() {
  let parent = event.target.parentNode;
  console.log("1" + parent);

  parent.style.background = "green";
  parent.style.color = "white";
  parent.className = "addqtybuttons";
  console.log("2" + parent);
  parent.innerHTML = `<i class="fa-solid fa-minus" onclick="subtractqty()"></i> <span id="showpresentqty">1  </span><i class="fa-solid fa-plus"  onclick="increaseqty()"></i>`;
  console.log(event.target);
}
const subtractqty = () => {
  let target = event.target.parentNode.childNodes[2];
  let amount = Number(event.target.parentNode.childNodes[2].innerHTML);
  if (amount > 1) {
    let finalamount = amount - 1;
    target.innerHTML = finalamount;
  } else {
    target.parentNode.className = "addonchangeclick";
    target.parentNode.style.background = "#ecffec";
    target.parentNode.style.color = "green";
    target.parentNode.innerHTML = ` <h5 onclick="check()">ADD</h5>`;
  }
};
const increaseqty = () => {
  let target = event.target.parentNode.childNodes[2];
  let amount = Number(event.target.parentNode.childNodes[2].innerHTML);
  let finalamount = amount + 1;
  target.innerHTML = finalamount;
  //   console.log(amount);
};
