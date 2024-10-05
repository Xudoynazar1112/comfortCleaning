import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const FeedBack = ({ photo, name, nick, text }) => {
  return (
    <div className="w-[490px] h-[255px] p-5 border border-[#04A2BA] rounded-3xl">
      <div className="flex items-center">
        <img
          src={photo}
          alt="photo"
          className="rounded-full w-24 h-24 mr-10"
        />
        <div>
          <p className="font-bold text-2xl">{name}</p>
          <p>Telegram: {nick}</p>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};

const FeedBacks = () => {
  return (
    <div id="feedback">
      <h1 className="animate__animated animate__flipInX mb-10 mt-32 text-[45px] font-bold text-[#7b7b7b]">
        Mijozlarning fikrlari
      </h1>
      <div className="flex gap-1">
        <FeedBack photo={'/mijoz1.jpg'} name="Nigora" nick="@nigora_dostva" text="Gilamlarimni yuvishga topshirgan edim va natijadan juda mamnunman. Gilamlar yangidek toza bo‘lib qaytdi! Xizmatlar tez va sifatli. Rahmat!" />
        <FeedBack photo={'/mijoz2.webp'} name="Muxlisa" nick="@prsens" text="Gilamlarim juda katta edi va ularni tozalashda qiyinchiliklar bor edi. Ammo bu xizmatdan foydalanganimdan keyin ularning tozaligidan juda xursand bo‘ldim. Ishingizni qoyilmaqom qilib bajarasizlar!" />
        <FeedBack photo={'/mijoz3.jpg'} name="Lobar" nick="@hyot" text="Bir necha joydan dog‘lar bor edi, o‘ylab yurar edim bu dog‘larni hech qanday usul bilan yo‘qotib bo‘lmasa kerak deb. Lekin, bu xizmat meni ajablantirdi – dog‘lar butunlay ketdi! Tavsiya qilaman." />
      </div>
      <hr className="mt-16" />
      
    </div>
  );
};

export default FeedBacks;
