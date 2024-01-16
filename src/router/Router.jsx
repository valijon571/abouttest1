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
import Exordial from "../abutest/glabalni/Exordial";
import Objectives from "../abutest/lokalni/Objectives";
import Contacts_us from "../abutest/lokalni/Contacts_us";
import Profile from "../abutest/glabalni/Exordial/Profile";

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
        <Route path="/objectives" element={<Objectives />} />
        <Route path="/contacts" element={<Contacts_us />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};
export default Router;
