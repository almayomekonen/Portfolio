import { useState } from "react";
import Navbar from "./components/NavBar/navbar";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Feedback from "./components/FeedBack/Feedback";
import Popup from "./components/Popup/Popup";
import { AnimatePresence } from "framer-motion";

function App() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <Navbar />
      <Header />
      <AnimatePresence>
        {showPopup && (
          <Popup
            message="Get 50% off on your first lesson 🔔✔️"
            onClose={handleClosePopup}
          />
        )}
      </AnimatePresence>
      <Skills />
      <Works />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
