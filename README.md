BookMyShow 2.0 - Frontend Clone

Overview

This project is a frontend clone of BookMyShow, built using React.js with Vite and Bootstrap 5. It replicates the core UI/UX of the popular ticket booking platform, featuring responsive navigation, movie carousels, event listings, and sports event displays.

Features

- Responsive Navigation Bar
  - Logo placement
  - Menu items (Movies, Events, Sports, Offers)
  - Search functionality
  - User profile options
  - Fully responsive for mobile and desktop views

- Featured Content Carousels
  - Auto-scrolling movie carousel
  - Navigation controls
  - Featured content with call-to-action buttons

- Movie Listings Page
  - Detailed movie cards
  - Movie information (title, genre, rating, etc.)
  - Book Now and Watch Trailer buttons

- Events & Sports Pages
  - Upcoming events display
  - Sports event listings
  - Venue and pricing information

- Responsive Design
  - Works seamlessly across all device sizes
  - Mobile-friendly layouts

Technologies Used

- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Bootstrap 5](https://getbootstrap.com/) - CSS framework for responsive design
- [React Router](https://reactrouter.com/) - For client-side routing

Getting Started

Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bookmyshow-clone.git
   cd bookmyshow-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

Project Structure

```
src/
├── assets/            # Static assets (images, etc.)
├── components/        # Reusable components
│   ├── Carousel.jsx   # Featured content carousel
│   ├── MovieCard.jsx  # Individual movie card
│   ├── Navbar.jsx     # Navigation bar
│   └── Footer.jsx     # Page footer
├── pages/             # Application pages
│   ├── Home.jsx       # Home page
│   ├── Movies.jsx     # Movies listing
│   ├── Events.jsx     # Events listing
│   └── Sports.jsx     # Sports events
├── App.jsx            # Main application component
└── main.jsx           # Application entry point
```

Customization

To customize this project:

1. Images: Replace placeholder images in `/src/assets` with your own
2. Content: Modify the data arrays in each page component
3. Styling: Edit the CSS in `index.css` or add Bootstrap utility classes
4. Colors: Update the Bootstrap theme colors in `index.css`

Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement actual search functionality
- [ ] Add movie trailer integration
- [ ] Create ticket booking flow
- [ ] Add authentication system

Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

License

Distributed under the MIT License. See `LICENSE` for more information.

Project Link: https://github.com/ShathanandaOfficial/Skill_Lab-Assignment.git
