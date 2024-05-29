import React from "react";
import { Heading, Img, Text } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}
      className="flex justify-center items-center w-full px-14 py-[74px] md:p-5 bg-white-A700  ">
          <div className="flex flex-col items-center justify-center w-full mt-[5px] gap-[115px] mx-auto max-w-[1200px]">
            <div className="flex flex-row md:flex-col justify-start items-center w-full gap-px md:gap-5">
              <div className="flex flex-col items-center justify-start w-[39%] md:w-full gap-[43px]">
                <div className="flex flex-row justify-start items-start w-full gap-[11px]">
                  <Img src="/images/geet TOURISM.png" alt="realestateone" className="h-[40px] w-[40px]" />
                  <Text size="md" as="p" className="mt-[5px] !text-orange-A700 !font-markoone">
                    GeetTourism
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-7">
                  <Heading as="h6" className="!leading-[160%]">
                    <>
                      59 Town Ship,Ramgarh,
                      <br />
                      Ramgarh,RT 829122, JH, IN
                    </>
                  </Heading>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <Heading as="h6" className="mt-px">
                      +(91) 8580219689
                    </Heading>
                    <Heading as="h6">geettourism@mail.com</Heading>
                  </div>
                  <div className="flex flex-row justify-start w-full gap-3">
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img src="/images/img_icon_facebook.svg" alt="iconfacebook" className="h-[30px] w-[30px]" />
                    </div>
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img src="/images/img_icon_twitter.svg" alt="icontwitter_one" className="h-[30px] w-[30px]" />
                    </div>
                    <Img src="/images/img_icon_instragram.svg" alt="iconinstragram" className="h-[30px] w-[30px]" />
                    <Img src="/images/img_icon_linked_in.svg" alt="iconlinkedin" className="h-[30px] w-[30px]" />
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img src="/images/img_icon_youtube.svg" alt="iconyoutube_one" className="h-[30px] w-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-between items-center w-[72%] md:w-full md:gap-10">
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6">
                    Features
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                    <Heading as="h6">Home </Heading>
                    <Heading as="h6">About</Heading>
                    <Heading as="h6">Contact</Heading>
                    <Heading as="h6">Search</Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6">
                    Information
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
                    <Heading as="h6">Spot</Heading>
                    <Heading as="h6">Spot Details</Heading>
                    <Heading as="h6">List</Heading>
                    <Heading as="h6">Profile</Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6">
                    Documentation{" "}
                  </Heading>
                  <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                    <Heading as="h6" className="mt-0.5">
                      Blog
                    </Heading>
                    <Heading as="h6">FAQ</Heading>
                    <a href="#">
                      <Heading as="h6">Privacy Policy</Heading>
                    </a>
                    <Heading as="h6">License</Heading>
                  </div>
                </div>
               
              </div>
            </div>
            <Heading as="h6">© 2024. All rights reserved.</Heading>
          </div>
        </footer>
  );
}
