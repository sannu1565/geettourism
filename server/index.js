// require('dotenv').config({path: './env'})
import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { contectData} from "./models/contect.model.js";
import { bookingData } from "./models/booking.model.js";
import Razorpay from "razorpay"
import { Resend } from "resend";
import cors from "cors"

dotenv.config({
    path: './.env'
})
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};
const app = express();

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());
app.use(cors(corsOptions));

app.post('/contect', async (req, res) => {
    const { name, email, mobileNo , message } = req.body;
    const newContect = new contectData({ name, email, mobileNo, message });

    try {
      await newContect.save();
      res.status(201).send('Form data saved successfully');
    } catch (error) {
      res.status(400).send('Error saving form data');
    }
  });

app.post('/order', async(req ,res ) =>{
  try {
    var instance = new Razorpay({
      key_id: 'rzp_test_VA3p4eyiVuw53g',
      key_secret: 'jDNKXWmrY2qB6xk5CyneKRaK',
    });

   
    if(!req.body){
      return res.status(400).sand ("bad request");

    }
    const options = req.body;
    const order = await instance.orders.create(options);
  
    if (!order){
      return res.status (400).sand("bad request")
    }
    res.json(order);

  } catch (error) {
    console.log(error);
  }
});


app.post('/booking', async (req, res) => {
  const { name, email, mobile, razorpayPaymentId, razorpayOrderId } = req.body;
  const booking = new bookingData({ name, email, mobile, razorpayPaymentId, razorpayOrderId });
  try {
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).send(error);
  }

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to:  {email},
      subject: 'tasting',
      html: '<strong>it works!</strong>',
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get('/booking', async (req, res) => {
    try {
    const bookData = await bookingData.find();
    res.json(bookData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




app.get('/contect', async (req, res) => {
  try {
      const Data = await contectData.find();
      res.json(Data);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});


  connectDB()
  .then(() => {
      app.listen(process.env.PORT || 8000, () => {
          console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
      })
  })
  .catch((err) => {
      console.log("MONGO db connection failed !!! ", err);
  })



      