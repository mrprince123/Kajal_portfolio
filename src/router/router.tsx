import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../pages/Home";
import TopHeader from "../Components/TopHeader";

const MainRoute = () => {
  return (
    <Router>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainRoute;
