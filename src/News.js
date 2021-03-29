import React from "react";
import "./App.css";
import { article1 } from "./data/article-1";


export const News = () => {
    <h1>Header</h1>
  return (
    <>
      <div className="news-container"><h1>Welcome to the News!</h1></div>
      <div className="news-container"><button><h2>TOP STORIES</h2></button>
            
            <div>
              {article1.title + 
                ", " +
                article1.body +
                " ," +
                article1.model +
                ", " +
                article1.text}
            </div>
           
      </div>
      
    </>
  );

};