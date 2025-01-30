import { FaSearch, FaShoppingCart, FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>GalaxyFit</h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Reviews</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
      <div className="icons">
        <FaSearch />
        <FaShoppingCart />
        <FaAlignJustify className="menuIcon" />
      </div>
    </nav>
  );
};

export default Navbar;
