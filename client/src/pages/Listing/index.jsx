import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, GoogleMap, SelectBox, Input, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Products from "ListingData";
import { Link } from "react-router-dom";


export default function ListingPage() {
  const [searchBarValue8, setSearchBarValue8] = React.useState("");


  const  Product = Products.map(product =>
  <div key={product.id} >
        <Img
          src={product.imageUrl}
          alt="image_one"
          className="w-full md:h-auto sm:w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
        />
        <div className="flex flex-col justify-center w-full p-[19px] rounded-bl-[20px] rounded-br-[10px] border-red-100_01 border border-solid bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[35px] my-3.5 md:px-5 max-w-[344px]">
        <Heading size="3xl" as="h5" className=" bg-red-500  bg-clip-text " >{product.name}</Heading>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-[35px] my-3.5 md:px-5 max-w-[344px]">
            <div className="flex flex-row justify-start items-center w-full gap-5">
              <Img src="images/img_icon_map_2.svg" alt="image_two" className="h-[24px] w-[24px]" />
              <Heading size="1xl" as="h6">{product.address}</Heading>
            </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full pr-[47px] md:pr-5">
             
            <Link to={`/${product.id}`}>
               <Button className="h-[48px] px-[31px] sm:px-5 text-white-A700 text-base font-semibold bg-gray-900 min-w-[156px] rounded-[10px]">
                View Details
              </Button>
              </Link>
              <Heading size="3xl" as="h6" className="tracking-[-0.48px]">
                {product.price}
              </Heading>
            </div>
          </div>
          </div>
         
      
    ); 
  

  return (
    <>
      <Helmet>
        <title>Sannu's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
        <Header className="flex justify-center  items-center  md:h-auto p-[19px] bg-white-A700   sticky top-0 left-0  w-full z-1" />
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px] md:px-5 max-w-[1200px]">
            <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    Tourism spot
                  </Heading>
                  <div className="flex flex-row justify-start items-center mt-[7px] gap-2 sm:mt-0">
                    <Heading size="md" as="h3" className="mt-0.5 !text-orange-A700">
                      Explore All
                    </Heading>
                    <Img src="images/img_icon_24px_v.svg" alt="icon24pxv_one" className="h-[24px] w-[24px]" />
                  </div>
                </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            
              <div className="flex flex-col items-center justify-start w-[90%] md:w-full gap-[60px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="justify-center w-full gap-6 grid-cols-3 md:grid-cols-1 md:gap-5 grid">
                  {Product}
        
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col justify-between w-full sm:gap-10">
                  <div className="flex flex-row justify-start gap-[5px]">
                    <Button color="gray_700" variant="outline" shape="round" className="font-semibold min-w-[48px]">
                      1
                    </Button>
                    <Button
                      color="blue_gray_100_02"
                      variant="outline"
                      shape="round"
                      className="font-semibold min-w-[48px]"
                    >
                      2
                    </Button>
                    <Button
                      color="blue_gray_100_02"
                      variant="outline"
                      shape="round"
                      className="font-semibold min-w-[48px]"
                    >
                      3
                    </Button>
                    <Button
                      color="blue_gray_100_02"
                      variant="outline"
                      shape="round"
                      className="font-semibold min-w-[48px]"
                    >
                      4
                    </Button>
                    <Button
                      color="blue_gray_100_02"
                      variant="outline"
                      shape="round"
                      className="font-semibold min-w-[48px]"
                    >
                      5
                    </Button>
                  </div>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    rightIcon={<Img src="images/img_icon_16px_arrow_right.svg" alt="icon / 16px / arrow - right" />}
                    className="gap-1 font-semibold min-w-[134px]"
                  >
                    Next Page
                  </Button>
                </div>
              </div>
            </div>
        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}
