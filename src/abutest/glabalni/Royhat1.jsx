import React from "react";
import { GlabalStyle } from "../glabalni/GlabalStyle";
import Header from "../lokalni/Header";

const Royhat1 = () => {
  return (
    <>
      <Header />

      <GlabalStyle>
        <div className="sc-gKsecS cwgBGk">
          <div className="registr">
            <div className="registr-items_inputs">
              <div className="d-flex justify-content-beetwen">
                <div>2/4</div>
                <h1>Ro'yxatdan o'tish</h1>
                <form>
                  <div class="input">
                    <label class="avatar-input2" data-active="active">
                      Avatar
                      <div class="d-flex align-items-center justify-content-between">
                        <div>
                          <img
                            src="/img/pic.png"
                            alt=""
                            // style="border-radius: 50%; margin-right: 15px;"
                          />
                        </div>
                        <span > rasm yuklash</span>
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
                      class="chakra-input css-1cjy4zv"
                      value=""
                    />
                  </div>
                  <div class="input">
                    <label for="">Familya</label>
                    <input
                      type="text"
                      placeholder="Familyangiz kiriting:"
                      name="last_name"
                      class="chakra-input css-1cjy4zv"
                      value=""
                    />
                  </div>
                  <div class="input">
                    <label for="">Otangizni ismi</label>
                    <input
                      type="text"
                      placeholder="Otangizni ismini kiriting:"
                      name="middle_name"
                      class="chakra-input css-1cjy4zv"
                      value=""
                    />
                  </div>
                  <div class="input">
                    <label for="">Tug'ilgan kun(YYYY:MM-DD)</label>
                    <input
                      placeholder="Tug'ilgan sanangizni kiriting:"
                      name="birthday"
                      class="w-100 input-mask"
                      value=""
                    />
                  </div>
                  <div class="input">
                    <label for="">Jins</label>
                    <div class=" css-b62m3t-container">
                      <span
                        id="react-select-2-live-region"
                        class="css-7pg0cj-a11yText"
                      ></span>
                      <span
                        aria-live="polite"
                        aria-atomic="false"
                        aria-relevant="additions text"
                        role="log"
                        class="css-7pg0cj-a11yText"
                      ></span>
                      <div class=" css-9y5qhp-control">
                        <div class=" css-1sk3oa9">
                          <div
                            class=" css-1jqq78o-placeholder"
                            id="react-select-2-placeholder"
                          >
                            Jinsingizni tanlang:
                          </div>
                          <input
                            // id="react-select-2-input"
                            // tabindex="0"
                            // inputmode="none"
                            // aria-autocomplete="list"
                            // aria-expanded="false"
                            // aria-haspopup="true"
                            // role="combobox"
                            // aria-activedescendant=""
                            // aria-readonly="true"
                            // aria-describedby="react-select-2-placeholder"
                            class="css-1hac4vs-dummyInput"
                            value=""
                          />
                        </div>
                        <div class=" css-1wy0on6">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="input">
                    <label for="">Viloyat</label>
                    <div class=" css-b62m3t-container">
                      <span
                        id="react-select-3-live-region"
                        class="css-7pg0cj-a11yText"
                      ></span>
                      <span
                        aria-live="polite"
                        aria-atomic="false"
                        aria-relevant="additions text"
                        role="log"
                        class="css-7pg0cj-a11yText"
                      ></span>
                      <div class=" css-9y5qhp-control">
                        <div class=" css-1sk3oa9">
                          <div
                            class=" css-1jqq78o-placeholder"
                            id="react-select-3-placeholder"
                          >
                            Viloyat tanlang
                          </div>
                          <input
                            // id="react-select-3-input"
                            // tabindex="0"
                            // inputmode="none"
                            // aria-autocomplete="list"
                            // aria-expanded="false"
                            // aria-haspopup="true"
                            // role="combobox"
                            // aria-activedescendant=""
                            // aria-readonly="true"
                            // aria-describedby="react-select-3-placeholder"
                            class="css-1hac4vs-dummyInput"
                            value=""
                          />
                        </div>
                        <div class=" css-1wy0on6">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </GlabalStyle>
    </>
  );
};
export default Royhat1;
