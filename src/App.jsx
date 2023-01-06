import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Account = lazy(() => import("./pages/my-account/auth/account/Account"));
const Profile = lazy(() => import("./pages/my-account/profile/Profile"));
const Dashboard = lazy(() => import("./pages/my-account/dashboard/Dashboard"))
const Address = lazy(() => import("./pages/my-account/address/Address"))
const Orders = lazy(() => import("./pages/my-account/orders/Orders"))
const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p> Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/my-account" element={<Dashboard />}>
            <Route index element={<Account />} />
            <Route path="edit-account" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="address" element={<Address />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
