import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { toast } from "react-toastify";
import validator from "validator";

const Questions = () => {
  const { t, i18n } = useTranslation();
  const SendMessage = (event) => {
    event.preventDefault();
    const token = "1361985908:AAHThjmeSwnG-9iBNmVqjBpv4X2B2bwh66M";
    const chat_id = 843414567;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    // Phone validation regex
    // const phoneRegex =
    //   /^(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    // // Validate phone number
    // if (!phoneRegex.test(phone)) {
    //   console.log("Please enter a valid phone number.");
    //   return; // Stop the form submission if phone number is invalid
    // }

    const message = `${name}dan buyurtma tushdi. \nRaqami: ${phone}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: message,
      },
    })
      .then((res) => {
        document.getElementById("forma").reset();
        toast.success("Muvaffaqiyatli jo'natildi!");
      })
      .catch((error) => {
        toast.error("Xatolik yuz berdi, iltimos qayta urinib ko'ring!");
        console.log("Xatolik yuz berdi: ", error);
      });
  };
  return (
    <>
      <div
        data-aos="zoom-in-up"
        id="questions"
        className="flex flex-col md:flex md:flex-row md:justify-evenly py-10 px-6"
      >
        <p className="text-3xl font-bold text-gray-800 mb-6">FAQs</p>
        <div className="w-[450px] max-w-2xl">
          <details className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
            <summary className="text-xl font-semibold text-gray-700 cursor-pointer">
              {t("question1.question")}
            </summary>
            <p className="mt-2 text-gray-600">{t("question1.answer")}</p>
          </details>
          <details className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
            <summary className="text-xl font-semibold text-gray-700 cursor-pointer">
              {t("question2.question")}
            </summary>
            <p className="mt-2 text-gray-600">{t("question2.answer")}</p>
          </details>
          <details className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
            <summary className="text-xl font-semibold text-gray-700 cursor-pointer">
              {t("question3.question")}
            </summary>
            <p className="mt-2 text-gray-600">{t("question3.answer")}</p>
          </details>
          <details className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
            <summary className="text-xl font-semibold text-gray-700 cursor-pointer">
              {t("question4.question")}
            </summary>
            <p className="mt-2 text-gray-600">{t("question4.answer")}</p>
          </details>
          <details className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
            <summary className="text-xl font-semibold text-gray-700 cursor-pointer">
              {t("question5.question")}
            </summary>
            <p className="mt-2 text-gray-600">{t("question5.answer")}</p>
          </details>
          <details className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
            <summary className="text-xl font-semibold text-gray-700 cursor-pointer">
              {t("question6.question")}
            </summary>
            <p className="mt-2 text-gray-600">{t("question6.answer")}</p>
          </details>
        </div>
      </div>
      <div className="flex justify-center items-center mr-6 gap-48 bg-gradient-to-b from-[#d9f7fc] to-[#04A2BA] w-full h-[500px] rounded-xl">
        <div
          id="contact"
          className="bg-white w-[440px] h-[340px] md:w-[500px] md:h-[400px] md:my-24 p-10 rounded-xl"
        >
          <h2 className="font-unbounded font-bold text-3xl">{t("malumot")}</h2>
          <form className="flex flex-col" onSubmit={SendMessage} id="forma">
            <input
              required
              type="text"
              placeholder={t("ismingiz")}
              className="my-5 bg-gray-100 p-2 rounded-lg"
              name="name"
              id="name"
            />
            <input
              required
              type="number"
              placeholder="+998-90-123-45-67"
              className="mb-10 bg-gray-100 p-2 rounded-lg"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
              name="phone"
              id="phone"
            />
            <button
              type="submit"
              aria-describedby="helper-text-explanation"
              className="bg-black text-white font-unbounded"
            >
              {t("yuborish")}
            </button>
          </form>
        </div>
        <div className="hidden md:bottom-0 md:inline">
          <img src="/happy-worker.png" alt="worker" />
        </div>
      </div>
    </>
  );
};

export default Questions;
