import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
const Home = lazy(() => import("./pages/home/Home"));
const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p> Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
