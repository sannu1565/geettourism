import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const bookingDataSchema = new Schema(
{
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

},
{
  
  timestamps:true
}
)

bookingDataSchema.plugin(mongooseAggregatePaginate)
export const bookingData  = mongoose.model("bookingData", bookingDataSchema)



