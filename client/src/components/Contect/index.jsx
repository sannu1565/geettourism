import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Contact = () => {
  const [contectData, setContectData] = useState([]);

  useEffect(() => {
    const fetchContectData= async () => {
        try {
            const response = await axios.get('https://geettourism.onrender.com/contect');
            setContectData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

      fetchContectData();
  }, []);

  return (
    <><div>
      <h3 className='text-xl flex bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold '>Contect Details</h3>
    </div><div className="overflow-x-auto">

        <table className='min-w-full border-collapse border border-gray-200'>
          <thead>
            <tr className='bg-gray-100'>
              <th className="border border-gray-200 px-4 py-2">Name</th>
              <th className="border border-gray-200 px-4 py-2">Email</th>
              <th className="border border-gray-200 px-4 py-2">Mobile</th>
              <th className="border border-gray-200 px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {contectData.map(contectData => (
              <tr key={contectData.id} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{contectData.name}</td>
                <td className="border border-gray-200 px-4 py-2">{contectData.email}</td>
                <td className="border border-gray-200 px-4 py-2">{contectData.mobileNo}</td>
                <td className="border border-gray-200 px-4 py-2">{contectData.message}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div></>
  );
};

export default Contact;
