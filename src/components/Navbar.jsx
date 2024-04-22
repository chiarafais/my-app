import React from "react";

function Navbar(props) {
  return (
    <>
      <nav>
        <ul className="NavbarUl">
          <li className="NavbarLi">{props.li1}</li>
          <li className="NavbarLi">{props.li2}</li>
          <li className="NavbarLi">{props.li3}</li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
