import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../services/api";
//components
import SingleNew from "./SingleNew";

const NewsList = () => {
  const [journals, setJournal] = useState([]);
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
      <div className="news-list">
        <ul>
          {journals.map((journal, idx) => (
            <li>
              {" "}
              <SingleNew journal={journal} key={idx} />{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NewsList;
