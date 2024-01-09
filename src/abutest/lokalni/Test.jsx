import React from "react";
import { AboutStyle } from "../AboutStyle";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <>
      <AboutStyle>
        <div className="container">
          <div className="competitions">
            <div className="competitions_kjn">
              <h2 class="text-center_mb-0">Olimpiadalar</h2>
              <Link
                class="d-flex_align-items-center mb-0"
                to="/exordial"
              >
                <span className="span"> Barcha olimpiadalar</span>{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                </svg>
              </Link>
            </div>
            <div className="competitions-items">
              <div class="sc-hKgKIp fLikdv">
                <div class="chakra-skeleton css-cdkrf0">
                  <div class="card">
                    <div class="comp-image">
                      <img
                        src="https://btest.gazon-tashkent.uz/media/competition/delir.jpg"
                        alt=""
                        class="w-100 h-100"
                      />
                    </div>
                    <div class="comp-text">
                      <h3 class=" mb-md-2_mb-0">test</h3>
                      <div class="rating">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                      <div class="d-flex ">
                        <div class="price">0 so'm</div>
                        <div class="time d-flex  align-items-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            font-size="18px"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            // style="margin-bottom: 1px;"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                          </svg>{" "}
                          <span>30 min</span>
                        </div>
                      </div>
                      <div class="d-flex_justify ">
                        <Link class="btn" to="/exordial">
                          <button className="button ">
                            Testga yozilish
                            <svg
                              class="icon"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sc-hKgKIp fLikdv">
                <div class="chakra-skeleton css-cdkrf0">
                  <div class="card">
                    <div class="comp-image">
                      <img
                        src="https://btest.gazon-tashkent.uz/media/competition/art-design-4.jpg"
                        alt=""
                        class="w-100 h-100"
                        // style="background-repeat: no-repeat; background-position: center center; background-size: cover;"
                      />
                    </div>
                    <div class="comp-text">
                      <h3 class=" mb-md-2_mb-0">Leader 3.0</h3>
                      <div class="rating">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                      <div class="d-flex ">
                        <div class="price">1300 so'm</div>
                        <div class="time d-flex  align-items-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            font-size="18px"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            // style="margin-bottom: 1px;"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                          </svg>{" "}
                          <span>12 min</span>
                        </div>
                      </div>
                      <div class="d-flex_justify ">
                        <Link class="btn" to="/exordial">
                          <button className="button ">
                            Testga yozilish
                            <svg
                              class="icon"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sc-hKgKIp fLikdv">
                <div class="chakra-skeleton css-cdkrf0">
                  <div class="card">
                    <div class="comp-image">
                      <img
                        src="https://btest.gazon-tashkent.uz/media/competition/art-design-5.jpg"
                        alt=""
                        class="w-100 h-100"
                        // style="background-repeat: no-repeat; background-position: center center; background-size: cover;"
                      />
                    </div>
                    <div class="comp-text">
                      <h3 class=" mb-md-2_mb-0">Bolalar 12</h3>
                      <div class="rating">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                      <div class="d-flex ">
                        <div class="price">0 so'm</div>
                        <div class="time d-flex  align-items-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            font-size="18px"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            // style="margin-bottom: 1px;"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                          </svg>{" "}
                          <span>15 min</span>
                        </div>
                      </div>
                      <div class="d-flex_justify ">
                        <Link class="btn"to="/exordial">
                          <button className="button ">
                            Testga yozilish
                            <svg
                              class="icon"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sc-hKgKIp fLikdv">
                <div class="chakra-skeleton css-cdkrf0">
                  <div class="card">
                    <div class="comp-image">
                      <img
                        src="	https://btest.gazon-tashkent.uz/media/competition/art-design-1.jpg"
                        alt=""
                        class="w-100 h-100"
                        // style="background-repeat: no-repeat; background-position: center center; background-size: cover;"
                      />
                    </div>
                    <div class="comp-text">
                      <h3 class=" mb-md-2_mb-0">Ulugbek</h3>
                      <div class="rating">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                      <div class="d-flex ">
                        <div class="price">0 so'm</div>
                        <div class="time d-flex  align-items-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            font-size="18px"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            // style="margin-bottom: 1px;"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                          </svg>{" "}
                          <span>50 min</span>
                        </div>
                      </div>
                      <div class="d-flex_justify ">
                        <Link class="btn" to="/exordial">
                          <button className="button ">
                            Testga yozilish
                            <svg
                              class="icon"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutStyle>
    </>
  );
};
export default Test;
