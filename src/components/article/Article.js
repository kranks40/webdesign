import React from 'react';
import "./article.css";

function Article({imgUrl, currentDateTime, title}) {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl}
                    alt="blog"/>
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{currentDateTime}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read full Article</p>
            </div>
        </div>
    );
}

export default Article;
