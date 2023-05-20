import React from 'react';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bookings: [
      { id: 1, cottageName: 'Cozy Cottage', startDate: '2023-06-01', endDate: '2023-06-05' },
      { id: 2, cottageName: 'Rustic Retreat', startDate: '2023-07-10', endDate: '2023-07-15' },
    ],
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <h3>Bookings</h3>
      {user.bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {user.bookings.map((booking) => (
            <li key={booking.id}>
              <div>
                <strong>Cottage:</strong> {booking.cottageName}
              </div>
              <div>
                <strong>Start Date:</strong> {booking.startDate}
              </div>
              <div>
                <strong>End Date:</strong> {booking.endDate}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserProfile;
