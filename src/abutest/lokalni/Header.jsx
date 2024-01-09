import React from "react";
import { Link } from "react-router-dom";
import { AboutStyle } from "../AboutStyle";
const Header = () => {
  return (
    <>
      <AboutStyle>
        <div className="container">
          <div class="sc-bdfCDU_gaNVMT">
            {/* <div class="header"> */}
            <div class="header_items">
              <Link class="logo" to="/">
                abutest
              </Link>
              <ul>
                <li>
                  <Link to="/kirsh">Kirish</Link>
                </li>
                <span>/</span>
                <li>
                  <Link to="/royhat">Ro'yxatdan o'tish</Link>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </div>
        </div>
      </AboutStyle>
    </>
  );
};
export default Header;
