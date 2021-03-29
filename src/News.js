import React from "react";
import "./App.css";
import { article1 } from "./data/article-1";


export const News = () => {
    
  return (
     
    <>
      <div className="news-container">Welcome to the News!</div>
      <div className="news-container">
            
              
            <div>
              {article1.title +
                " , " +
                article1.body +
                " ," +
                article1.model +
                ", " +
                article1.text}
            </div>
           
        
        
      </div>
      
      <button>Latest articles</button>
    </>
  );

};