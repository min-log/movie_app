import React from "react";
import "./Detail.css";

class Detail extends React.Component{
	componentDidMount(){
		const { location, history } = this.props;
		if (location.state === undefined){
			console.log(location.state)
			history.push('/');
		}
	}
	render(){
		const {location} = this.props;
		return (
			<div className="movie_detail">
				<img className="img" src={location.state.poster} alt={location.state.title} />
				<div>
					<ul className="movie_genres">
						{
						location.state.genres.map((genre,index)=>{
							return <li key={index} className="genre">{genre}</li>;
						})
						}
					</ul>
					<p className="title">
						{location.state.title}
					</p>
					<p className="year">
						{location.state.year}
					</p>
					<p className="summary">{location.state.summary}</p>
					
				</div>
			</div>
		);
	}
	

}



export default Detail;