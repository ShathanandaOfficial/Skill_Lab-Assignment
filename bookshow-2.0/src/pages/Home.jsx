import Carousel from '../components/Carousel';

function Home() {
  return (
    <div className="container-fluid p-0">
      <Carousel />
      
      <div className="container my-5">
        <h2 className="mb-4">Recommended Movies</h2>
        <div className="row">
          {/* Recommended movies would go here */}
        </div>
      </div>
      
      <div className="container my-5">
        <h2 className="mb-4">Upcoming Events</h2>
        <div className="row">
          {/* Events would go here */}
        </div>
      </div>
    </div>
  );
}

export default Home;