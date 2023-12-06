import Foodmelalogo from "../../Images/Foodmela.png";
import { useState } from "react";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>Cart
          </li>
          <li>
            {/* conditional rendering for login and logout using ternary operator */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
