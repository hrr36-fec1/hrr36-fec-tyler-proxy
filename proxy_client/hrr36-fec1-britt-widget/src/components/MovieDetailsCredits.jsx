import React from 'react';
const moment = require('moment');


const MovieDetailsCredits = (props) => {

  const actors = props.movie[0].starring.map((actor, key) =>
    <span className="star" key={actor}>{actor}</span>
    );

  return (
    <div className="main">

    <img src="https://s3-us-west-2.amazonaws.com/bzfec/socialbar.png" className="social"/>

    <div className="flex-container">

      <div className="movie-image">
        <img src={props.movie[0].url} div className="image" />
      </div>

      <div className="details">
        <div className="top-section">
          <h1>Movie Details & Credits</h1>

          <div className="sec-1">
             <img src={props.movie[0].rating_url} id="rating-block" className="col"/>
             <div className="col" id="prod-release">{props.movie[0].production} | Release Date: {moment(props.movie[0].release_date).format('MMMM Do YYYY')}</div>
             </div>
          </div>

        <div className="starring">
          <span className="heading">Starring: </span>
          <span>{actors}</span>
        </div>

        <div className="summary">
          <span className="heading">Summary: </span>
          <span>{props.movie[0].summary}</span>
        </div>

        <div className="director">
          <span className="heading">Director: </span>
          <span id="direct">{props.movie[0].director}</span>
        </div>

        <div className="genre">
          <span className="heading">Genre(s): </span>
          <span>{props.movie[0].genre}</span>
        </div>

        <div className="rating">
          <span className="heading">Rating: </span>
          <span>{props.movie[0].rating}</span>
        </div>

        <div className="runtime">
          <span className="heading">Runtime: </span>
          <span>{props.movie[0].runtime}</span>
        </div>

        <div className="heading" id="footer">See All Details and Credits</div>

      </div>
    </div>
  </div>
  )
}


export default MovieDetailsCredits;


//<span id="actors" >{props.movie[0].starring}</span>

// <div className="create-editor">
//       <h2>AUTHOR</h2>
//       <form >
//         <input className="create-input" id="title" type="text"  placeholder="Post Title"></input>
//         <input className="create-input" id="author" type="text"  placeholder="Author"></input>
//         <input className="create-input" id="Url" type="text"  placeholder="Image URL"></input>
//         <textarea className="create-body-textarea" id="postBody" placeholder="Post Body"></textarea>
//         <button className="create-submit-button" onClick= {props.onClick.bind(this, event)} type="button"
//         >Save post</button>
//       </form>
//     </div>
//     <div className="create-preview">
//       <h2>PREVIEW</h2>
//       // you'll use your framework of choice to implement live preview here -->
//     </div>


