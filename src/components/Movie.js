import React  from "react";
import PropTypes from 'prop-types'; 
import "./Movie.css";
import { Link } from "react-router-dom/cjs/react-router-dom";


//타입 체크 
Movie.propTypes = {
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}


function Movie({ year, title, summary, poster, genres }){
	return (
		<div className="movie_item">
			<Link to={{ pathname: '/movie-detail', state: { year, title, summary, poster, genres}}} >
				<img src={poster} alt={title} />
				<div className="movie_data">
					<ul className="movie_genres">
						{
						genres.map((genre,index)=>{
							return <li key={index} className="genre">{genre}</li>;
							})
						}
					</ul>
					<h4 className="title">{title}</h4>
					<p className="year">{year}</p>
					<p className="summary">{summary.slice(0,200)}...</p>
				</div>
			</Link>
		</div>
	);
}




export default Movie;