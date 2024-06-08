import React from 'react';


const Email = ({ product, order }) => {
  return (
    <div className="bg-orange-500 p-6 rounded-lg shadow-md text-white">

      <div><h1 className='text-xl flex bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold'>
      Thanks for purchased </h1></div>
      <div className="flex items-center mb-4">
        {/* <img src={product.imageUrl} alt={product.name} className="w-24 h-24 rounded-full mr-4" /> */}
        {/* <h1 className="text-2xl font-bold">{product.name}</h1> */}
      </div>
      <div className="bg-white text-black p-4 rounded-lg">
        <div className="mb-2">
          {/* <span className="font-semibold">Name: </span>{order.name} */}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Email: </span>{order.email}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Payment ID: </span>{order.razorpayPaymentId}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Order ID: </span>{order.razorpayOrderId}
        </div>
        <div>
          <span className="font-semibold">Amount: </span>${order.amount}
        </div>
        <div>
          <h1 className='text-xl flex bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold'>Stay connected with Geet Tourism</h1>
        </div>
      </div>
    </div>
  );
};

export default Email;
