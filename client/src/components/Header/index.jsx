import React from "react";
import { Link } from "react-router-dom";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Img, Heading, Text } from "./..";


export default function Header({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-10 max-w-[1200px] ">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Img src="/images/geet TOURISM.png" alt="geet" className="h-[70px] w-[70px]" />
          <Text size="md" as="p" className="mt-[15px] !text-red-600 !font-markoone">
            GeetTourism
          </Text>
        </div>
        <div className="flex flex-row sm:flex-col justify-between items-center w-[51%] md:w-full sm:gap-10  sm:w-full gap-15  ">
          <div className="flex flex-row w-[30%] sm:w-full gap-20 md:w-full sm:gap-10"> </div>
            <div className="flex flex-row justify-start items-start w-[20%] gap-1.5">
            <Link to="/" ><Heading  as="h6">Home</Heading> </Link>
            </div>
            
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
            <Link to="/spot" ><Heading as="h6">Explore</Heading> </Link>
              
            </div>
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
              <Link to="/Product/1" ><Heading as="h6">Booking</Heading> </Link>
              
            </div>
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
            <Link to="/ContactPage" ><Heading as="h6">Contact</Heading> </Link>
         </div>

         <div className="flex flex-row justify-start items-start w-[25%] gap-1"> 
         <Link to="/aboutus" ><Heading as="h6">AboutUs</Heading></Link>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-2.5">
          <Input
            size="s"
            shape="square"
            name="search"
            placeholder="Search"
            value={searchBarValue1}
            onChange={(e) => setSearchBarValue1(e)}
            prefix={<Img src="/images/img_icon_24px_search.svg" alt="icon / 24px / search" className="cursor-pointer" />}
            suffix={
              searchBarValue1?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue1("")} height={24} width={24} fillColor="#191919ff" />
              ) : null
            }
            className="w-[55%] gap-2 text-gray-900 font-bold"
          />
        
        </div>
      </div>
    </header>
  );
}
