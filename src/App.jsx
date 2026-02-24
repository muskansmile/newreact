import './App.css'
import Header from "./Component/Header.jsx";
import About from "./Component/About.jsx";
import Contact from "./Component/Contact.jsx";
import { Routes, Route,Navigate } from 'react-router-dom';
import Footer from "./Component/Footer.jsx";
import Home from "./Component/Home.jsx";
import Testing from "./Component/Testing.jsx";
import Member from "./Component/Member/MemberDetails.jsx";
import Horsedetails from "./Component/Horse/HorseDetails.jsx";
function App() {
  
  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
            <Route path="/Testing" element={<Testing />} />
            <Route path="/member" element={<Member />} />
              <Route path="/horse" element={<Horsedetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App
