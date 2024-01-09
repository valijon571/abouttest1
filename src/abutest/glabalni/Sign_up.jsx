import React from "react";
import { GlabalStyle } from "./GlabalStyle";
import Header from "../lokalni/Header";

const Sign_up = () => {
  return (
    <>
      <Header />

      <GlabalStyle>
        <div class="sc-gKsecS_cwgBGk">
          <div class="registr">
            <div class="registr-items_inputs">
              <div class="d-flex_justify-content-beetwen">
                <div></div>
                <div>1/4</div>
              </div>
              <h1>Ro'yxatdan o'tish</h1>
              <form className="form1">
                <div class="input">
                  <label className="label1" for="">
                    Telefon raqam
                  </label>
                  <input
                    placeholder="Telefon raqamingiz:"
                    name="phone"
                    class="w-100_input-mask"
                    value=""
                  />
                </div>
                <button type="button" class="submit">
                  Davom ettirish
                </button>
              </form>
            </div>
          </div>
        </div>
      </GlabalStyle>
    </>
  );
};
export default Sign_up;
