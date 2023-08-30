import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css"

class Home extends React.Component {

	state = {
		isLoading: true,
		movies: []
	};

	getMovies = async () => { // 실행을 기다리게 설정
		// 점 연산자 data.data.movies
		// 성능 최적화
		// 구조 분해 할당 
		const {
			data: {
				data: { movies }
			}
		} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

		// state movies : 구조분해 할당한 객체 movies
		this.setState({ movies: movies, isLoading: false });
	}




	componentDidMount() {
		//setTimeout(()=>{this.setState({isLoading:false})},6000);
		this.getMovies();

	}

	render() {
		const { isLoading, movies } = this.state;

		return (
			
				<div className="movie_list">
					{
						isLoading ? (
							<div className="loding">Loding...</div>
						) :

							(
								movies.map((movie) => {
									return (
										<Movie
											key={movie.id}
											id={movie.id}
											year={movie.year}
											title={movie.title}
											summary={movie.summary}
											poster={movie.medium_cover_image}
											genres={movie.genres}
										/>
									);

								})
							)
					}
				</div>

		); // return 
	}
}

export default Home;
