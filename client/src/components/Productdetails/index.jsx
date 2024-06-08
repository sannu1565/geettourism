import React from "react";
import { Img, Heading, Button, TextArea, Radio, RadioGroup, Text, RatingBar, GoogleMap } from "../../components";
import{useParams} from 'react-router-dom';
import Products from "ListingData";
import { Link } from "react-router-dom";


export default function Productdetails({...porps}){
  const { id } = useParams();
  const product = Products.find(p => p.id === parseInt(id));

  return (
    <div className="flex flex-col items-center justify-start w-full gap-[100px]">
    <div className="flex flex-col items-center justify-start w-full gap-10">
    <div className="flex flex-row justify-center w-full">
    <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px] ">
        <div className="flex flex-row justify-start w-[66%] md:w-full">
            <Img
              src={product.imageUrl}
              alt="image"
              className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6">
            <Img
              src={product.imageUrl1}
              alt="image_one"
              className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
            />
            <div className="h-[263px] w-full relative">
              <Img
                src={product.imageUrl2}
                alt="image_two"
                className="justify-center h-[263px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[10px]"
              />
              <Button
                color="white_A700"
                size="lg"
                shape="round"
                leftIcon={<Img src="images/img_icon_image.svg" alt="icon - image" />}
                className="gap-1.5 bottom-[6%] right-[4%] m-auto text-gray-900 font-bold min-w-[122px] absolute"
              >
                3 more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-row md:flex-col justify-start items-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
          <div className="flex flex-col items-center justify-start w-[full] md:w-full gap-6">
            <div className="flex flex-col items-center justify-start w-full gap-11 p-[39px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
              <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                  <Heading size="3xl" as="h1" className="tracking-[-0.56px]">
                    {product.name}
                  </Heading>
                  <Heading size="lg" as="h2" className="tracking-[-0.40px]">
                    {product.address}
                  </Heading>
                </div>
                <div className="flex flex-row sm:flex-col w-[100%] gap-9">
                  <div className="flex flex-col items-start justify-start md:w-full gap-[5px] p-[5px] border-gray-600_02 border border-solid bg-white-A700 rounded-[10px]">
                    <Heading size="2xl" as="h3" className="ml-[17px] md:ml-0 tracking-[-0.48px]">
                      ₹ {product.price}
                    </Heading>
                    <Heading size="xs" as="h4" className="ml-[17px] md:ml-0 !text-gray-600_02">
                      Online / Cash Payment
                    </Heading>
                  </div>
                  <Link to={`/Product/${product.id}`}>
                  <Button className="h-[48px] px-[31px] sm:px-5 text-white-A700 text-base font-semibold bg-gray-900 min-w-[156px] rounded-[10px] mt-5">
                Book Now
              </Button>
              </Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full pt-[3px] gap-3">
                <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                  {product.name}
                </Heading>
                <Text as="p" className="!text-gray-600_02">
                  {product.description}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-6">
                <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                  <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
                    Local Map
                  </Heading>
                  
                </div>
                <div className="w-full">
                <iframe src= {product.map} width="1150" height="400"></iframe>
                </div>
                
              </div>
            </div>
           
            <div className="flex flex-col items-start justify-center w-full gap-[21px] p-[39px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
              <Heading size="3xl" as="h3" className="mt-[3px] tracking-[-0.56px]">
                Agent Information
              </Heading>
              <div className="flex flex-row justify-start items-center w-full gap-6">
                <Img
                  src="images/img_rectangle_5599.png"
                  alt="image_three"
                  className="w-[150px] md:h-auto object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-start justify-start w-[26%] gap-0.5">
                  <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                     Kumari Rina 
                  </Heading>
                  <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                    <RatingBar value={1} isEditable={true} size={16} className="flex justify-between" />
                    <Heading as="h6" className="mr-1.5">
                      4 review
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-2.5 py-0.5">
                    <Img src="images/img_icon_20px_email.svg" alt="icon20pxemail" className="h-[20px] w-[20px]" />
                    <Text size="xs" as="p" className="mt-0.5 !text-gray-600_02">
                      krina@geettourism .com
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-2.5 py-0.5">
                    <Img src="images/img_icon_20px_call.svg" alt="icon20pxcall" className="h-[20px] w-[20px]" />
                    <Text size="xs" as="p" className="!text-gray-600_02">
                      +91 9876768945
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
    </div>
    </div>
  );
  
}