import React, { useContext, useState } from "react";
import { SportsContext } from "../components/SportsContext";
import SportsArticle from "../components/SportsArticle";

function Sport(props) {
  const {data}  = useContext(SportsContext);
  console.log(data);

  return (
    <div>
         {data
          ? data.articles.map((news) => (
              <SportsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
  );
}

export default Sport;