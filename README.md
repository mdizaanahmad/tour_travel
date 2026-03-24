# Tour & Travel Frontend Project

A complete React-based frontend application for browsing and booking hotels and tour packages worldwide.

## Features

- **Hotel Browsing**: Browse thousands of hotels with detailed information including price, facilities, ratings, and reviews
- **Tour Packages**: Explore pre-built tour packages with flights, hotels, meals, and activities
- **Search & Filter**: 
  - Filter hotels by price range, location, and facilities
  - Filter tours by price and duration
- **User Authentication**: 
  - Register new users
  - Login/Logout functionality
  - Protected booking routes
- **Booking System**:
  - Book hotels with check-in/check-out dates
  - Book tour packages
  - View booking history
  - Cancel bookings
  - Payment information collection
- **User Profile**: View and manage user profile information
- **Responsive Design**: Mobile-friendly UI that works on all devices

## Project Structure

```
src/
├── components/
│   ├── Auth/                 # Authentication components
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── ProtectedRoute.jsx
│   ├── Hotels/               # Hotel-related components
│   │   ├── HotelCard.jsx
│   │   ├── HotelList.jsx
│   │   └── HotelFilter.jsx
│   ├── Tours/                # Tour-related components
│   │   ├── TourCard.jsx
│   │   ├── TourList.jsx
│   │   └── TourFilter.jsx
│   ├── Booking/              # Booking components
│   │   ├── BookingForm.jsx
│   │   └── BookingHistory.jsx
│   ├── Common/               # Shared components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── styles/               # Component styles
├── pages/                    # Page components
│   ├── Home.jsx
│   ├── HotelsPage.jsx
│   ├── ToursPage.jsx
│   ├── BookingPage.jsx
│   ├── BookingsPage.jsx
│   ├── Profile.jsx
│   └── NotFound.jsx
├── context/                  # Context API providers
│   ├── AuthContext.jsx
│   ├── BookingContext.jsx
│   └── FilterContext.jsx
├── data/                     # Mock data
│   ├── hotels.js
│   ├── tours.js
│   └── users.js
├── styles/                   # Page styles
│   ├── Home.css
│   ├── HotelsPage.css
│   ├── ToursPage.css
│   └── Profile.css
├── App.jsx                   # Main app with routing
├── main.jsx                  # Entry point with providers
├── index.css                 # Global styles
└── App.css                   # App container styles
```

## Tech Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Context API** - State management
- **CSS3** - Styling
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

### Mock Credentials for Testing

You can use the following credentials to test the login:
- **Email**: `user@example.com`
- **Password**: `password123`

Or register a new account using the registration form.

### Main Pages

1. **Home** (`/`) - Landing page with featured destinations
2. **Hotels** (`/hotels`) - Browse and filter hotels
3. **Tours** (`/tours`) - Browse and filter tour packages
4. **Login** (`/login`) - User authentication
5. **Register** (`/register`) - Create new account
6. **Bookings** (`/bookings`) - View booking history
7. **Profile** (`/profile`) - User profile information

## Features Details

### Hotel Browsing
- View hotel name, location, price per night
- See hotel rating and review count
- Check available facilities (WiFi, Pool, Gym, etc.)
- View detailed hotel information
- Book hotels with date selection

### Tour Packages
- Browse pre-built tour packages
- See tour duration, destinations, and included amenities
- View itinerary for each tour
- Book tours with date and guest information

### Filtering System
- **Hotel Filters**:
  - Price range slider
  - Location search
  - Facility checkboxes
  
- **Tour Filters**:
  - Price range slider
  - Duration range slider

### Booking System
- Select hotels or tours to book
- Provide guest information
- Enter check-in/check-out dates
- Add payment information (demo)
- View booking confirmation
- Manage bookings history
- Cancel bookings

### State Management

**AuthContext**:
- User authentication state
- Login/Register/Logout functions
- User persistence using localStorage

**BookingContext**:
- Booking storage
- Add/Cancel booking functions
- Booking history retrieval

**FilterContext**:
- Hotel filter state
- Tour filter state
- Filter update functions

## Data

Mock data is provided for:
- **8 Hotels** across different US cities with various facilities
- **8 Tour Packages** to destinations worldwide with detailed itineraries
- **2 Mock Users** for testing authentication

Data is stored in `src/data/` directory and uses localStorage for persistence.

## Styling

The project uses CSS modules and global CSS with a modern color scheme:
- Primary Color: `#667eea` (Purple)
- Secondary Color: `#764ba2` (Dark Purple)
- Text Color: `#333` (Dark Gray)
- Background: `#f5f5f5` (Light Gray)

All components are responsive and work well on mobile, tablet, and desktop screens.

## Future Enhancements

- Backend API integration
- Real payment gateway integration
- Email notifications
- User reviews and ratings
- Wishlist functionality
- Multi-currency support
- Chat support
- Admin dashboard

## License

This project is open source and available under the MIT License.

## Support

For any issues or questions, please open an issue in the repository.
