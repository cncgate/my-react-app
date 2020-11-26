import React, { useState, useEffect } from "react";
import axios from "axios";
import GoogleApiKey from "./GoogleApiKey";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const url = "https://translation.googleapis.com/language/translate/v2";
    const doTranslation = async () => {
      const { data } = await axios.post(
        url,
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: GoogleApiKey,
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header"></h1>
      {translated}
    </div>
  );
};

export default Convert;
