import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MovieDetailsCredits from './MovieDetailsCredits.jsx'




class App extends React.Component {
  constructor () {
    super ();

    this.state = {
      movie: [{url: "", title: "", production: "", release_date: "", summary: "", director: "", rating: "", runtime: "", genre: [], starring: []}]

    }

   this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  componentDidMount(){

    this.getMovieDetails();
  }


  getMovieDetails(){
    $.ajax({
      url: 'http://localhost:3002/api/movies/details/jurassic-park',
      method: 'GET',
      context: this,
      success: function(results) {
        this.setState({
          movie: results
        });
        console.log(results, 'GET req from client success')
        console.log(this.state.movie[0].title)
      },
      error: function (results) {
        console.log('error in GET req from client');
      }
    })
  }



render() {


    return (
      <div>
        <h1></h1>
        <MovieDetailsCredits movie={this.state.movie}/>
      </div>

    );
  }
}
export default App;



ReactDOM.render (<App />, document.getElementById('root'));
//<MovieDetailsCredits movie={this.state.info}/>
