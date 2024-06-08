import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Contact from "components/Contect";
import PaymentDetails from "components/PaymentDetails";
import {useState ,useEffect } from "react";
import axios from "axios";

export default function deshboard() {

  useEffect(() => {
    const authenticate = async () => {
      const username = prompt('Enter your username:');
      const password = prompt('Enter your password:');

      try {
        const responce =  await axios.post('http://localhost:3001/deshboard', {username , password});
         const data = await responce.json()
        if (responce.ok) {
          alert(data.message);
          
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert('Error: ' + error.message);
      }
    };

    authenticate();
  }, []);

  const [activeTab, setActiveTab] = useState('contact');

  return (
    <>
      <Helmet>
        <title>Sannu's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[20px] bg-white-A700">
      <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700   sticky top-0 left-0 " />
      <div className=" text-xl flex bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold ">
      <h1>DESHBOARD</h1>  
      </div>
      <div className="flex space-x-4 mb-6">

        <button
          className={`   text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-10 py-5 text-center me-2 mb-2  ${activeTab === 'contact' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
        <button
          className= {`text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-10 py-5 text-center me-2 mb-2 ${activeTab === 'payment' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('payment')}
        >
          Payment
        </button>
      </div>
      
        {activeTab === 'contact' ? <Contact /> : <PaymentDetails />}
      
    </div>

        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      
    </>
  );
}