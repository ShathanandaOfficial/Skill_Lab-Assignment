import { useState } from 'react';

function Sports() {
  const [sports] = useState([
    {
      id: 1,
      title: 'IPL Cricket Match',
      teams: 'Mumbai Indians vs Chennai Super Kings',
      venue: 'Wankhede Stadium, Mumbai',
      date: 'May 1, 2024',
      time: '7:30 PM',
      price: '₹1,499 onwards',
      image: 'https://via.placeholder.com/300x200?text=IPL'
    },
    {
      id: 2,
      title: 'ISL Football Match',
      teams: 'Mumbai City FC vs Bengaluru FC',
      venue: 'Mumbai Football Arena',
      date: 'November 25, 2023',
      time: '8:30 PM',
      price: '₹599 onwards',
      image: 'https://via.placeholder.com/300x200?text=ISL'
    },
    {
      id: 3,
      title: 'Pro Kabaddi League',
      teams: 'Patna Pirates vs Puneri Paltan',
      venue: 'Patliputra Sports Complex',
      date: 'December 5, 2023',
      time: '7:30 PM',
      price: '₹399 onwards',
      image: 'https://via.placeholder.com/300x200?text=PKL'
    },
    {
      id: 4,
      title: 'Badminton Championship',
      teams: 'National Championship Finals',
      venue: 'Indira Gandhi Arena, Delhi',
      date: 'January 15, 2024',
      time: '6:00 PM',
      price: '₹899 onwards',
      image: 'https://via.placeholder.com/300x200?text=Badminton'
    }
  ]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Sports Events</h2>
      
      <div className="row">
        {sports.map(sport => (
          <div key={sport.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img src={sport.image} className="card-img-top" alt={sport.title} />
              <div className="card-body">
                <h5 className="card-title">{sport.title}</h5>
                <p className="card-text text-muted">{sport.teams}</p>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item"><strong>Venue:</strong> {sport.venue}</li>
                  <li className="list-group-item"><strong>Date:</strong> {sport.date}</li>
                  <li className="list-group-item"><strong>Time:</strong> {sport.time}</li>
                  <li className="list-group-item"><strong>Price:</strong> {sport.price}</li>
                </ul>
                <button className="btn btn-danger w-100">Book Tickets</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sports;