import React from "react";
import InputMask from "react-input-mask";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { GlabalStyle } from "./GlabalStyle";
import Header from "../lokalni/Header";

const Exordial = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />
      <GlabalStyle>
        <div className="sc-gsDLol_fYmAhb">
          <div class="container_py-5">
            <div class="sc-gKsecS_cwgBGk">
              <div class="registr">
                <div class="registr-items_inputs">
                  <h1 class="text-center_mb-4">Kirish</h1>
                  <form>
                    <div class="input">
                      <label for="">Telefon raqam</label>
                      <br />
                      <InputMask
                        mask="+998 (nn) nnn-nn-nn"
                        placeholder="Raqamingizni kiriting:"
                        name="phone"
                        formatChars={{
                          n: "[0-9]",
                          a: "[A-Za-z]",
                          "*": "[A-Za-z0-9]",
                        }}
                        class="w-100_input-mask"
                      />
                    </div>
                    <div class="input">
                      <div class="d-flex">
                        <label for="">Parol</label>
                        <span>
                          <a href="/reset-password">Parolni unutdingizmi</a>
                        </span>
                      </div>
                      <div class="password">
                        <input
                          type="password"
                          placeholder="Parol kiriting:"
                          name="password"
                          class="w-100"
                        />
                        <div className="showPassword">
                          {showPassword ? (
                            <div onClick={() => setShowPassword(false)}>
                              <BsEyeSlash />
                            </div>
                          ) : (
                            <div onClick={() => setShowPassword(true)}>
                              <AiOutlineEye
                                onClick={() => setShowPassword(true)}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <button type="text" class="submit">
                      Kirish
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlabalStyle>
    </>
  );
};
export default Exordial;
