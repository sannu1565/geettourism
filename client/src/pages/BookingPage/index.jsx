import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, TextArea, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Bookingcard from "components/Bookingcard";
import  { useState } from 'react';
import axios from "axios";
import 'react-datepicker/dist/react-datepicker.css';
import{useParams} from 'react-router-dom';
import Products from "ListingData";
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from "components/PDFDocument";
// import { renderToStaticMarkup } from 'react-dom/server';

export default function ReservationPage() { 
  const { id } = useParams();
  const product = Products.find(p => p.id === parseInt(id));
  


const [name ,setname] = useState('');
const [email ,setemail] = useState('');
const [mobile ,setmobile] = useState('');
const[dateOfBooking , setdateOfBooking] = useState('')
const [paymentSuccessful, setPaymentSuccessful] = useState(false);
const [pdfData, setPdfData] = useState(null);


const PaymentHandler = async(e)=>{
  const amount = 499900;
  const currency = 'INR';
  const receiptId = '13333333345';
  const response = await fetch('https://geettourism.onrender.com/order',{
   method: 'POST',
   headers: {
   'content-Type': 'application/json',  
    
},
body: JSON.stringify({
  amount,
  currency,
  receipt :receiptId, 
  
}),
  })
  const order = await response.json();
  console.log('order', order);

  var options = {
    key:'rzp_test_VA3p4eyiVuw53g',
    amount : product.price *100,
    currency,
    name: 'Geet tourism',
    description: 'Test Transaction',
    order_id: order.id ,
    Image:"/images/geet TOURISM.png",
    handler: async function (response) {
      const paymentData = {
        productName : product.name,
        productImage : product.imageUrl,
        name,
        email,
        mobile,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        amount :product.price,
        dateOfBooking,

        
      };
      alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);

      setPaymentSuccessful(true);
      setPdfData(paymentData);

      await axios.post('https://geettourism.onrender.com/booking', paymentData);
        alert('Payment Successful');
       
      await axios.post('https://geettourism.onrender.com/booking-sand', paymentData);
        alert(' Sand Successful');
        
      
       
       },

 "prefill": {
        name,
        email,
        contact:mobile,
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
  }

  var rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', function (response){
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
  })
          rzp1.open();
          e.preventDefault();



};
 return (
 <>
	<Helmet>
    <title>Sannu's Application1</title>
     <meta name="description" content="Web site created using create-react-app" />
     </Helmet>
  <div className="flex flex-col items-center justify-start w-full gap-[99px] overflow-auto bg-white-A700">
   <div className="flex flex-col items-center justify-start w-full">
   <Header className=" flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700  sticky top-0 left-0 "/>      
   <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-11 md:px-5 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-[15px]">
                <Heading size="6xl" as="h1" className="tracking-[-1.08px] text-center bg-clip-text text-xl flex bg-gradient-to-r from-yellow-500 via-purple-800 to-pink-700 text-transparent font-bold">
                  Book Your Trip
                </Heading>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-center w-full gap-20 p-[23px] md:gap-5 sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px] ">
                <div className="flex flex-col items-center justify-start w-[44%] md:w-full ml-[25px] gap-10 sm:ml-5 ">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px] ">
                    <div className="" >

                  <Bookingcard/>
                    </div>
                    </div>
                    </div>
            
              <div className="flex flex-row md:flex-col justify-start items-center w-20% gap-[50px] p-[23px] md:gap-5 sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                <div className="flex flex-col items-center justify-start w-[100%] md:w-full ml-[25px] gap-10 sm:ml-5">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    <Heading size="3xl" as="h2" className="tracking-[-0.56px]">
                    BOOKING
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                    <label className="w-full gap-4 font-semibold  
                   border-solid  fon">Name</label>
                   <input type="text"  
                   name="name"
                   value={name} 
                   onChange={ (e) => setname(e.target.value)}
                  className=" w-full gap-4 font-semibold  
                   border-solid border-4" placeholder="Full name" required />
                   </div>
                <div>
                  <label className="w-full gap-4 font-semibold  
                   border-solid ">Email address</label>
                 <input type="email" 
                 name="email"
                 value={email} 
                 onChange={ (e) => setemail(e.target.value)}
                 id="email" className="w-full gap-4 font-semibold  
                   border-solid border-4" placeholder="mail@mail.com" required />
                 </div> 

              <div>
            <label 
           className="w-full gap-4 font-semibold border-solid ">Mobile number</label>
            <input type="tel" id="phone" 
            name="mobile"
             value={mobile} 
             onChange={ (e) => setmobile(e.target.value)}
             className="w-full gap-4 font-semibold border-solid " 
                   placeholder="Mobile no" required />
<div className="gap-6">
        <label 
           className="w-full gap-6 font-semibold border-solid ">Date of Booking</label>
            <input type="date" id="booking" 
            name="bookingDate"
             value={dateOfBooking} 
             onChange={ (e)=>setdateOfBooking(e.target.value) }
             className="w-full gap-4 font-semibold border-solid " 
                   placeholder="booking date" required />
                   </div>  
                      
                    </div>
                  </div>
                 
                  <Button  type="submit" onClick={PaymentHandler}
                disabled={!email} size="2xl" shape="round" className="w-full sm:px-5 font-semibold">
                    Book Now
                  </Button>

                  {/* PDF CREATE */}

               {paymentSuccessful && pdfData &&(
                <PDFDownloadLink
                document= {<PDFDocument data={pdfData}/>}
                fileName="booking_details.pdf"
                className="bg-blue-500 text-white p-2 rounded"
              >
                {({ blob, url, loading, error }) =>
                  loading ? 'Loading document...' : 'Download PDF'
                }
              </PDFDownloadLink>
                  )}
   
                </div>
               </div>
               
              
        </div>  

</div>          
</div>       
 </div>
 <Footer className="flex justify-center items-center w-full" />     
 </div>   
 </>  
);
}
