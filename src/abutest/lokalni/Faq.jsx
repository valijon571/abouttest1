import React from "react";
import { AboutStyle } from "../AboutStyle";
import { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(0);

  return (
    <>
      <AboutStyle>
        <div className="container">
          <h4 className="brand">FAQ</h4>

          <div className="faq_on">
            <div className="accordion_on">
              <div>
                <button
                  className={open === 1 ? " accordion" : "accordion"}
                  onClick={() => setOpen(open === 1 ? 0 : 1)}
                >
                  <div
                    className={
                      open === 1
                        ? "active accordion-btn__items"
                        : " accordion-btn__items"
                    }
                  >
                    <h4>Section 1 title</h4>
                    <img src="../img/squareAltArrowDown.png" />
                  </div>

                  {open === 1 ? (
                    <div className="panel" style={{ display: "block" }}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </button>
              </div>
              <br />
              <div>
                <button
                  className={open === 2 ? " accordion" : "accordion"}
                  onClick={() => setOpen(open === 2 ? 0 : 2)}
                >
                  <div
                    className={
                      open === 2
                        ? "active accordion-btn__items"
                        : " accordion-btn__items"
                    }
                  >
                    <h4>Section 2 title</h4>
                    <img src="../img/squareAltArrowDown.png" />
                  </div>

                  {open === 2 ? (
                    <div className="panel" style={{ display: "block" }}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </button>
              </div>
              <br />
              <div>
                <button
                  className={open === 3 ? " accordion" : "accordion"}
                  onClick={() => setOpen(open === 3 ? 0 : 3)}
                >
                  <div
                    className={
                      open === 3
                        ? "active accordion-btn__items"
                        : " accordion-btn__items"
                    }
                  >
                    <h4>Section 2 title</h4>
                    <img src="../img/squareAltArrowDown.png" />
                  </div>

                  {open === 3 ? (
                    <div className="fifa" style={{ display: "block" }}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </button>
              </div>
              <br />
              {/* <div>
                <button
                  className={open === 4 ? " accordion" : "accordion"}
                  onClick={() => setOpen(open === 4 ? 0 : 4)}
                >
                  <div
                    className={
                      open === 4
                        ? "active accordion-btn__items"
                        : " accordion-btn__items"
                    }
                  >
                    <h4>Какая выгода?</h4>
                    <img src="../img/squareAltArrowDown.png" />
                  </div>
                  {open === 4 ? (
                    <div className="fifa" style={{ display: "block" }}>
                      <p>
                        IVR (Interactive Voice Response) - голосовой
                        автоответчик, помогающий клиенту сориентироваться при
                        контакте с Вашей организацией по телефону. Он
                        прослушивает приветствие, выбирает язык обслуживания,
                        далее соединяется с оператором простым нажатием цифр на
                        телефоне.
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </AboutStyle>
    </>
  );
};
export default Faq;
