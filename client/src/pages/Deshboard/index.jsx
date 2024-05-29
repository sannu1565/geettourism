import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Contact from "components/Contect";
import PaymentDetails from "components/PaymentDetails";
import {useState } from "react";

export default function deshboard() {
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <>
      <Helmet>
        <title>Sannu's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-white-A700">
        <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700   sticky top-0 left-0 " />
        <div className="flex flex-col items-center justify-start w-full gap-[100px]"></div>
       

          <div className="p-6">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'contact' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'payment' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('payment')}
        >
          Payment
        </button>
      </div>
      <div>
        {activeTab === 'contact' ? <Contact /> : <PaymentDetails />}
      </div>
    </div>

       
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}