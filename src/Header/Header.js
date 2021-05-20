import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../ContextApiPart/Stateprovider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://lh3.googleusercontent.com/proxy/x1J8noE-C3UYRqhCxUiwJt-ZvpmWS1gRhckBvKrnXZxSkjRBdgvQ-0Ek9dfz6EjOIHRxaF6gzgk9ByRFbK5SkDrp22hJ5eyi3YrETW0RHlKJa90_-RgzV4p5MLyv69I9FF5K"
          alt="Logo"
          className="header_logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="header__option">
            <span className="header__optionOne">Hello Guest</span>

            <span className="header__optionTwo">Sign in</span>
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
