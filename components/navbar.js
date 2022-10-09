const navbar = () => {
  return `     <img src="./img/Untitled-1.jpg" alt="logo" />
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
        <input type="text" placeholder="Search for products" />
      </div>
    </div>

    <div id="logindiv">Login</div>
    <div id="cartdiv">
      <i class="fa-solid fa-cart-shopping" id="cartanimanttion"></i>My Cart
    </div>`;
};
export default navbar;
