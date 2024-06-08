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
    <><div>
      <h3 className='text-xl flex bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold '>Payment Details</h3>
    </div><div className="overflow-x-auto">


        <table className='min-w-full  border-gray-200'>
          <thead>
            <tr className='bg-gray-100'>
              <th className="border border-gray-200 px-4 py-2">Product Name</th>
              <th className="border border-gray-200 px-4 py-2">Name</th>
              <th className="border border-gray-200 px-4 py-2">Email</th>
              <th className="border border-gray-200 px-4 py-2">Mobile</th>
              <th className="border border-gray-200 px-4 py-2">Razorpay Payment ID</th>
              <th className="border border-gray-200 px-4 py-2">Razorpay Order ID</th>
              <th className="border border-gray-200 px-4 py-2">Amount ₹ </th>
              <th className="border border-gray-200 px-4 py-2">Date of Booking</th>
              
            </tr>
          </thead>
          <tbody>
            {bookingData.map(bookingData => (
              <tr key={bookingData.id} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{bookingData.productName}</td>
                <td className="border border-gray-200 px-4 py-2">{bookingData.name}</td>
                <td className="border border-gray-200 px-4 py-2">{bookingData.email}</td>
                <td className="border border-gray-200 px-4 py-2">{bookingData.mobile}</td>
                <td className="border border-gray-200 px-4 py-2">{bookingData.razorpayPaymentId}</td>
                <td className="border border-gray-200 px-4 py-2">{bookingData.razorpayOrderId}</td>
                <td className="border border-gray-200 px-4 py-2">{bookingData.amount}</td>
                <td className="border border-gray-200 px-4 py-2">{bookingData.dateOfBooking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></>
  );
};

export default PaymentDetails;