import React from "react";

function Article({ data }) {
  console.log(data)
  return (
    <>
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <img src={data.urlToImage} />
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span> <br></br>
      <span className="news__source">{data.source.name}</span><br></br>
			<br></br>
			<a href={data.url} className='ds-button2'> READ MORE HERE <br></br> </a>
    </div>
    </>
  );
}

export default Article;