import FeedBacks from "./FeedBacks";
import MainPage from "./MainPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Questions from "./Questions";
import Serviceses from "./Serviceses";
import WhyUs from "./WhyUs";
import Loader from "./Loader";


function App() {
  return (
    <div className="flex flex-col min-h-screen w-full px-[20px]">
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
