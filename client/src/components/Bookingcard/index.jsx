import React from "react";
import { Img, Heading, Button, TextArea, Radio, RadioGroup, Text, RatingBar, GoogleMap } from "../../components";
import{useParams} from 'react-router-dom';
import Products from "ListingData";
import PropertyDetailsPage from "pages/SpotDetails";
import { Link } from "react-router-dom";



export default function Bookingcard({...props}){
  const { id } = useParams();
  const product = Products.find(p => p.id === parseInt(id));
return(
  <div className="flex flex-col md:flex-col justify-start gap-3 ">
      <Img
            src={product.imageUrl}
            avlt="image_one"
            className="w-full md:h-auto sm:w-full rounded-[10px] object-cover"
          />

          <Heading size="3xl" as="h1" className="tracking-[-0.56px]">
                    {product.name}
                  </Heading>

                  <div className="flex flex-col items-start justify-start md:w-full gap-[5px] p-[5px] border-gray-600_02 border border-solid  rounded-[10px]">
                    <Heading size="2xl" as="h3" className="ml-[17px] md:ml-0 tracking-[-0.48px]">
                      ₹ {product.price}
                    </Heading>
                    <Heading size="xs" as="h4" className="ml-[17px] md:ml-0 !text-gray-600_02">
                      Online / Cash Payment
                    </Heading>
                  </div>

                  <Link to="/spot"> <Button size="2xl" shape="round" className="w-full sm:px-5 font-semibold">
                    Back in Spot
                  </Button>
                  </Link>
  </div>

);
}