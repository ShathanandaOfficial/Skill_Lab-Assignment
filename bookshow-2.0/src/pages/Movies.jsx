import { useState } from 'react';
import MovieCard from '../components/MovieCard';

// Import local images
import movie1 from '../assets/Movie1.jpg';
import movie2 from '../assets/Movie2.jpg';
import movie3 from '../assets/Movie3.jpg';
import movie4 from '../assets/Movie4.jpg';

function Movies() {
  const [movies] = useState([
    {
      id: 1,
      title: 'Avengers: Endgame',
      genre: 'Action, Adventure, Sci-Fi',
      language: 'English',
      rating: 4.8,
      releaseDate: 'Released: April 26, 2019',
      image: movie1
    },
    {
      id: 2,
      title: 'Joker',
      genre: 'Crime, Drama, Thriller',
      language: 'English',
      rating: 4.6,
      releaseDate: 'Released: October 4, 2019',
      image: movie2
    },
    {
      id: 3,
      title: 'Dune',
      genre: 'Adventure, Sci-Fi',
      language: 'English',
      rating: 4.5,
      releaseDate: 'Released: October 22, 2021',
      image: movie3
    },
    {
      id: 4,
      title: 'The Batman',
      genre: 'Action, Crime, Drama',
      language: 'English',
      rating: 4.7,
      releaseDate: 'Released: March 4, 2022',
      image: movie4
    }
  ]);
  
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Now Showing</h2>
      
      <div className="row">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;