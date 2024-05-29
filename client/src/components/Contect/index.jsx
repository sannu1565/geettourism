import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Contact = () => {
  const [contectData, setContectData] = useState([]);

  useEffect(() => {
    const fetchContectData= async () => {
        try {
            const response = await axios.get('http://localhost:3001/contect');
            setContectData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

      fetchContectData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Contact Form</h2>
      
      <ul className=' '>
        {contectData.map(contectData => (
         <div key={contectData.id} className="mb-2">

            <li> Name : {contectData.name}</li>
            <li> Email : {contectData.email}</li>
            <li> MobileNo : {contectData.mobileNo}</li>
            <li> message : {contectData.message}</li>
         </div>
         
        ))}
      </ul>
      
    </div>
  );
};

export default Contact;
