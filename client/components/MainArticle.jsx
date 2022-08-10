import React from 'react';

function MainArticle({ headline }) {
  console.log(headline)

  return (
    <>
		<div className='mainarticle'>
			<br></br>
      <h2>TOP ARTICLE THIS HOUR:</h2>
      {headline && (
        <div>
          <h1> {headline.title} </h1>
          <h2> {headline.publishedAt} </h2>
          <h2> {headline.author} </h2>
					<br></br> 
          <img src={headline.urlToImage} />
          <h2> {headline.content} </h2>
					<br></br>
					<br></br>
					<a href={headline.url} className='ds-button'> READ MORE HERE <br></br> </a>
					<br></br>
				</div>
      )}
			</div>
    </>
  )
}

export default MainArticle
