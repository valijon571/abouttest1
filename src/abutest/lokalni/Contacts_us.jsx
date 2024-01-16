import React from "react";
import { AboutStyle } from "../AboutStyle";

const Contacts_us = () => {
  return (
    <>
      <AboutStyle>
        <div className="container">
          <div className="sc-gKPSgB_eHkElO">
            <h2 class="section-title_text-center">contacts us</h2>
            <div className="untree_co-section">
              <div className="block">
                <div className="row_justify-content-center">
                  <div className="col-md-8_col-lg-8_pb-4">
                    <div class="row_mb-5">
                      <div class="col-lg-4_mb-4">
                        <div
                          class="service_no-shadow_align-items-center_link_horizontal_d-flex_active"
                          data-aos="fade-left"
                          data-aos-delay="0"
                        >
                          <div class="service-icon_color-1 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-geo-alt-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                            </svg>
                          </div>
                          <div class="service-contents">
                            <p>adress</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4_mb-4">
                        <div
                          class="service_no-shadow_align-items-center_link_horizontal_d-flex_active"
                          data-aos="fade-left"
                          data-aos-delay="0"
                        >
                          <div class="service-icon_color-1 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-envelope-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
                            </svg>
                          </div>
                          <div class="service-contents">
                            <p>email@email.uz</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4_mb-4">
                        <div
                          class="service_no-shadow_align-items-center_link_horizontal_d-flex_active"
                          data-aos="fade-left"
                          data-aos-delay="0"
                        >
                          <div class="service-icon_color-1 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-telephone-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                              ></path>
                            </svg>
                          </div>
                          <div class="service-contents">
                            <p>+998 71 250 13 12</p>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <form>
                      <div class="row">
                        <div class="col-6">
                          <div class="form-group">
                            <label class="text-black" for="fname">
                              name<span>*</span>
                            </label>
                            <input
                              name="name"
                              type="text"
                              class="form-control"
                              placeholder="name"
                              value=""
                            />
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="form-group">
                            <label class="text-black" for="lname">
                              lastname<span>*</span>
                            </label>
                            <input
                              name="lastname"
                              type="text"
                              class="form-control"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="text-black" for="email">
                          tel<span>*</span>
                        </label>
                        <input class=" form-control" name="number" value="" />
                      </div>
                      <div class="form-group_mb-5">
                        <label class="text-black" for="message">
                          message<span>*</span>
                        </label>
                        <textarea
                          class="form-control"
                          id="message"
                          cols="30"
                          rows="5"
                          name="description"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        class="btn_btn-primary-hover-outline_w-100"
                      >
                        submit
                      </button>
                    </form>
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
export default Contacts_us;
