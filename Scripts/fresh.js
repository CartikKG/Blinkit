const veg =[
    {
      "product__wrapper href": "https://blinkit.com/prn/green-moong-sprouts/prid/445281",
      "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445281a.jpg",
      "tag": "12%\nOFF",
      "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445281a.jpg",
      "title": "Green Moong Sprouts",
      "weight": "150 g - 160 g",
      "price": "₹42",
      "markprice": "₹48"
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/mixed-sprouts/prid/196281",
      "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/196281a.jpg",
      "tag": "13%\nOFF",
      "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/196281a.jpg",
      "title": "Mixed Sprouts",
      "weight": "200 g",
      "price": "₹69",
      "markprice": "₹80"
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/brown-chana-sprouts/prid/445280",
      "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445280a.jpg",
      "tag": "12%\nOFF",
      "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445280a.jpg",
      "title": "Brown Chana Sprouts",
      "weight": "150 g - 160 g",
      "price": "₹42",
      "markprice": "₹48"
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/salad-box-hydroponically-grown/prid/450730",
      "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450730a.jpg",
      "tag": "19%\nOFF",
      "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450730a.jpg",
      "title": "Salad Box - Hydroponically Grown",
      "weight": "1 box",
      "price": "₹110",
      "markprice": "₹136"
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/hearty-autumn-leafy-mix-hydroponically-grown/prid/370359",
      "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/370359a.jpg",
      "tag": "",
      "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/370359a.jpg",
      "title": "Hearty Autumn Leafy Mix - Hydroponically Grown",
      "weight": "125 g - 150 g",
      "price": "₹125",
      "markprice": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/spicy-summer-leafy-mix-hydroponically-grown/prid/347551",
      "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/347551a.jpg",
      "tag": "",
      "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/347551a.jpg",
      "title": "Spicy Summer Leafy Mix - Hydroponically Grown",
      "weight": "125 g - 150 g",
      "price": "₹125",
      "markprice": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/sprouts-combo/prid/487716",
      "ProductTagstyles__Container-sc-1pmr8q3-0": "",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487716.jpg",
      "tag": "13%\nOFF",
      "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487716.jpg",
      "title": "Sprouts Combo",
      "weight": "Combo of 2",
      "price": "₹83",
      "markprice": "₹96"
    }
  ] 
  
  function display(){
      document.getElementById("result").innerHTML= "";
      veg.map(function(ele){
         
  
  let temp = `<div class="inDiv">
  <p class="a-tag">${ele.tag}</p>
  <img src="${ele.image}">
  
  <div class="adjustpara">
  <div class="name-a">${ele.title}</div>
  <span>${ele.weight}</span>
  <div class="pricediv">
  <div>
  <p>${ele.price}</p>
  <p>${ele.markprice}</p>
  </div>
  
  
  <span class="addonchangeclick"><h5 onclick="clickonaddbtn('${ele.title}')">
  ADD</h5></span>
  
  
  </div>
  </div>
  
  </div>
  `
  let div = document.createElement("div");
  div.setAttribute("class","a-box");
  div.innerHTML=temp;
  let result = document.getElementById("result");
  result.append(div) ;
  })
  }
  
  display();
  
  
  
  // _________sorting_____________________
  
  function sorting(){
      var selected = document.getElementById("sort").value;
     
      console.log(selected);
      if(selected === "Relevance"){
        display(veg);
      }
      if(selected === "Price (Low to high)"){
          veg.sort(function (a,b){
              if(a.price>b.price) return 1;
              if(a.price<b.price) return -1;
              return 0;
  
          });
          display(veg);
      }
      if(selected === "Price (High to low)"){
          veg.sort(function (a,b){
              if(a.price>b.price) return -1;
              if(a.price<b.price) return 1;
              return 0;
              
  
          });
          display(veg);
      }
      if(selected === "Discount (High to low)"){
          veg.sort(function (a,b){
              if(a.tag>b.tag) return -1;
              if(a.tag<b.tag) return 1;
              return 0;
              
  
          });
          display(veg);
      }
      if(selected === "Name (A to Z)"){
          veg.sort(function (a,b){
              if(a.title<b.title) return -1;
              if(a.title>b.title) return 1;
              return 0;
              
  
          });
          display(veg);
      }
  }
  
  
  function clickonaddbtn(unq) {
      console.log(unq);
      let parent = event.target.parentNode;
      // console.log("1" + parent);
    
      parent.style.background = "green";
      parent.style.color = "white";
      parent.className = "addqtybuttons";
      // console.log("2" + parent);
      parent.innerHTML = `<i class="fa-solid fa-minus" onclick="subtractqty('${unq}')"></i> <span id="showpresentqty">1  </span><i class="fa-solid fa-plus"  onclick="increaseqty('${unq}')"></i>`;
      // console.log(event.target);
    }
    const subtractqty = (unq) => {
      let target = event.target.parentNode.childNodes[2];
      let amount = Number(event.target.parentNode.childNodes[2].innerHTML);
      if (amount > 1) {
        let finalamount = amount - 1;
        target.innerHTML = finalamount;
      } else {
        target.parentNode.className = "addonchangeclick";
        target.parentNode.style.background = "#ecffec";
        target.parentNode.style.color = "green";
        target.parentNode.innerHTML = ` <h5 onclick="clickonaddbtn('${unq}')">ADD</h5>`;
      }
    };
    const increaseqty = (unq) => {
      let target = event.target.parentNode.childNodes[2];
      let amount = Number(event.target.parentNode.childNodes[2].innerHTML);
      let finalamount = amount + 1;
      target.innerHTML = finalamount;
      //   console.log(amount);
    };
  
  // sorting();