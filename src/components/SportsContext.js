import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SportsContext = createContext();

export const SportsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "386aa992a2a44cc1b529498c6800505e";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?language=en&category=sports&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <SportsContext.Provider value={{ data }}>
      {props.children}
    </SportsContext.Provider>
  );
};