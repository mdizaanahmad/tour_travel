import { useAuth } from '../../context/AuthContext';
import { useBooking } from '../../context/BookingContext';
import '../styles/BookingHistory.css';

const BookingHistory = () => {
  const { user } = useAuth();
  const { bookings, cancelBooking } = useBooking();

  const userBookings = bookings;

  const handleCancel = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      cancelBooking(bookingId);
    }
  };

  return (
    <div className="booking-history-container">
      <h2>My Bookings</h2>
      
      {userBookings.length === 0 ? (
        <div className="no-bookings">
          <p>You haven't made any bookings yet.</p>
          <p>Start exploring hotels and tours to make your first booking!</p>
        </div>
      ) : (
        <div className="bookings-list">
          {userBookings.map(booking => (
            <div key={booking.id} className="booking-item">
              <div className="booking-header">
                <h3>{booking.itemName}</h3>
                <span className="booking-type">{booking.type?.toUpperCase()}</span>
              </div>
              <div className="booking-details">
                <p><strong>Booking ID:</strong> {booking.id}</p>
                <p><strong>Date Booked:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
                <p><strong>Check-in:</strong> {booking.checkIn}</p>
                {booking.checkOut && <p><strong>Check-out:</strong> {booking.checkOut}</p>}
                <p><strong>Guests/Travelers:</strong> {booking.guests}</p>
                <p><strong>Price per Unit:</strong> ${booking.itemPrice}</p>
                <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
              </div>
              <button
                onClick={() => handleCancel(booking.id)}
                className="cancel-btn"
              >
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
