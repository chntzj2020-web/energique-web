import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import OurServices from "./pages/OurServices";
import Sidebar from "./components/Sidebar";
import Enquiry from "./pages/Enquiry";
import AdminEnquiries from "./pages/AdminEnquiries";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/admin/enquiries" element={<AdminEnquiries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;