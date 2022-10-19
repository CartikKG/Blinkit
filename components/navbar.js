const navbar = (src) => {
  return ` <a href="${src}/index.html">   <img src="${src}/img/Untitled-1.jpg" alt="logo" /></a> 
    <div id="foraddressdiv">
      <h3>Delivery in your city -</h3>
      <h5 id="currentcity">
       Allow Location & Reload  <i class="fa-solid fa-caret-down"></i>
      </h5>
    </div>

    <div id="navbar-search">
      <div class="input-grouppp">
        <div type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
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
        <div id="onsearchclick">
      <ul id="onsearchclickul">
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
        <a href="./pages/flower.html"> <li>   <img
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
      </ul>
      </div>
      </div>
     
    </div>
 
    <div id="logindiv"   >Login</div>
    <div id="cartdiv">
     <span> <i class="fa-solid fa-cart-shopping" id="cartanimanttion"></i>My Cart</span>
 
    </div>
    <div id="logoutdiv">
     <a  href="${src}/pages/edit.html" ><span> My Account</span></a>
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
