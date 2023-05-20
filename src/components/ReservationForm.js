import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const ReservationForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic
    // e.g., make a reservation request
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        startDate: '',
        endDate: '',
        guests: 1,
      }}
      validate={(values) => {
        const errors = {};

        // Add validation logic if required

        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <Field type="date" id="startDate" name="startDate" />
          <ErrorMessage name="startDate" component="div" />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <Field type="date" id="endDate" name="endDate" />
          <ErrorMessage name="endDate" component="div" />
        </div>
        <div>
          <label htmlFor="guests">Guests</label>
          <Field type="number" id="guests" name="guests" min="1" />
          <ErrorMessage name="guests" component="div" />
        </div>
        <button type="submit">Book Now</button>
      </Form>
    </Formik>
  );
};

export default ReservationForm;