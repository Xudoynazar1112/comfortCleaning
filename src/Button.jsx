import { useTranslation } from "react-i18next";

const Button = () => {
  const {t, i18n} = useTranslation();
  return (
    <button className="rounded-[25px] px-6 py-4 font-unbounded text-white bg-[#04A2BA] font-medium text-xl w-44">
      {t('boglanish')}
    </button>
  );
};

export default Button;