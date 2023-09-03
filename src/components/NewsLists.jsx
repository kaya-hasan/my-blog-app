import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../services/api";

const NewsList = () => {
  const [journal, setJournal] = useState([]);
  const axiosNews = async () => {
    try {
      const response = await axios.get(`${API_KEY}`);
      setJournal(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    axiosNews();
  }, []);
  return (
    <>
      <section>
        <h2>news lists</h2>
      </section>
      <ul className="users">
        {journal.map((newJournal) => {
          const {
            id,
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
          } = newJournal;
          return (
            <li key={id}>
              <img src={urlToImage} alt={author} />
              <div>
                <h2>{author}</h2>
                <p className="description">Description: {description}</p>
                <span>Published At: {publishedAt}</span>
                {/* <br></br> */}
                <p className="content">{content}</p>
                <a href={url} target="_blank">
                  Source:
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NewsList;
