import { useState } from 'react';

function Events() {
  const [events] = useState([
    {
      id: 1,
      title: 'Sunburn Festival',
      type: 'Music Concert',
      location: 'Goa',
      date: 'December 28-30, 2023',
      price: '₹3,499 onwards',
      image: 'https://picsum.photos/500/300'
    },
    {
      id: 2,
      title: 'Standup Comedy Night',
      type: 'Comedy Show',
      location: 'Mumbai',
      date: 'November 15, 2023',
      price: '₹799 onwards',
      image: 'https://picsum.photos/500/300'
    },
    {
      id: 3,
      title: 'Food Festival',
      type: 'Food & Drink',
      location: 'Delhi',
      date: 'December 10-12, 2023',
      price: '₹499 onwards',
      image: 'https://picsum.photos/500/300'
    },
    {
      id: 4,
      title: 'Tech Conference',
      type: 'Conference',
      location: 'Bangalore',
      date: 'January 20-21, 2024',
      price: '₹2,999 onwards',
      image: 'https://picsum.photos/500/300'
    }
  ]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Upcoming Events</h2>
      
      <div className="row">
        {events.map(event => (
          <div key={event.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img src={event.image} className="card-img-top" alt={event.title} />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text text-muted">{event.type}</p>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item"><strong>Location:</strong> {event.location}</li>
                  <li className="list-group-item"><strong>Date:</strong> {event.date}</li>
                  <li className="list-group-item"><strong>Price:</strong> {event.price}</li>
                </ul>
                <button className="btn btn-danger w-100">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;