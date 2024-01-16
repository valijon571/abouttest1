import React from "react";
import { GlabalStyle } from "../GlabalStyle";
import Header from "../../lokalni/Header";

const Profile = () => {
  return (
    <>
      <Header />
      <GlabalStyle>
        <div className="sc-dkrGBB_gAaqIk_mainSection">
          <div className="container">
            <div className="sc-pyeOL_hAKjbx">
              <div className="main-container">
                <div class="side-bar">
                  <ul class="mb-0">
                    <li>
                      <a class="d-flex" href="/profile">
                        <span class="icon">
                          <svg
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path
                              d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                              stroke="#696F85"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                            ></path>
                          </svg>
                        </span>
                        <span>Profil</span>
                      </a>
                    </li>
                    <li>
                      <button class="d-flex">
                        <span class="icon">
                          <svg
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path
                              d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16M7 12H21M21 12L18 9M21 12L18 15"
                              stroke="#696F85"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                            ></path>
                          </svg>
                        </span>
                        <span>Chiqish</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="main">
                  <form className="row">
                    <div class="mb-3 ">
                      <div class="edit_d-flex_justify-content-end">
                        <button
                          type="button"
                          class="btn_btn-primary_mb-3"
                          // style="font-size: 12px;"
                        >
                          O'zgartirish
                        </button>
                      </div>
                    </div>
                    <div class="mb-3 ">
                      <div class="avatar_d-flex_justify-content-center">
                        <img
                          src="https://api.abutest.uz/media/account/d53313bd-b19e-456c-af97-ba12c2fcf5fa.jpg"
                          class="img"
                          alt=""
                          // style="width: 110px; height: 110px; border-radius: 50%;"
                        />
                        <label for="avatar"></label>
                      </div>
                      <input
                        type="file"
                        id="avatar"
                        class="d-none_col-6"
                        accept="image/*"
                        disabled=""
                      />
                    </div>
                    <div class="mb-3_col-md-6_col-12">
                      <label for="first_name" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="first_name"
                        aria-describedby="emailHelp"
                        placeholder="Azizbek"
                        minlength="3"
                        required=""
                        disabled=""
                        value="aaaaaaaaa"
                      />
                    </div>
                    <div class="mb-3_col-md-6_col-12">
                      <label for="last_name" class="form-label">
                        Surname
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="last_name"
                        placeholder="Botirov"
                        minlength="3"
                        required=""
                        disabled=""
                        value="kkkkkkkkkkkk"
                      />
                    </div>
                    <div class="mb-3_col-md-6_col-12">
                      <label for="middle_name" class="form-label">
                        Middle name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="middle_name"
                        placeholder="Botirov"
                        minlength="3"
                        required=""
                        disabled=""
                        value="NURILLA"
                      />
                    </div>
                    <div class="mb-3_col-md-6_col-12">
                      <label for="gender" class="form-label">
                        Gender
                      </label>
                      <select
                        class="form-select"
                        id="gender"
                        aria-label="Default select example"
                        minlength="3"
                        required=""
                        disabled=""
                      >
                        <option value="1" selected="">
                          Man
                        </option>
                        <option value="2">Woman</option>
                      </select>
                    </div>
                    <div class="mb-3_col-md-6_col-12">
                      <label for="birthday" class="form-label">
                        Birthday
                      </label>
                      <input
                        type="date"
                        id="birthday"
                        class="form-control"
                        format="yyyy-mm-dd"
                        required=""
                        disabled=""
                        value="2024-01-06"
                      />
                    </div>
                    <div class="mb-3_col-md-6_col-12">
                      <label for="phone" class="form-label">
                        Phone number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        class="form-control"
                        placeholder="991234567"
                        disabled=""
                        maxlength="9"
                        minlength="9"
                        value="998992212505"
                      />
                      <div id="emailHelp" class="form-text_text-danger"></div>
                    </div>
                    <div class="mb-3_col-md-6_col-12">
                      <label for="region" class="form-label">
                        Region
                      </label>
                      <div class=" css-3iigni-container">
                        <span
                          id="react-select-4-live-region"
                          class="css-7pg0cj-a11yText"
                        ></span>
                        <span
                          aria-live="polite"
                          aria-atomic="false"
                          aria-relevant="additions text"
                          role="log"
                          class="css-7pg0cj-a11yText"
                        ></span>
                        <div class=" css-14ad9wt-control" aria-disabled="true">
                          <div class=" css-1k2aiui">
                            <div class=" css-10063yy-singleValue">
                              Samarqand
                            </div>
                            <input
                              id="react-select-4-input"
                              disabled=""
                              tabindex="0"
                              inputmode="none"
                              aria-autocomplete="list"
                              aria-expanded="false"
                              aria-haspopup="true"
                              role="combobox"
                              aria-activedescendant=""
                              aria-readonly="true"
                              class="css-1hac4vs-dummyInput"
                              value=""
                            />
                          </div>
                          <div class=" css-1h3cpuq">
                            <span class=" css-qts9v9-indicatorSeparator"></span>
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3_col-md-6_col-12">
                      <label for="city" class="form-label">
                        City
                      </label>
                      <div class=" css-3iigni-container">
                        <span
                          id="react-select-5-live-region"
                          class="css-7pg0cj-a11yText"
                        ></span>
                        <span
                          aria-live="polite"
                          aria-atomic="false"
                          aria-relevant="additions text"
                          role="log"
                          class="css-7pg0cj-a11yText"
                        ></span>
                        <div class=" css-14ad9wt-control" aria-disabled="true">
                          <div class=" css-1k2aiui">
                            <div class=" css-10063yy-singleValue">Urgut</div>
                            <input
                              id="react-select-5-input"
                              disabled=""
                              tabindex="0"
                              inputmode="none"
                              aria-autocomplete="list"
                              aria-expanded="false"
                              aria-haspopup="true"
                              role="combobox"
                              aria-activedescendant=""
                              aria-readonly="true"
                              class="css-1hac4vs-dummyInput"
                              value=""
                            />
                          </div>
                          <div class=" css-1h3cpuq">
                            <span class=" css-qts9v9-indicatorSeparator"></span>
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3_col-md-6_col-12">
                      <label for="address" class="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        placeholder="Address"
                        required=""
                        disabled=""
                        value=""
                      />
                    </div>
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
export default Profile;
