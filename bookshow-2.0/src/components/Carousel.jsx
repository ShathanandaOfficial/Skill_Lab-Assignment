function Carousel() {
    // Import local images
    const movie1 = '/src/assets/movie1.jpg';
    const movie2 = '/src/assets/movie2.jpg';
    const event1 = '/src/assets/movie3.jpg';
  
    return (
      <div id="featuredCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#featuredCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#featuredCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#featuredCarousel" data-bs-slide-to="2"></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={movie1} className="d-block w-100" alt="Featured Movie 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Avengers: Endgame</h5>
              <p>Book tickets now for the ultimate marvel experience</p>
              <button className="btn btn-danger">Book Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={movie2} className="d-block w-100" alt="Featured Movie 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Spider-Man: No Way Home</h5>
              <p>The multiverse is unleashed</p>
              <button className="btn btn-danger">Book Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={event1} className="d-block w-100" alt="Featured Event" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Sunburn Festival</h5>
              <p>Asia's biggest music festival</p>
              <button className="btn btn-danger">Book Now</button>
            </div>
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    );
  }
  
  export default Carousel;