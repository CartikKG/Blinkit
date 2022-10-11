const cart = () => {
  return ` 
  <div>
    <div id="mycartheading">
      <h4>My Cart</h4>
      <i class="fa-sharp fa-solid fa-xmark" id="closeit"></i>
    </div>
    <div id="incarthtmldetial"></div>
    <div id="showitemdetial">
     
    </div>
  </div>
 `;
};

let caraosual = [
  {
    "product__wrapper href":
      "https://blinkit.com/prn/mixed-capsicum-combo/prid/487721",
    tag: "20%\nOFF",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487721.jpg",
    title: "Mixed Capsicum Combo",
    weidth: "Combo of 3",
    price: "₹144",
    markprice: "₹182",
    "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
    "AddToCart__OutOfStockTag-sc-17ig0e3-2": "",
  },
  {
    "product__wrapper href":
      "https://blinkit.com/prn/potato-organically-grown/prid/333427",
    "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/333427a.jpg",
    tag: "16%\nOFF",
    "sc-iBkjds src":
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/333427a.jpg",
    "etaTag-text 2": "8 mins",
    title: "Potato - Organically Grown",
    weidth: "1 kg",
    price: "₹64",
    markprice: "₹77",
    "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
    "AddToCart__OutOfStockTag-sc-17ig0e3-2": "",
  },
  {
    tag: "14% OFF",
    para: "🍃Sourced at 5 AM",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3881a.jpg",
    title: "Hybrid Tomato (Tamatar)",
    weidth: "500g",
    price: "₹30",
    markprice: "₹35",
  },
  {
    "product__wrapper href": "https://blinkit.com/prn/broccoli/prid/369742",
    "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/369742a.jpg",
    tag: "13%\nOFF",
    "sc-iBkjds src":
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/369742a.jpg",
    "etaTag-text 2": "8 mins",
    title: "Broccoli",
    weidth: "1 piece (300 g - 400 g)",
    price: "₹205",
    markprice: "₹237",
  },
  {
    "product__wrapper href": "https://blinkit.com/prn/red-capsicum/prid/39394",
    "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39394a.jpg",
    tag: "19%\nOFF",
    "sc-iBkjds src":
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39394a.jpg",
    "etaTag-text 2": "8 mins",
    title: "Red Capsicum",
    weidth: "1 piece (125 g - 175 g)",
    price: "₹46",
    markprice: "₹57",
  },
  {
    "product__wrapper href":
      "https://blinkit.com/prn/yellow-red-capsicum-combo/prid/487715",
    tag: "21%\nOFF",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487715.jpg",
    title: "Yellow + Red Capsicum Combo",
    weidth: "Combo of 2",
    price: "₹100",
    markprice: "₹127",
    "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
    "AddToCart__OutOfStockTag-sc-17ig0e3-2": "",
  },
  {
    "product__wrapper href":
      "https://blinkit.com/prn/green-cucumber-organically-grown-kheera/prid/467649",
    "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467649a.jpg",
    tag: "15%\nOFF",
    "sc-iBkjds src":
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467649a.jpg",
    "etaTag-text 2": "8 mins",
    title: "Green Cucumber - Organically grown (Kheera)",
    weidth: "500 g",
    price: "₹65",
    markprice: "₹77",
    "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
    "AddToCart__OutOfStockTag-sc-17ig0e3-2": "",
  },
  {
    "product__wrapper href":
      "https://blinkit.com/prn/green-capsicum-pack-of-2/prid/488116",
    tag: "20%\nOFF",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/488116a.jpg",
    title: "Green Capsicum - Pack of 2",
    weidth: "2 x 250 g - 280 g",
    price: "₹87",
    markprice: "₹110",
    "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
    "AddToCart__OutOfStockTag-sc-17ig0e3-2": "",
  },
];
function dataforinnercartcara(dataforcarou) {
  dataforcarou.map((el, ind) => {
    let div = document.createElement("div");
    div.className = "process-items";
    div.innerHTML = `
  
    <img
      src=${el.image}
      alt=""
    />
   
    <h5>${el.title}</h5>
    <p>${el.weidth}</p>
    <span
      ><p>${el.price}</p>
      <span class="addonchangeclick"
        ><h5 onclick="clickonaddbtn('${el.title}')">ADD</h5></span
      ></span
    >
    
  
      `;
    document.getElementById("carsusal").append(div);
  });
}
const DispalyAlliteminCart = (data) => {
  data.map((el, inde) => {
    let div = document.createElement("div");

    div.innerHTML = `
    <img
      src=${el.image}
      alt=""
    />
    <span>
    <h5>${el.title}</h5>
    <p>${el.weidth}</p>
    <span
      ><p>${el.price}</p>
      <span class="addonchangeclick"
        ><h5 onclick="clickonaddbtn('${el.title}')">ADD</h5></span
      ></span
    >
    </span>
 `;
    document.getElementById("allitemincart").append(div);
  });
};

let x = 0;

function clickLeftButton() {
  x++;
  if (x > 0) {
    x = -3;
  }
  document.getElementById("carsusal").style.transform = `translateX(${
    x * 25
  }%)`;
}

function clickRightButton() {
  x--;
  if (x < -3) {
    x = 0;
  }
  document.getElementById("carsusal").style.transform = `translateX(${
    x * 25
  }%)`;
}

export {
  cart,
  caraosual,
  DispalyAlliteminCart,
  dataforinnercartcara,
  x,
  clickLeftButton,
  clickRightButton,
};
