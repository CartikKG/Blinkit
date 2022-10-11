import navbar from "../components/navbar.js";
import { cart } from "../components/cart.js";
document.getElementById("cartinhtm").innerHTML = cart();
document.getElementById("navbar").innerHTML = navbar();