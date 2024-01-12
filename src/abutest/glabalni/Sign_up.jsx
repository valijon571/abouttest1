import React from "react";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";
import { GlabalStyle } from "./GlabalStyle";
import Header from "../lokalni/Header";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";

const Sign_up = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    avatar: null,
    first_name: "",
    last_name: "",
    middle_name: "",
    birthday: "",
    gender: "",
    region: "",
    password: "",
    code: "",
  });
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   setFormData({ ...formData, [name]: files[0] });
  // };
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <Header />

      <GlabalStyle>
        {/* ==========================1=================================== */}
        {step === 1 && (
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
                    <InputMask
                      mask="+998 (nn) nnn-nn-nn"
                      placeholder="Telefon raqamingiz:"
                      name="phone"
                      class="w-100_input-mask"
                      formatChars={{
                        n: "[0-9]",
                        a: "[A-Za-z]",
                        "*": "[A-Za-z0-9]",
                      }}
                      // value=""
                    />
                  </div>
                  <button type="button" class="submit" onClick={handleNextStep}>
                    <Link>Davom ettirish</Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
        {/* ========================= 2 ================================== */}
        {step === 2 && (
          <div className="sc-gKsecS_cwgBGkk">
            <div className="registr">
              <div className="registr-items_inputs">
                <div className="d-flex_justify-content-beetwen">
                  <div className="nambr">2/4</div>
                  <h1>Ro'yxatdan o'tish</h1>
                  <form className="form2">
                    <div class="input">
                      <label class="avatar-input2" data-active="active">
                        Avatar
                        <div class="d-flex_align-items-center_justify-content-between">
                          <div>
                            <img
                              src="https://abutest.netlify.app/img/pic.png"
                              alt=""
                              // style="border-radius: 50%; margin-right: 15px;"
                            />
                          </div>
                          <span> rasm yuklash</span>
                          <label
                            for=""
                            class="avatar-input2"
                            data-active="active"
                          >
                            {" "}
                          </label>
                          <input
                            name="avatar"
                            title=""
                            type="file"
                            id="avatar"
                            class="w-100"
                            accept="image/*"
                            value=""
                          />
                        </div>
                      </label>
                    </div>
                    <div class="input">
                      <label for="">Ism</label>
                      <input
                        type="text"
                        placeholder="Ismingizni kiriting:"
                        name="first_name"
                        class="chakra-input_css-1cjy4zv"
                        value=""
                      />
                    </div>
                    <div class="input">
                      <label for="">Familya</label>
                      <input
                        type="text"
                        placeholder="Familyangiz kiriting:"
                        name="last_name"
                        class="chakra-input_css-1cjy4zv"
                        value=""
                      />
                    </div>
                    <div class="input">
                      <label for="">Otangizni ismi</label>
                      <input
                        type="text"
                        placeholder="Otangizni ismini kiriting:"
                        name="middle_name"
                        class="chakra-input_css-1cjy4zv"
                        value=""
                      />
                    </div>
                    <div class="input">
                      <label for="">Tug'ilgan kun(YYYY:MM-DD)</label>
                      <input
                        placeholder="Tug'ilgan sanangizni kiriting:"
                        name="birthday"
                        type="date"
                        class="chakra-input_css-1cjy4zv"
                        value=""
                      />
                    </div>
                    <div class="input">
                      <label for="">Jins</label>
                      <div class=" css-b62m3t-container">
                        <div class=" css-9y5qhp-control">
                          <div class=" css-1sk3oa9">
                            <div
                              class=" css-1jqq78o-placeholder"
                              id="react-select-2-placeholder"
                            >
                              {/* Jinsingizni tanlang: */}
                            </div>
                            <select
                              placeholder="Passport"
                              className="chakra-input_css-1cjy4zvo"
                            >
                              <option>Jinsingizni tanlang:</option>
                              <option>Erkak</option>
                              <option>Ayol</option>
                            </select>
                            {/* <input /> */}
                          </div>
                          {/* <div class=" css-1wy0on6">
                          <span class=" css-1uei4ir-indicatorSeparator"></span>
                          <div
                            class=" css-1kf99lf-indicatorContainer"
                            aria-hidden="true"
                          >
                            <svg
                              height="20"
                              width="20"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              class="css-8mmkcg"
                            >
                              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                            </svg>
                          </div>
                        </div> */}
                        </div>
                      </div>
                    </div>
                    <div class="input">
                      <label for="">Viloyat</label>

                      <div class=" css-b62m3t-container">
                        {/* <span
                        id="react-select-3-live-region"
                        class="css-7pg0cj-a11yText"
                      ></span>
                      <span
                        aria-live="polite"
                        aria-atomic="false"
                        aria-relevant="additions text"
                        role="log"
                        class="css-7pg0cj-a11yText"
                      ></span> */}
                        <div class=" css-9y5qhp-control">
                          <div class=" css-1sk3oa9">
                            <div
                              class=" css-1jqq78o-placeholder"
                              id="react-select-3-placeholder"
                            >
                              {/* Viloyat tanlang */}
                            </div>
                            <select
                              placeholder="Passport"
                              className="chakra-input_css-1cjy4zvo"
                            >
                              <option>Viloyat tanlang</option>
                              <option>Andijon</option>
                              <option>Buxoro</option>
                              <option>Farg'ona</option>
                              <option>Jizzax</option>
                              <option>Xorazm</option>
                              <option>Namangan</option>
                              <option>Navoiy</option>
                              <option>Qashqadaryo</option>
                              <option>Samarqand</option>
                              <option>Sirdaryo</option>
                              <option>Surxandaryo</option>
                              <option>Toshkent</option>
                            </select>
                          </div>
                          <div class=" css-1wy0on6">
                            {/* <span class=" css-1uei4ir-indicatorSeparator"></span> */}
                            <div
                              class=" css-1kf99lf-indicatorContainer"
                              aria-hidden="true"
                            >
                              {/* <svg
                              height="20"
                              width="20"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              class="css-8mmkcg"
                            >
                              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                            </svg> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="button" class="submit" onClick={handleNextStep}>
                      Davom ettirish
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* ==========================3=================================== */}
        {step === 3 && (
        <div class="sc-gKsecS_cwgBGk">
          <div class="registr">
            <div class="registr-items_inputs">
              <div class="d-flex_justify-content-beetwen">
                <div></div>
                <div>3/4</div>
              </div>
              <h1>Ro'yxatdan o'tish</h1>
              <form className="form1">
                <div class="input">
                  <label for="">Parol</label>
                  <div class="password">
                    <input
                      type="password"
                      placeholder="Parol kiriting:"
                      name="password"
                      class="w-100_input-mask"
                      value=""
                    />
                    <div className="showPassword">
                      {showPassword ? (
                        <div onClick={() => setShowPassword(false)}>
                          <BsEyeSlash />
                        </div>
                      ) : (
                        <div onClick={() => setShowPassword(true)}>
                          <AiOutlineEye onClick={() => setShowPassword(true)} />
                        </div>
                      )}
                    </div>
                    {/* <span class="react-reveal">Parol kiriting</span> */}
                    <div>
                      {/* <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <g opacity="0.5">
                          <path
                            clip-rule="evenodd"
                            d="M8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12ZM17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM12.0012 14.4124C13.3378 14.4124 14.4304 13.3264 14.4304 11.9979C14.4304 10.6597 13.3378 9.57362 12.0012 9.57362C11.8841 9.57362 11.767 9.58332 11.6597 9.60272C11.6207 10.6694 10.7426 11.5227 9.65971 11.5227H9.61093C9.58166 11.6779 9.56215 11.833 9.56215 11.9979C9.56215 13.3264 10.6548 14.4124 12.0012 14.4124Z"
                            fill="#6E7892"
                            fill-rule="evenodd"
                          ></path>
                        </g>
                      </svg> */}
                      {/* <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <g opacity="0.5">
                          <path
                            clip-rule="evenodd"
                            d="M9.80327 15.2526C10.4277 15.6759 11.1888 15.9319 11.9987 15.9319C14.1453 15.9319 15.8919 14.1696 15.8919 12.0037C15.8919 11.1866 15.6382 10.4186 15.2186 9.78855L14.1551 10.8617C14.3307 11.1964 14.4283 11.5902 14.4283 12.0037C14.4283 13.3525 13.3354 14.4551 11.9987 14.4551C11.5889 14.4551 11.1986 14.3567 10.8668 14.1795L9.80327 15.2526ZM18.4288 6.54952C19.8436 7.84907 21.0438 9.60149 21.9415 11.7083C22.0195 11.8954 22.0195 12.112 21.9415 12.2892C19.8534 17.1921 16.1358 20.1259 11.9987 20.1259H11.9889C10.1058 20.1259 8.30063 19.5056 6.71018 18.3735L4.81725 20.2834C4.67089 20.4311 4.4855 20.5 4.30011 20.5C4.11472 20.5 3.91957 20.4311 3.78297 20.2834C3.53903 20.0373 3.5 19.6435 3.69515 19.358L3.72442 19.3186L18.1556 4.75771C18.1751 4.73802 18.1946 4.71833 18.2044 4.69864L18.2044 4.69863C18.2239 4.67894 18.2434 4.65925 18.2532 4.63957L19.1704 3.71413C19.4631 3.42862 19.9217 3.42862 20.2046 3.71413C20.4974 3.99964 20.4974 4.4722 20.2046 4.75771L18.4288 6.54952ZM8.09836 12.0075C8.09836 12.2635 8.12764 12.5195 8.16667 12.7558L4.55643 16.3984C3.5807 15.2564 2.7318 13.8781 2.05854 12.293C1.98049 12.1158 1.98049 11.8992 2.05854 11.7122C4.14662 6.80933 7.86419 3.88534 11.9916 3.88534H12.0013C13.3966 3.88534 14.7529 4.22007 16.0018 4.85015L12.7429 8.13841C12.5087 8.09903 12.255 8.0695 12.0013 8.0695C9.84494 8.0695 8.09836 9.83177 8.09836 12.0075Z"
                            fill="#6E7892"
                            fill-rule="evenodd"
                          ></path>
                        </g>
                      </svg> */}
                    </div>
                  </div>
                </div>
                <button type="submit" class="submit" onClick={handleNextStep}>
                  Ro'yxatdan o'tish
                </button>
              </form>
            </div>
          </div>
        </div>
 )}
        {/* =========================4==================================== */}
        {step === 4 && (
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
                <button type="submit" class="submit" onClick={handleSubmit}>
                  Jo'natish
                </button>
              </form>
            </div>
          </div>
        </div>
         )}
      </GlabalStyle>
    </>
  );
};
export default Sign_up;
