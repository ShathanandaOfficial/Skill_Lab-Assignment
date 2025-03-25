
function MovieCard({ movie }) {
    // Use local image path from props
    return (
      <div className="col-md-3 mb-4">
        <div className="card h-100">
          <img src={movie.image} className="card-img-top" alt={movie.title} />
          {/* rest of the component remains the same */}
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text text-muted">{movie.genre}</p>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-primary">{movie.language}</span>
              <span className="text-warning">★ {movie.rating}</span>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-danger">Book Now</button>
              <button className="btn btn-outline-secondary">Watch Trailer</button>
            </div>
          </div>
          <div className="card-footer text-muted">
            {movie.releaseDate}
          </div>
        </div>
      </div>
    );
  }
// function MovieCard({ movie }) {
//     return (
//       <div className="col-md-3 mb-4">
//         <div className="card h-100">
//           <img src={movie.image} className="card-img-top" alt={movie.title} />
          
//         </div>
//       </div>
//     );
//   }
  
  export default MovieCard;

  