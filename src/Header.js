import React from "react";
import "./header.css";
import logo from "./images/amazon_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="header_logo" />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">Hello Guest</span>
          <span className="header__optionTwo">Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">Return</span>
          <span className="header__optionTwo">& order</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
      </div>

      <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__basketCount">0</span>
      </div>
    </div>
  );
}

export default Header;
