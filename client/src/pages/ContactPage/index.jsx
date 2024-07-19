import React,{useState} from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, TextArea,Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from "axios";


export default function ContactPagePage() {
  const [name ,setname] = useState('');
  const [email ,setemail] = useState('');
  const [mobileNo ,setmobileNo] = useState('');
  const [message ,setmessage] = useState('');
 
  
  // const handleChange = (e) => {


  //   setContactData({ ...contactData, [e.target.names]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://geettourism.onrender.com/contect/', {name, email ,mobileNo ,message});
      alert('Form submitted successfully');
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <Helmet>
        <title>Geet Tourism</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
        <Header className="flex justify-center  items-center  md:h-auto p-[19px] bg-white-A700   sticky top-0 left-0  w-full z-1" />
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-11 md:px-5 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-[15px]">
                <Heading size="6xl" as="h1" className="tracking-[-1.08px] text-center">
                  Get in touch
                </Heading>
                <Text as="p" className="!text-gray-600_02 text-center">
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                  demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                  the pain and trouble.
                </Text>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[50px] p-[23px] md:gap-5 sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                <div className="flex flex-col items-center justify-start w-[44%] md:w-full ml-[25px] gap-10 sm:ml-5">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    <Heading size="3xl" as="h2" className="tracking-[-0.56px]">
                      Send a message
                    </Heading>
                    {/* <div className="flex flex-col items-center justify-start w-full gap-3"> */}
                    
              <div className="w-full gap-5 flex flex-col justify-center p- 1 m-5 ">
             <div className=" w-full">
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
             value={mobileNo} 
             onChange={ (e) => setmobileNo(e.target.value)}
             className="w-full gap-4 font-semibold border-solid " 
                   placeholder="Mobile no" required />
        </div>
   <div className="w-full gap-2">             
  <label  className="w-full gap-4 font-semibold border-solid">
    Your message
    </label>
  <textarea id="message"
  name="message"
  value={message} 
  onChange={ (e) => setmessage(e.target.value)}
  rows="4" 
  className="w-full gap-4 font-semibold " 
  placeholder="Write your thoughts here..."></textarea>

                </div>
              {/* </div>  */}
                    
                  </div>
                  <Button size="2xl"  type ="submit" shape="round" className="w-full sm:px-5 font-semibold">
                    Send Request
                  </Button>
                </div>
                </div>
                <div className="h-[534px] w-px md:w-full md:h-px my-[25px] bg-blue_gray-100_01" />
                <div className="flex flex-col items-center justify-start w-[46%] md:w-full gap-10">
                  <div className="flex flex-col items-center justify-start w-[96%] md:w-full gap-4">
                    <div className="flex flex-col items-start justify-start w-full gap-[3px]">
                      <Heading size="lg" as="h3" className="tracking-[-0.40px]">
                        Office Address
                      </Heading>
                      <Heading size="md" as="h4" className="!text-gray-600_02 !font-semibold">
                        <>
                        59 Town Ship,Ramgarh,
                        <br />
                       Ramgarh, RT 829122, JH, IN      
                        </>
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-2.5">
                      <div className="flex flex-row justify-start items-center w-full gap-[13px] py-0.5">
                        <Img src="images/img_icon_20px_call.svg" alt="icon24pxcall" className="h-[24px] w-[24px]" />
                        <Heading size="md" as="h5" className="!text-gray-600_02 !font-semibold">
                          (+91)8580219689
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                        <Img src="images/img_icon_24px_email.svg" alt="icon24pxemail" className="h-[24px] w-[24px]" />
                        <Heading size="md" as="h6" className="mt-0.5 !text-gray-600_02 !font-semibold">
                        geettourism@mail.com
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-3">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Social
                    </Heading>
                    <div className="flex flex-row justify-start gap-4">
                      <Img
                        src="images/img_social_icon_facebook.svg"
                        alt="socialicon_one"
                        className="h-[30px] w-[30px]"
                      />
                      <Img src="images/img_social_icon_linkedin.svg" alt="socialicon" className="h-[30px] w-[30px]" />
                      <Img
                        src="images/img_social_icon_twitter.svg"
                        alt="socialicon_five"
                        className="h-[30px] w-[30px]"
                      />
                      <Img src="images/img_social_icon_youtube.svg" alt="socialicon" className="h-[30px] w-[30px]" />
                      <Img src="images/img_social_icon_rss.svg" alt="socialiconrss" className="h-[30px] w-[30px]" />
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
      </form>
    </>
  );
}
