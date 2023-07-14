import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";
import Login from "../pages/Login";
import Join from "../pages/Join";
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Join />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
