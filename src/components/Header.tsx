import { FC } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/init";

const Header: FC = () => {
  const { t: _ } = useTranslation();
  const handleChangeLang = () => {
    const lang = i18n.language === "en" ? "cy" : "en";
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <h1 className="navbar-brand">{_("welcome")}</h1>
        <button
          aria-labelledby="sr-lang-btn"
          className="btn btn-secondary"
          onClick={handleChangeLang}
        >
          {i18n.language === "en" ? "Cymraeg" : "English"}
          <span id="sr-lang-btn" className="visually-hidden">
            {i18n.language === "en"
              ? "Switch language to Welsh"
              : "Switch language to English"}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
