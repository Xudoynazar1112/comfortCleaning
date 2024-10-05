import { useTranslation } from "react-i18next";
import Button from "./Button";

function MainPage() {
  const {t, i18n} = useTranslation();
  return (
    <div id="main" className="grid grid-cols-2 mt-8">
      <div id="main-right" className="flex flex-col justify-between mt-24">
        <div>
          <h1 className="text-[#04A2BA] font-medium font-unbounded text-[70px]">
            {t("AppjsxH1")}
          </h1>
          <div className='flex relative'>
            <p className="text-xl text-[#272121] font-normal w-[56%]">
            {t("AppjsxP")}
            </p>
            <img
              src="./hero-min-823f76c6.png"
              alt="photo"
              className="absolute w-[50%] scale-75 -top-10 right-10"
            />
          </div>
        </div>
        <Button />
      </div>
      <div id="main-left">
        <img
          src="/hero-main-f4a19190.png"
          alt="photo"
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
}

export default MainPage;
