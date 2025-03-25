function Footer() {
    return (
      <footer className="bg-dark text-white mt-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-3">
              <h5>BookMyShow</h5>
              <p>The fastest way to book tickets for movies, events, and sports.</p>
            </div>
            <div className="col-md-3">
              <h5>Movies</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Now Showing</a></li>
                <li><a href="#" className="text-white">Coming Soon</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Events</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Concerts</a></li>
                <li><a href="#" className="text-white">Plays</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Help</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">About Us</a></li>
                <li><a href="#" className="text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>© 2023 BookMyShow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;