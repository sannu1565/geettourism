import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, TextArea, Radio, RadioGroup, Text, RatingBar, GoogleMap } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Productdetails from "components/Productdetails";



export default function PropertyDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Sannu's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
      <Header className="flex justify-center  items-center  md:h-auto p-[19px] bg-white-A700   sticky top-0 left-0  w-full z-1" />
      
         <Productdetails/>
        
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}
