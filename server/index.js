// require('dotenv').config({path: './env'})
import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { contectData} from "./models/contect.model.js";
import { bookingData } from "./models/booking.model.js";
import Razorpay from "razorpay"
import { Resend } from "resend";
import nodemailer from "nodemailer"
import cors from "cors"
import bodyParser from "body-parser";



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
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});



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
  const { productName,name, email, mobile, razorpayPaymentId, razorpayOrderId ,amount , dateOfBooking} = req.body;
  const booking = new bookingData({productName, name, email, mobile, razorpayPaymentId, razorpayOrderId ,amount , dateOfBooking});
  try {
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).send(error);
  }

  
});

app.post('/booking-sand', async (req, res) => {
  const { name, email, mobile, razorpayPaymentId, razorpayOrderId, html } = req.body;
  const transporter =  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kumarsannu030@gmail.com',
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: 'kumarsannu030@gmail.com',
    to: email,
    subject: 'Payment mail',
    text: 'Thanks for booking for this tour . we will reach out you soon for tour ',
    
    
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      if (!res.headersSent) {
          return res.status(500).send('Error sending email');
      }
  } else {
      console.log('Email sent: ' + info.response);
      if (!res.headersSent) {
          return res.status(200).send('Email sent successfully');
      }
  }
  });
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

const users = [
  { username: 'Sannu1565', password: 'Sannu@1565' },
  { username: 'Sannu1234', password: 'Sannu@6699' },
];

app.post('/deshboard', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find (u => u.username === username && u.password === password);
  
  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
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



      