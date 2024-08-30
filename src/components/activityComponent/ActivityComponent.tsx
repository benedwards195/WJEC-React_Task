import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useLocale } from "../../i18n/hooks";
import "./ActivityComponent.scss";
import data from "./example.json";

const ActivityComponent = () => {
  const locale = useLocale();
  const { t } = useTranslation();

  const [showHint, setShowHint] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    setContent(data.hint[locale]);
    setTitle(data.title[locale]);
  }, [locale]); 

  const handleToggleHint = useCallback(() => {
    setShowHint(prevShowHint => !prevShowHint); 
  }, []);

  return (
    <div id="activity" className="card my-3">
      <div className="card-header">
        <h1 className="card-title">{title}</h1>
      </div>
      <div className="card-body">
        <p>{content}</p>
        <div className="text-end">
        </div>
      </div>
      <div className="card-footer">
        {showHint ? (
          <>
            <p>{data.hint[locale]}</p> 
            <button onClick={handleToggleHint} className="btn-end btn btn-hint">
              {t("hideHint")}
            </button>
          </>
        ) : (
          <button onClick={handleToggleHint} className="btn-end btn btn-hint">
            {t("showHint")}
          </button>
        )}
      </div>
    </div>
  );
};

export default ActivityComponent;


