import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const PaymentDetails = () => {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const fetchBookingData= async () => {
        try {
            const response = await axios.get('http://localhost:3001/booking');
            setBookingData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

      fetchBookingData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment Details</h2>
      
      <ul>
        {bookingData.map(bookingData => (
         <div key={bookingData.id} className="mb-2">

            <li>{bookingData.name}</li>
            <li>{bookingData.email}</li>
            <li>{bookingData.mobile}</li>
            <li>{bookingData.razorpayPaymentId}</li>
            <li>{bookingData.razorpayOrderId}</li>
         </div>
         
        ))}
      </ul>
      
    </div>
  );
};

export default PaymentDetails;