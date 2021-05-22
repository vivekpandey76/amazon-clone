import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../ContextApiPart/Stateprovider";
import { auth } from "../Main/Firebase";
import LogoEcommerce from "../LogoImage/LogoEcommerce.png";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img src={LogoEcommerce} alt="Logo" className="header_logo" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionOne">
              Hello {user ? user?.email : "Guest"}
            </span>

            <span className="header__optionTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionOne">Return</span>
          <span className="header__optionTwo">& order</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
