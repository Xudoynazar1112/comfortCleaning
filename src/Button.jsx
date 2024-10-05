import { useTranslation } from "react-i18next";

const Button = () => {
  const {t, i18n} = useTranslation();
  return (
    <a href="#contact" className="rounded-[25px] px-6 py-4 font-unbounded text-white bg-[#04A2BA] font-medium text-xl w-44 hover:text-white">
      {t('boglanish')}
    </a>
  );
};

export default Button;