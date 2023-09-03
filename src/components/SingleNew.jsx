import React from "react";

const SingleNew = ({ journal }) => {
  return (
    <div className="single-new">
      <h3>{journal.author}</h3>
      <img src={journal.urlToImage} alt="" />
      <div className="journal-title">
        <h3>{journal.title}</h3>
      </div>
      <p className="journal-description">{journal.description}</p>
      <div className="journal-content">
        <p>{journal.content}</p>
      </div>
    </div>
  );
};

export default SingleNew;
