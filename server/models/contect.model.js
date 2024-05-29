import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const contectDataSchema = new Schema(
  {
      name: {
          type: String, 
          
      },
      email: {
          type: String,
          required: true,
          unique: true,
          lowecase: true,
           
      },
      mobileNo:{
          type: String,
          required: true,
      },
      message: {
          type: String,
          required: true,
          trim: true,  
      },
     
      
  },
  {
    timestamps: true
}
)


contectDataSchema.plugin(mongooseAggregatePaginate)
export const contectData  = mongoose.model("contectData", contectDataSchema)