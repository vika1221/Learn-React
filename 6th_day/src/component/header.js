import Foodmelalogo from "../../Images/Foodmela.png";
import { useState } from "react";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={Foodmelalogo} alt="Food Mela Logo"></img>
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>Cart
          </li>
          <li>
            {/* conditional rendering for login and logout using ternary operator */}
            {isLoggedin ? (
              <button className="logout-btn" onClick={() => setIsLoggedin(false)}>Logout</button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
