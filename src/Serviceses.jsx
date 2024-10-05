import React from "react";
import Button from "./Button";
import call from "/call.svg";
import delivery from "/delivery.svg";
import deal from "/deal.svg";
import bridge from "/bridge.svg";
import vacumcleaner from "/vacumcleaner.svg";
import vishilka from "/vishilka.svg";
import skuter from "/skuter.svg";
import { useTranslation } from "react-i18next";

const Service = ({ img, name }) => {
  return (
    <div className="bg-gray-100 rounded-xl w-[430px] h-[450px] mb-10 items-center">
      <img
        src={img}
        alt="photo"
        className="h-1/2 rounded-tl-3xl rounded-tr-3xl"
      />
      <h2 className="text-center my-10 font-unbounded text-[#04a2ba] text-3xl font-semibold">
        {name}
      </h2>
      <div className="text-center">
        <Button />
      </div>
    </div>
  );
};

const Proccess = ({ icon, title, desc }) => {
  return (
    <div className="w-[300px]">
      <img src={icon} alt="icon" className="inline mr-5" />
      <h2 className="inline font-ibm text-[#193365] font-semibold text-3xl">
        {title}
      </h2>
      <p className="w-5/6 text-[#9e9e9e] text-xl pt-3">{desc}</p>
    </div>
  );
};

const Serviceses = () => {
  const {t, i18n} = useTranslation();
  return (
    <div className="mt-32 items-center" id="serviceses">
      <h1 className="animate__animated animate__flipInX mb-7">
        {t("xizmat")}
      </h1>
      <div className="grid grid-cols-3">
        <Service img={"plisos.png"} name={t("faqatGilam")} />
        <Service img={"dazmol.png"} name={t("barchaMebel")} />
        <Service img={"parda.png"} name={t("barchaParda")} />
        <Service img={"gilam.png"} name={t("barchaGilam")} />
        <Service img={"sochiq.png"} name={t("barchaAdyol")} />
      </div>
      <h1 className="animate__animated animate__flipInX mb-7 text-center text-[45px] font-bold text-[#000929b3]">
        {t("erishayotganNatija")}
      </h1>
      <div className="flex justify-center">
        <img
          src="/natija.jpg"
          alt="natija"
          className="w-1/3 object-cover inline"
        />
        <img
          src="/natija2.jpg"
          alt="natija"
          className="w-1/3 object-cover inline"
        />
      </div>
      <h1 className="animate__animated animate__flipInX mt-32 mb-4 text-center text-[45px] font-bold text-[#000929b3]">
        {t("ishLavha")}
      </h1>
      <div className=" flex gap-5 w-full overflow-hidden overflow-x-scroll">
        <video controls loop muted width={300}>
          <source src="/video1.mp4" />
        </video>
        <video controls loop muted width={300}>
          <source src="/video2.mp4" />
        </video>
        <video controls loop muted width={300}>
          <source src="/video3.mp4" />
        </video>
        <video controls loop muted width={300}>
          <source src="/video4.mp4" />
        </video>
        <video controls loop muted width={300}>
          <source src="/video5.mp4" />
        </video>
        <video controls loop muted width={300}>
          <source src="/video6.mp4" />
        </video>
      </div>
      <h1 className="animate__animated animate__flipInX mb-10 mt-32 text-[45px] font-bold text-[#193365] font-ibm">
        {t("qandayIshlaydi")}
      </h1>
      <div className="grid grid-cols-4">
        <Proccess
          icon={call}
          title={t("call")}
          desc={
            t("callBody")
          }
        />
        <Proccess
          icon={delivery}
          title={t("buyurtma")}
          desc={
            t("buyurtmaBody")
          }
        />
        <Proccess
          icon={deal}
          title={t("shartnoma")}
          desc={t("shartnomaBody")}
        />
        <Proccess
          icon={bridge}
          title={t("olibKetish")}
          desc={t("olibKetishBody")}
        />
        <Proccess
          icon={vacumcleaner}
          title={t("tozalash")}
          desc={t("tozalashBody")}
        />
        <Proccess
          icon={vishilka}
          title={t("quritish")}
          desc={t("quritishBody")}
        />
        <Proccess
          icon={skuter}
          title={t("yetkazibBerish")}
          desc={t("yetkazibBerishBody")}
        />
        <div>
          <button className="bg-[#04a2ba] text-white py-4 px-10 text-3xl">
            {t("buyurtmaBering")}
          </button>
          <p className="text-[#9e9e9e] text-xl pt-3">
            {t("obrodir")}
          </p>
        </div>
      </div>
      <h1 className="animate__animated animate__flipInX mb-10 mt-32 text-[45px] font-bold text-black font-ibm">
        {t("ishJarayoni")}
      </h1>
      <div className="grid grid-cols-4 gap-2">
        <div className="overflow-hidden row-span-2 col-span-2 w-[740px] h-[710px] relative">
          <img
            src="/galareya1.jpg"
            alt="galareya"
            className="rounded-xl transition duration-150 ease-linear hover:scale-110"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/galareya2.jpg"
            alt="galareya"
            className="w-[370px] h-[350px] rounded-xl transition duration-150 ease-linear hover:scale-110"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/galareya3.jpg"
            alt="galareya"
            className="w-[370px] h-[350px] rounded-xl transition duration-150 ease-linear hover:scale-110"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/galareya5.jpg"
            alt="galareya"
            className="w-[370px] h-[350px] rounded-xl transition duration-150 ease-linear hover:scale-110"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/galareya6.jpg"
            alt="galareya"
            className="w-[370px] h-[350px] rounded-xl transition duration-150 ease-linear hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Serviceses;
