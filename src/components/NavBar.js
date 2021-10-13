import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  /* display an <a> tag for each link here */
  return <nav>
    <a href='#home'>home</a>
    <a href='#about'>about</a>
    <a href='#projects'>projects</a>
  </nav>;
}

export default NavBar;
