import React from "react";
import News from "./News";

const NewsList = ({ news }) => {
  return (
    <div className="row">
      {news.map((mynew) => (
        <News mynew={mynew} key={mynew.url} />
      ))}
    </div>
  );
};

export default NewsList;
