import React from "react";
import '../styles/NewsArticle.css';

function NewsArticle({ data }) {
  return (
    <div className="news">
        <div className="container">
        <div className="link" onClick={()=>{window.open(data.url);}}>
      <img src={data.urlToImage} alt={data.title}/>      
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__published">{data.publishedAt}</span>
      </div>
      </div>
    </div>
  );
}

export default NewsArticle;