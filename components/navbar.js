const navbar = (src, src1) => {
  return ` <a href=${src1}>   <img src=${src} alt="logo" /></a> 
    <div id="foraddressdiv">
      <h3>Delivery in Sometimes</h3>
      <h5>
        Your address will show here <i class="fa-solid fa-caret-down"></i>
      </h5>
    </div>

    <div id="navbar-search">
      <div class="input-group">
        <div type="submit">
          <i class="glyphicon glyphicon-search"></i>
        </div>
        <input type="search" placeholder="Search for products" />
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
    </div>`;
};
export default navbar;
