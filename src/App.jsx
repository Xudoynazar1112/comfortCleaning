import { useEffect } from "react";
import FeedBacks from "./FeedBacks";
import MainPage from "./MainPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Questions from "./Questions";
import Serviceses from "./Serviceses";
import WhyUs from "./WhyUs";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      // offset: 50,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="flex flex-col min-h-screen w-full">
      <ToastContainer />
      <Navbar />
      <main className="flex-[100%]  flex flex-col mt-32">
        <MainPage />
        <WhyUs />
        <Serviceses />
        <FeedBacks />
        <Questions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
