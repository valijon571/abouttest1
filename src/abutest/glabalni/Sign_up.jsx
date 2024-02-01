import React from "react";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";
import axios from "axios";
import { GlabalStyle } from "./GlabalStyle";
import Header from "../lokalni/Header";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";

const Sign_up = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    phone: false,
    avatar: false,
    first_name: false,
    last_name: false,
    middle_name: false,
    birthday: false,
    gender: false,
    region: false,
    password: false,
    code: false,
  });
  // const [formData, setFormData] = useState({
  //   phone: "",
  //   avatar: null,
  //   first_name: "",
  //   last_name: "",
  //   middle_name: "",
  //   birthday: "",
  //   gender: "",
  //   region: "",
  //   password: "",
  //   code: "",
  // });
  const [obj, setObj] = useState({
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
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic (e.g., API call)
  //   console.log("Form submitted:", formData);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let t = true,
      err = {};
    if (!obj.phone) {
      t = false;
      err = { ...err, phone: true };
    }
    if (!obj.avatar) {
      t = false;
      err = { ...err, avatar: true };
    }
    if (!obj.first_name) {
      t = false;
      err = { ...err, first_name: true };
    }
    if (!obj.last_name) {
      t = false;
      err = { ...err, last_name: true };
    }
    if (!obj.middle_name) {
      t = false;
      err = { ...err, middle_name: true };
    }
    if (!obj.birthday) {
      t = false;
      err = { ...err, birthday: true };
    }
    if (!obj.gender) {
      t = false;
      err = { ...err, gender: true };
    }
    if (!obj.region) {
      t = false;
      err = { ...err, region: true };
    }
    if (!obj.password) {
      t = false;
      err = { ...err, password: true };
    }
    if (!obj.code) {
      t = false;
      err = { ...err, code: true };
    }
    if (t) {
      axios
        .post("https://api.abutest.uz/api/v1/account/register/?lan=uz", {
          // phone: obj.phone,
          // password: obj.password,
          // first_name: obj.first_name,
          // last_name: obj.last_name,
          // gender: obj.gender,
          // birthday: obj.birthday,
          // middle_name: obj.middle_name,
          // address: obj.address,
        })
        .then((r) => {})
        .catch((e) => {})
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setErrors(err);
    }
  };

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
                <form className="form1" handleSubmit={handleSubmit}>
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
                      value={obj?.phone}
                      onChange={(e) => {
                        setObj({ ...obj, phone: e.target.value });
                        setErrors({ ...errors, phone: false });
                      }}
                      // value=""
                    />
                    {errors?.phone ? (
                      <div style={{ color: "red" }}>Tel nomer kiriting!</div>
                    ) : null}
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
                  <form className="form2" handleSubmit={handleSubmit}>
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
                          ></label>
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
                        value={obj?.first_name}
                        onChange={(e) => {
                          setObj({ ...obj, first_name: e.target.value });
                          setErrors({ ...errors, first_name: false });
                        }}
                      />
                      {errors?.first_name ? (
                        <div style={{ color: "red" }}>Ismingizni kiriting!</div>
                      ) : null}
                    </div>
                    <div class="input">
                      <label for="">Familya</label>
                      <input
                        type="text"
                        placeholder="Familyangiz kiriting:"
                        name="last_name"
                        class="chakra-input_css-1cjy4zv"
                        value={obj?.last_name}
                        onChange={(e) => {
                          setObj({ ...obj, last_name: e.target.value });
                          setErrors({ ...errors, last_name: false });
                        }}
                      />
                      {errors?.last_name ? (
                        <div style={{ color: "red" }}>
                          Familyangizni kiriting!
                        </div>
                      ) : null}
                    </div>
                    <div class="input">
                      <label for="">Otangizni ismi</label>
                      <input
                        type="text"
                        placeholder="Otangizni ismini kiriting:"
                        name="middle_name"
                        class="chakra-input_css-1cjy4zv"
                        value={obj?.middle_name}
                        onChange={(e) => {
                          setObj({ ...obj, middle_name: e.target.value });
                          setErrors({ ...errors, middle_name: false });
                        }}
                      />
                      {errors?.middle_name ? (
                        <div style={{ color: "red" }}>
                          Familyangizni kiriting!
                        </div>
                      ) : null}
                    </div>
                    <div class="input">
                      <label for="">Tug'ilgan kun(YYYY:MM-DD)</label>
                      <input
                        placeholder="Tug'ilgan sanangizni kiriting:"
                        name="birthday"
                        type="date"
                        class="chakra-input_css-1cjy4zv"
                        value={obj?.birthday}
                        onChange={(e) => {
                          setObj({ ...obj, birthday: e.target.value });
                          setErrors({ ...errors, birthday: false });
                        }}
                      />
                      {errors?.birthday ? (
                        <div style={{ color: "red" }}>
                          Familyangizni kiriting!
                        </div>
                      ) : null}
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
                              // value={obj?.last_name}
                              // onChange={(e) => {
                              //   setObj({ ...obj, last_name: e.target.value });
                              //   setErrors({ ...errors, last_name: false });
                              // }}
                            >
                              <option>Jinsingizni tanlang:</option>
                              <option>Erkak</option>
                              <option>Ayol</option>
                            </select>
                            {/* {errors?.last_name ? (
                              <div style={{ color: "red" }}>
                                Familyangizni kiriting!
                              </div>
                            ) : null} */}
                            {/* <input /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input">
                      <label for="">Viloyat</label>

                      <div class=" css-b62m3t-container">
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
                              // value={obj?.last_name}
                              // onChange={(e) => {
                              //   setObj({ ...obj, last_name: e.target.value });
                              //   setErrors({ ...errors, last_name: false });
                              // }}
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
                            {/* {errors?.last_name ? (
                              <div style={{ color: "red" }}>
                                Familyangizni kiriting!
                              </div>
                            ) : null} */}
                          </div>
                          <div class=" css-1wy0on6">
                            {/* <span class=" css-1uei4ir-indicatorSeparator"></span> */}
                            <div
                              class=" css-1kf99lf-indicatorContainer"
                              aria-hidden="true"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {loading ? (
                      "Yuborilmoqda"
                    ) : (
                      <button
                        type="button"
                        class="submit"
                        onClick={handleNextStep}
                      >
                        Davom ettirish
                      </button>
                    )}
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
                            <AiOutlineEye
                              onClick={() => setShowPassword(true)}
                            />
                          </div>
                        )}
                      </div>
                      {/* <span class="react-reveal">Parol kiriting</span> */}
                      <div></div>
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
