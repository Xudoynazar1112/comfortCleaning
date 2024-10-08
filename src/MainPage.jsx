import { useTranslation } from "react-i18next";
import Button from "./Button";

function MainPage() {
  const {t, i18n} = useTranslation();
  return (
    <div id="main" className="md:grid md:grid-cols-2 mt-8">
      <div id="main-right" data-aos="fade-up" className="flex flex-col justify-between mt-24">
        <div className="flex flex-col justify-center p-10">
          <h1 className="text-black text-[80px] text-wrap md:text-[#04A2BA] md:font-medium font-unbounded md:text-[70px]">
            {t("AppjsxH1")}
          </h1>
          <div className='flex relative'>
            <p className="text-black text-3xl mt-10 md:text-xl md:text-[#272121] font-normal md:w-[56%]">
            {t("AppjsxP")}
            </p>
            <img
              src="./hero-min-823f76c6.png"
              alt="photo"
              className="hidden md:inline md:absolute md:w-[50%] md:scale-75 md:top-10 md:right-10"
            />
          </div>
        </div>
        <div className="flex justify-center"><Button /></div>
      </div>
      <div id="main-left" data-aos="fade-down"> 
        <img
          src="/hero-main-f4a19190.png"
          alt="photo"
          className="hidden md:inline md:object-cover md:rounded-xl"
        />
      </div>
    </div>
  );
}

export default MainPage;
