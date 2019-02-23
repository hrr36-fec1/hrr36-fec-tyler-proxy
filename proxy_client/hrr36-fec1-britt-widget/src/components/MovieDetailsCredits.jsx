import React from 'react';
const moment = require('moment');


const MovieDetailsCredits = (props) => {

  const actors = props.movie[0].starring.map((actor, key) =>
    <span className="bz-star" key={actor}>{actor}</span>
    );

  return (
    <div className="bz-main">

    <img src="https://s3-us-west-2.amazonaws.com/bzfec/socialbar.png" className="bz-social"/>

    <div className="bz-flex-container">

      <div className="bz-movie-image">
        <img src={props.movie[0].url} div className="bz-image" />
      </div>

      <div className="bz-details">
        <div className="bz-top-section">
          <div className="bz-h1">Movie Details & Credits</div>

          <div className="bz-sec-1">
             <img src={props.movie[0].rating_url} id="rating-block" className="bz-col"/>
             <div className="bz-col" id="prod-release">{props.movie[0].production} | Release Date: {moment(props.movie[0].release_date).format('MMMM Do YYYY')}</div>
             </div>
          </div>

        <div className="bz-starring">
          <span className="bz-heading">Starring: </span>
          <span>{actors}</span>
        </div>

        <div className="bz-summary">
          <span className="bz-heading">Summary: </span>
          <span>{props.movie[0].summary}</span>
        </div>

        <div className="bz-director">
          <span className="bz-heading">Director: </span>
          <span id="direct">{props.movie[0].director}</span>
        </div>

        <div className="bz-genre">
          <span className="bz-heading">Genre(s): </span>
          <span>{props.movie[0].genre}</span>
        </div>

        <div className="bz-rating">
          <span className="bz-heading">Rating: </span>
          <span>{props.movie[0].rating}</span>
        </div>

        <div className="bz-runtime">
          <span className="bz-heading">Runtime: </span>
          <span>{props.movie[0].runtime}</span>
        </div>

        <div className="bz-heading" id="footer">See All Details and Credits</div>

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


