import React from "react";
import NewsArticle from "../NewsArticle/NewsArticle"
import "./NewsContainer.css"

// NEWSCONTAINER COMPONENT CODE GOES HERE

function NewsContainer({ displayData, isLoading }) {
  let newsArticles;
  if (displayData) {
    newsArticles = displayData.map(display => {
      const { id, headline, img, description, url } = display;
      return <NewsArticle
        id={id}
        headline={headline}
        img={img}
        description={description}
        url={url}
      />
    })
  }

  if (displayData) {
    return (
      <div className="news-container">
        {
          newsArticles
        }
      </div>
    )
  }
  return (
    <div className="no-data">
    {
      isLoading ? 
        'Loading...'
      :
        'Start Searching!'
    } 
    </div>


  )
}
export default NewsContainer;