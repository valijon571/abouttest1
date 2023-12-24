import React from "react";
import { AboutStyle } from "../AboutStyle";

const Cards = () => {
  return (
    <>
      <AboutStyle>
        <div className="container">
          <div className="cardd">
            <h5>Nega aynan biz?</h5>

            <div className="card_on">
              <div className="on">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../img/usersGroupRounded.png"
                    alt="Card image"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Обслуживание в режиме 24/7</h4>
                    <p class="card-text">
                      Мы работаем без выходных, праздников и перерывов на
                      технические работы. Все звонки будут обработаны – даже
                      если одновременно поступят 100 звонков.
                    </p>
                  </div>
                </div>

                <div class="card">
                  <img
                    class="card-img-top"
                    src="../img/clockCircle.png"
                    alt="Card image"
                  />
                  <div class="card-body">
                    <h4 class="card-title">
                      Строгое соблюдение конфиденциальности
                    </h4>
                    <p class="card-text">
                      Для сотрудников установлен строгий режим обращения с
                      конфиденциальной информацией. Аналогичное обязательство
                      также включается в договор с клиентом
                    </p>
                  </div>
                </div>
              </div>

              <div className="on">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../img/headphonesRound.png"
                    alt="Card image"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Ответственность за результат</h4>
                    <p class="card-text">
                      Ответственность – не отдельное качество, присущее только
                      руководящему составу. Считаем, что каждый сотрудник любого
                      ранга ответственен за результаты своей работы.
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    class="card-img-top"
                    src="../img/pieChart.png"
                    alt="Card image"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Детальная онлайн статистика</h4>
                    <p class="card-text">
                      Предоставление доступа в «Персональный кабинет» для
                      прослушивания записей вызовов и просмотра анкет. Вы всегда
                      будете в курсе.
                    </p>
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
export default Cards;
