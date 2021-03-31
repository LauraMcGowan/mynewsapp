import React from "react";
import "./App.css";
import { article1 } from "./data/article-1";
import parse from "html-react-parser";



export const News = () => {

const articleContent = article1.body.map(({type,model}) => {

    let content = '';

        switch (type) {
            case "heading":
                content =`<h4>${model.text}</h4>`
                
                break;

                case "paragraph":
                content =`<p>${model.text}</p>`
                        
                    
                break;

        
                default:
                break;
        }

    return content;

}).join('')    


  return (
    <>
      <div className="news-container"><h1>Welcome to the News!</h1></div>
      <div className="news-container"><h2>TOP STORIES</h2></div>
 
      <article>
      <h3>{article1.title}</h3>    
      {parse(articleContent)}
    
              
     </article>
    
    <footer> 
    <button>NEXT</button>
    </footer>
      
    </>
  );

};