import React from "react";

const News = ({ noticia }) => {
  const { urlToImage, url, title, description, soruce } = noticia;
  return (
    <div className="col s12 m6 14">
      <div className="card">
        <div className="card-image">
          <img src={urlToImage} alt="Imagem" />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default News;
