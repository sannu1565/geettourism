import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const bookingDataSchema = new Schema(
{
  productName:{
    type: String 
  },
  name:{
    type: String
  },
  email:{
    type: String
  } ,
  mobile:{
    type: String
  } ,
  razorpayPaymentId:{
  type: String
  } ,
  razorpayOrderId: 
  {
    type: String
  },
 amount :{
  type : String
 },
dateOfBooking:{
  type: Date
}

},
{
  
  timestamps:true
}
)

bookingDataSchema.plugin(mongooseAggregatePaginate)
export const bookingData  = mongoose.model("bookingData", bookingDataSchema)



