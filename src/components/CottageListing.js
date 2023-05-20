import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CottageListing = () => {
  const [reservations, setReservations] = useState({});

  const handleReservation = (cottageId, reservationData) => {
    // Update the reservations state with the reservation data for the specific cottage
    setReservations((prevState) => ({
      ...prevState,
      [cottageId]: reservationData,
    }));
  };

  const isDateBooked = (cottageId, date) => {
    // Check if the date is already booked for the specific cottage
    return (
      reservations[cottageId] &&
      reservations[cottageId].bookedDates.includes(date.toISOString())
    );
  };
  const getCottageColor = (cottageId) => {
    // Define different background colors for each cottage based on its ID
    const colors = ['#ffcc80', '#b2dfdb', '#ffab91', '#c5e1a5', '#9fa8da'];
    const index = cottageId % colors.length;
    return colors[index];
  };
  // Define the cottages array
  const cottages = [
    {
      id: 1,
      name: 'Lakefront Cottage',
      description: 'A cozy cottage with a stunning lakefront view.',
      price: 150,
      bookedDates: ['2023-05-20', '2023-05-21', '2023-05-22'],
    },
    {
      id: 2,
      name: 'Mountain Retreat',
      description: 'Escape to this peaceful mountain retreat.',
      price: 120,
      bookedDates: ['2023-05-25', '2023-05-26'],
    },
    {
      id: 3,
      name: 'Seaside Bungalow',
      description: 'Enjoy the sound of waves in this charming seaside bungalow.',
      price: 180,
      bookedDates: ['2023-06-01'],
    },
    // Add more cottages here
    {
      id: 4,
      name: 'Rustic Cabin',
      description: 'Experience the rustic charm of this secluded cabin.',
      price: 100,
      bookedDates: ['2023-05-28', '2023-05-29', '2023-05-30'],
    },
    {
      id: 5,
      name: 'Luxury Villa',
      description: 'Indulge in luxury at this exquisite lakeside villa.',
      price: 250,
      bookedDates: ['2023-05-23'],
    },
    // Add more cottages here
  ];

  return (
    <div>
      <h2>Cottage Listing</h2>
      {cottages.map((cottage) => (
        <div key={cottage.id} style={{ backgroundColor: getCottageColor(cottage.id) }}>
          <h3>{cottage.name}</h3>
          <p>{cottage.description}</p>
          <p>Price: ${cottage.price} per night</p>
          {/* Reservation form */}
          <form onSubmit={(e) => handleReservation(cottage.id, e.target.elements)}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="date" name="checkInDate" required />
            <input type="date" name="checkOutDate" required />
            <button type="submit">Book Now</button>
          </form>
          {/* Reservation calendar */}
          <h4>Reservation Calendar:</h4>
          <Calendar
            tileDisabled={({ date }) => isDateBooked(cottage.id, date)}
          />
          {/* Show reservation details if a reservation has been made for this cottage */}
          {reservations[cottage.id] && (
            <div>
              <h4>Reservation Details:</h4>
              <p>Name: {reservations[cottage.id].name}</p>
              <p>Email: {reservations[cottage.id].email}</p>
              <p>Check-in: {reservations[cottage.id].checkInDate}</p>
              <p>Check-out: {reservations[cottage.id].checkOutDate}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CottageListing;
