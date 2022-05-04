import React, { useContext } from "react";
import { BussinessContext } from "../components/BussinessContext";
import BussinessArticle from "../components/BussinessArticle";

function Bussiness(props) {
  const {data}  = useContext(BussinessContext);
  console.log(data);

  return (
    <div>
        {data
          ? data.articles.map((news) => (
              <BussinessArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
  );
}

export default Bussiness;