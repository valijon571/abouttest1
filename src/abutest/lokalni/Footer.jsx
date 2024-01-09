import { Link } from "react-router-dom";
import { AboutStyle } from "../AboutStyle";

const Footer = () => {
  return (
    <>
      <AboutStyle>
        <div className="foter">
          <div className="fot">
            <div className="img">
              <ul class="d-flex_flex-wrap">
                <li class="list-unstyled">
                  <Link class="text-white" to="/">
                    Bosh sahifa
                  </Link>
                </li>
                <li class="list-unstyled">
                  <a class="text-white" href="/">
                    Olimpiadalar
                  </a>
                </li>
                <li class="list-unstyled ">
                  <a class="text-white" href="/">
                    Profil
                  </a>
                </li>
                <li class="list-unstyled ">
                  <a class="text-white" href="/">
                    olimpiadala
                  </a>
                </li>
              </ul>
            </div>

            <div class="hedar_to">
              <img src="../img/Facebook.svg" alt="" />
              <img src="../img/Instagram.svg" alt="" />
              <img src="../img/Telegram.svg" alt="" />
            </div>
          </div>
          <hr />
          <div className="fot_on">
            <p>© 2022-2023 Abutest LLC</p>
            <p>Hamma huquqlar himoya qilingan.</p>
          </div>
        </div>
      </AboutStyle>
    </>
  );
};
export default Footer;
