import React from "react";

import "./Header.scss";

function Header(props) {
  return (
    <header>
      <h1 className="header__title">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
        <span>Lizard</span>
        <span>Spock</span>
      </h1>
    </header>
  );
}

export default Header;
