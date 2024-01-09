import React from "react";
import { GlabalStyle } from "../glabalni/GlabalStyle";
import Header from "../lokalni/Header";

const Royhat3 = () => {
  return (
    <>
      <Header />

      <GlabalStyle>
        <div class="sc-gKsecS_cwgBGk">
          <div class="registr">
            <div class="registr-items_inputs">
              <div class="css-p5dvk7">
                <div
                //   aria-valuemax="100"
                //   aria-valuemin="0"
                //   aria-valuenow="66"
                //   role="progressbar"
                //   class="css-1nsw7s9"
                //   style="width: 66%;"
                ></div>
              </div>
              <div class="d-flex_justify-content-beetwen">
                <div></div>
                <div>4/4</div>
              </div>
              <h1>Ro'yxatdan o'tish</h1>
              <form className="form1">
                <div class="input-items">
                  <div class="input">
                    <label for="">Kodni kiriting</label>
                    <input
                      type="number"
                      class="w-100_input-mask"
                      placeholder="code:"
                      name="code"
                      value=""
                    />
                  </div>
                </div>
                <button type="submit" class="submit">
                  Jo'natish
                </button>
              </form>
            </div>
          </div>
        </div>
      </GlabalStyle>
    </>
  );
};
export default Royhat3;
