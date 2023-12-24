import React from "react";
import { AboutStyle } from "../AboutStyle";
const Header = () => {
  return (
    <>
      <AboutStyle>
        <div className="container">
          <div class="sc-bdfCDU_gaNVMT">
            {/* <div class="header"> */}
            <div class="header_items">
              <a class="logo" href="/">
                abutest
              </a>
              <ul>
                <li>
                  <a href="/login">Kirish</a>
                </li>
                <span>/</span>
                <li>
                  <a href="/sign-up">Ro'yxatdan o'tish</a>
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
