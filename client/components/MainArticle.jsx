import React from 'react';

function MainArticle({ headline }) {
  console.log(headline)

  return (
    <>
			<br></br>
      <h2>TOP ARTICLE THIS HOUR:</h2>
      {headline && (
        <div>
          <h1> {headline.title} </h1>
          <p> {headline.publishedAt} </p>
          <p> {headline.author} </p>
          <a href={headline.url}> Read more here</a> <br></br>
          <img src={headline.urlToImage} />
          <p> {headline.content} </p>
          <br></br>
        </div>
      )}
    </>
  )
}

export default MainArticle
