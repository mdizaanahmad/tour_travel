import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useBooking } from '../../context/BookingContext';
import { hotels } from '../../data/hotels';
import { tours } from '../../data/tours';
import '../styles/BookingForm.css';

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addBooking } = useBooking();

  const [bookingType, setBookingType] = useState('hotel');
  const [selectedId, setSelectedId] = useState(null);
  const [item, setItem] = useState(null);
  const [formData, setFormData] = useState({
    guests: 1,
    checkIn: '',
    checkOut: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    if (location.state?.hotelId) {
      setBookingType('hotel');
      setSelectedId(location.state.hotelId);
      setItem(hotels.find(h => h.id === location.state.hotelId));
    } else if (location.state?.tourId) {
      setBookingType('tour');
      setSelectedId(location.state.tourId);
      setItem(tours.find(t => t.id === location.state.tourId));
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedId) {
      alert('Please select a hotel or tour');
      return;
    }

    if (!formData.checkIn || !formData.checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }

    if (!formData.cardName || !formData.cardNumber || !formData.cardExpiry || !formData.cardCVV) {
      alert('Please fill in all payment details');
      return;
    }

    const booking = {
      type: bookingType,
      itemId: selectedId,
      itemName: item?.name,
      itemPrice: item?.price || item?.price,
      guests: formData.guests,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guestName: user?.name,
      guestEmail: user?.email,
      guestPhone: user?.phone,
      totalPrice: calculateTotal()
    };

    addBooking(booking);
    setBookingConfirmed(true);
  };

  const calculateTotal = () => {
    if (bookingType === 'hotel' && formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      return nights * item?.price * formData.guests;
    }
    return item?.price || 0;
  };

  if (bookingConfirmed) {
    return (
      <div className="booking-confirmation">
        <div className="confirmation-card">
          <h2>✅ Booking Confirmed!</h2>
          <p>Your {bookingType === 'hotel' ? 'hotel' : 'tour'} has been booked successfully.</p>
          <p><strong>Booking ID:</strong> {Date.now()}</p>
          <p><strong>Item:</strong> {item?.name}</p>
          <p><strong>Total Price:</strong> ${calculateTotal()}</p>
          <p>A confirmation email has been sent to {user?.email}</p>
          <button onClick={() => navigate('/bookings')} className="btn-primary">
            View My Bookings
          </button>
          <button onClick={() => navigate('/')} className="btn-secondary">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-form-container">
      <h2>Book Your {bookingType === 'hotel' ? 'Hotel' : 'Tour'}</h2>

      <div className="booking-type-selector">
        <button
          className={`type-btn ${bookingType === 'hotel' ? 'active' : ''}`}
          onClick={() => {
            setBookingType('hotel');
            setSelectedId(null);
            setItem(null);
          }}
        >
          🏨 Hotel
        </button>
        <button
          className={`type-btn ${bookingType === 'tour' ? 'active' : ''}`}
          onClick={() => {
            setBookingType('tour');
            setSelectedId(null);
            setItem(null);
          }}
        >
          ✈️ Tour
        </button>
      </div>

      {!selectedId && (
        <div className="selection-section">
          <h3>Step 1: Select a {bookingType === 'hotel' ? 'Hotel' : 'Tour'}</h3>
          <div className="selection-list">
            {(bookingType === 'hotel' ? hotels : tours).map(item => (
              <div key={item.id} className="selection-item">
                <span>{item.name} - ${item.price}</span>
                <button
                  onClick={() => {
                    setSelectedId(item.id);
                    setItem(item);
                  }}
                  className="select-btn"
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {item && (
        <form onSubmit={handleSubmit} className="booking-form">
          <h3>Selected: {item.name}</h3>

          <div className="form-section">
            <h4>Guest Information</h4>
            <div className="form-group">
              <label>Guest Name:</label>
              <input type="text" value={user?.name} disabled />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" value={user?.email} disabled />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input type="tel" value={user?.phone} disabled />
            </div>
          </div>

          <div className="form-section">
            <h4>Booking Details</h4>
            {bookingType === 'hotel' ? (
              <>
                <div className="form-group">
                  <label htmlFor="checkIn">Check-in Date:</label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkOut">Check-out Date:</label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            ) : (
              <div className="form-group">
                <label htmlFor="checkIn">Tour Date:</label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="guests">Number of {bookingType === 'hotel' ? 'Guests' : 'Travelers'}:</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h4>Payment Information</h4>
            <div className="form-group">
              <label htmlFor="cardName">Cardholder Name:</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cardExpiry">Expiry Date:</label>
                <input
                  type="text"
                  id="cardExpiry"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardCVV">CVV:</label>
                <input
                  type="text"
                  id="cardCVV"
                  name="cardCVV"
                  value={formData.cardCVV}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength="3"
                  required
                />
              </div>
            </div>
          </div>

          <div className="price-summary">
            <p><strong>Price per night/tour:</strong> ${item.price}</p>
            {bookingType === 'hotel' && formData.checkIn && formData.checkOut && (
              <p><strong>Number of nights:</strong> {Math.ceil((new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24))}</p>
            )}
            <p><strong>Number of guests:</strong> {formData.guests}</p>
            <h3><strong>Total Price:</strong> ${calculateTotal()}</h3>
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => setSelectedId(null)} className="btn-cancel">
              Change Selection
            </button>
            <button type="submit" className="btn-confirm">
              Confirm Booking
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
