import React from "react";
import { useTranslation } from "react-i18next";

const Questions = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div id="questions" className="flex justify-evenly py-10 px-6">
        <p className="text-3xl font-bold text-gray-800 mb-6">FAQs</p>
        <div className="w-full max-w-2xl">
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
            <p className="mt-2 text-gray-600">
            {t("question3.answer")}
            </p>
          </details>
          <details className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
            <summary className="text-xl font-semibold text-gray-700 cursor-pointer">
            {t("question4.question")}
            </summary>
            <p className="mt-2 text-gray-600">
            {t("question4.answer")}
            </p>
          </details>
          <details className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
            <summary className="text-xl font-semibold text-gray-700 cursor-pointer">
            {t("question5.question")}
            </summary>
            <p className="mt-2 text-gray-600">
            {t("question5.answer")}
            </p>
          </details>
          <details className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
            <summary className="text-xl font-semibold text-gray-700 cursor-pointer">
            {t("question6.question")}
            </summary>
            <p className="mt-2 text-gray-600">
            {t("question6.answer")}
            </p>
          </details>
        </div>
      </div>
      <div className="flex justify-center items-center gap-48 bg-gradient-to-b from-[#d9f7fc] to-[#04A2BA] w-full h-[500px] rounded-xl">
        <div className="bg-white w-[500px] h-[400px] my-24 p-10 rounded-xl">
          <h2 className="font-unbounded font-bold text-3xl">{t("malumot")}</h2>
          <form className="flex flex-col">
            <input
              required
              type="text"
              placeholder={t("ismingiz")}
              className="my-5 bg-gray-100 p-2 rounded-lg"
            />
            <input
              required
              type="number"
              placeholder="+998-90-123-45-67"
              className="mb-10 bg-gray-100 p-2 rounded-lg"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
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
        <div className="bottom-0">
          <img src="/happy-worker.png" alt="worker" />
        </div>
      </div>
    </>
  );
};

export default Questions;
