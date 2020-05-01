import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE
function NewsArticle({id, headline, img, description, url}) {
  return (
    <article className="article" key={id}>
      <div className="image-container">
        <img src={img} alt=""/>
      </div>
      <div className="text-container">
        <h2 className="text__headline">
          {headline}
        </h2>
        <p className="text_description">
          {description}
        </p>
      </div>
      <div className="footer-container">
        <a href={url}>
        Link to article 
        &nbsp;&nbsp;&nbsp;&nbsp; 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        ->
        </a>

      </div>
    </article>
  )
}
export default NewsArticle;