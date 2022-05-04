import React, { useContext } from "react";
import { EntContext } from "../components/EntContext";
import EntArticle from "../components/EntArticle";

function Sport(props) {
  const {data}  = useContext(EntContext);
  console.log(data);

  return (
    <div>
        {data
          ? data.articles.map((news) => (
              <EntArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
  );
}

export default Sport;