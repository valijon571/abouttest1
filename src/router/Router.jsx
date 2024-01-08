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
import Kirish from "../abutest/glabalni/Kirish";
import Royhat from "../abutest/glabalni/Royhat";
import Royhat1 from "../abutest/glabalni/Royhat1";

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
        <Route path="/kirsh" element={<Kirish />} />
        <Route path="/royhat" element={<Royhat />} />
        <Route path="/royhato" element={<Royhat1 />} />

      </Routes>
    </>
  );
};
export default Router;
