
import Foodmelalogo from "../../Images/Foodmela.png";

// Title component for display logo
const Title = () => (
    <a href="/">
      <img className="logo" src={Foodmelalogo} alt="Food Mela Logo"></img>
    </a>
  );

  // Header component for header section: Logo, Nav Items
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

  export default Header;