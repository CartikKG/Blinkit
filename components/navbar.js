const navbar = (src) => {
  return ` <a href="${src}/index.html">   <img src="${src}/img/Untitled-1.jpg" alt="logo" /></a> 
    <div id="foraddressdiv">
      <h3>Delivery in your city -</h3>
      <h5 id="currentcity">
       City  <i class="fa-solid fa-caret-down"></i>
      </h5>
    </div>

    <div id="navbar-search">
      <div class="input-group">
        <div type="submit">
          <i class="glyphicon glyphicon-search"></i>
        </div>
       
        <input id="searchnav" type="search" placeholder="Search for products"    autocomplete="off"
        autofocus />
      
        <i id="micsearch" style="    position: relative;
        margin-right: 10px;
        right: 30px;
        top: 23px;
        height: 19px;
        color="grey"
        " class="fas fa-microphone-slash"></i>
       
      </div>
    </div>

    <div id="logindiv"   >Login</div>
    <div id="cartdiv">
     <span> <i class="fa-solid fa-cart-shopping" id="cartanimanttion"></i>My Cart</span>
      <i class="fa-solid fa-right-to-bracket" id="gotocartpage"></i>
    </div>
    <div id="logoutdiv">
      <span>My Account</span>
      <span>Location</span>
      <span id="logoutcurrent">Logout</span>
    </div>
    <img
    id="pngnavanimation"
    src="https://i.pinimg.com/originals/54/de/91/54de91c58df367974665ce46b95ad6d8.gif"
    alt=""
  />
  <div id="animationmen">
  <ul>
    <a href="${src}/pages/Freshvegitable.html"><li>Vegetables</li></a>
    <a href="${src}/pages/combo.html"> <li>Combo</li></a>
    <a href="${src}/pages/exotic.html"><li>Exotic</li></a>
    <a href="${src}/pages/flower.html"> <li>Flower</li></a>
    <a href="${src}/pages/fresh.html"><li>Fresh</li></a>
    <a href="${src}/pages/frozen.html"><li>Frozen</li></a>
    <a href="${src}/pages/fruits.html"><li>Fruits</li></a>
    <a href="${src}/pages/leaf.html"><li>Leaf</li></a>
    <a href="${src}/pages/organic.html"><li>Organic</li></a>
  </ul>
</div>`;
};
export default navbar;
