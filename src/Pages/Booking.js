import React, { useState, useEffect } from 'react';
import './Booking.css';

const Booking = () => {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState('');  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    let temp = {};
    const nameRx = /^[A-Za-z\s]+$/;
    const emailRx = /^[a-z0-9._%+-]+@gmail\.com$/;
    const phoneRx = /^[7-9]{1}[0-9]{9}$/;

    if (!booking.name || !nameRx.test(booking.name)) temp.name = 'Enter a valid name';
    if (!booking.email || !emailRx.test(booking.email)) temp.email = 'Enter a valid @gmail.com email';
    if (!booking.phone || !phoneRx.test(booking.phone)) temp.phone = 'Enter a 10-digit phone';
    if (!booking.service) temp.service = 'Select a service';
    if (!booking.date) temp.date = 'Select a date';
    if (!booking.time) temp.time = 'Select a time';

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const fetchBookings = async () => {
    const res = await fetch('https://askayra-server.onrender.com/api/bookings');
    const data = await res.json();
    setBookings(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const url = editingId
      ? `https://askayra-server.onrender.com/api/bookings/${editingId}`
      : 'https://askayra-server.onrender.com/api/bookings';
    const method = editingId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    });

    if (res.ok) {
      alert(editingId ? 'Updated!' : 'Booked!');
      setBooking({ name: '', email: '', phone: '', service: '', date: '', time: '' });
      setEditingId(null);
      fetchBookings();
    } else {
      alert('Error sending data.');
    }
  };

  const handleEdit = (b) => {
    setBooking(b);
    setEditingId(b._id);
    setErrors({});
  };

  const handleDelete = async (id) => {
    const confirmPassword = window.prompt("Enter admin password to delete booking:");
  
    if (!confirmPassword) return;
  
    const res = await fetch(`https://askayra-server.onrender.com/api/bookings/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: confirmPassword }) // ✅ send in body!
    });
  
    if (res.ok) {
      fetchBookings();
      alert("Booking deleted successfully.");
    } else {
      alert("Invalid password or error deleting booking.");
    }
  };
  

  useEffect(() => {
    fetchBookings();
  }, []);

  const getClass = (f) => {
    if (errors[f]) return 'error';
    if (booking[f]) return 'valid';
    return '';
  };

  return (
    <section className="booking-section">
      <h2>Book Your Appointment</h2>

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={booking.name}
          required
          minLength={3}
          onChange={handleChange}
          className={getClass('name')}
        />
        {errors.name && <div className="error-text">{errors.name}</div>}

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          pattern="[a-z0-9._%+-]+@gmail\.com$"
          value={booking.email}
          required
          onChange={handleChange}
          className={getClass('email')}
        />
        {errors.email && <div className="error-text">{errors.email}</div>}

        <input
          name="phone"
          type="tel"
          placeholder="Your Phone Number"
          value={booking.phone}
          maxLength={10}
          onChange={handleChange}
          className={getClass('phone')}
        />
        {errors.phone && <div className="error-text">{errors.phone}</div>}

        <select
          name="service"
          value={booking.service}
          onChange={(e) => {
            handleChange(e);
            e.target.style.color = e.target.value ? 'green' : 'gray';
          }}
          className={getClass('service')}
          style={{ color: booking.service ? 'green' : 'gray' }}
        >
          <option value="">Select Service</option>
          <option>Hair Styling</option>
          <option>Bridal Makeup</option>
          <option>Facial Glow</option>
          <option>Spa Moments</option>
        </select>
        {errors.service && <div className="error-text">{errors.service}</div>}

        <input
          name="date"
          type="date"
          value={booking.date}
          min="2025-01-03"
          max="2030-12-31"
          required
          onChange={(e) => {
            handleChange(e);
            e.target.style.color = e.target.value ? 'green' : 'gray';
          }}
          style={{ color: booking.date ? 'green' : 'gray' }}
          className={getClass('date')}
        />
        {errors.date && <div className="error-text">{errors.date}</div>}

        <input
          name="time"
          type="time"
          value={booking.time}
          onChange={(e) => {
            handleChange(e);
            e.target.style.color = e.target.value ? 'green' : 'gray';
          }}
          className={getClass('time')}
          style={{ color: booking.time ? 'green' : 'gray' }}
        />
        {errors.time && <div className="error-text">{errors.time}</div>}

        <button type="submit" className="submit-btn">
          {editingId ? 'Update' : 'Confirm Booking'}
        </button>
      </form>

      <h3>📋 All Bookings</h3>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Service</th><th>Date</th><th>Time</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id}>
              <td data-label="Name">{b.name}</td>
              <td data-label="Email">{b.email}</td>
              <td data-label="Phone">{b.phone}</td>
              <td data-label="Service">{b.service}</td>
              <td data-label="Date">{b.date}</td>
              <td data-label="Time">{b.time}</td>
              <td data-label="Actions" className="actions">
                <button className="action-btn edit" onClick={() => handleEdit(b)} title="Edit">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="action-btn delete" onClick={() => handleDelete(b._id)} title="Delete">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Booking;
