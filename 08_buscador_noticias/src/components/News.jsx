import React from "react";

const News = ({ mynew }) => {
  const { urlToImage, url, title, description, source } = mynew;
  const imagem = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title"> {source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 14">
      <div className="card">
        {imagem}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>

          <div className="card-action">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="waves-effecr waves-light button"
            >
              Ver noticia completa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
