import { Route, Routes } from "react-router-dom";
import Header from "../abutest/lokalni/Header";
import Main from "../abutest/lokalni/Main";
import Test from "../abutest/lokalni/Test";
import Banner from "../abutest/lokalni/Banner";
import Cards from "../abutest/lokalni/Cards";
import Row from "../abutest/lokalni/Row";
import Faq from "../abutest/lokalni/Faq";
import Footer from "../abutest/lokalni/Footer";
import About from "../abutest/About";
import Sign_up from "../abutest/glabalni/Sign_up";
import Sign_up_on from "../abutest/glabalni/Sign_up_on";
import Sign_up_to from "../abutest/glabalni/Sign_up_to";
import Sign_up_thre from "../abutest/glabalni/Sign_up_thre";
import Exordial from "../abutest/glabalni/Exordial";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/header" element={<Header />} />
        <Route path="/main" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/row" element={<Row />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/exordial" element={<Exordial />} />
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/sign_up/sign_up1" element={<Sign_up_on />} />
        <Route path="/sign_up2" element={<Sign_up_to />} />
        <Route path="/sign_up3" element={<Sign_up_thre />} />
      </Routes>
    </>
  );
};
export default Router;
