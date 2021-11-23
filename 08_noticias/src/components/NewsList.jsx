import React from "react";
import News from "./News";

const NewsList = ({ news }) => {
  return (
    <div className="row">
      {news.map((noticia) => (
        <News _new={noticia} key={noticia.url} />
      ))}
    </div>
  );
};

export default NewsList;
