import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    Name: {type: String, required: true},
    email: {type: String, required: true},
    phoneNo: {type: Number, required: true},
    collegeName: {type: String, required: true},
    collegeRegistrationNumber : {type: Number, required: true},
    eventInterest: [{ type: String }],
    eventAttended: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};

const ProfileModel = mongoose.model("Profile", profileSchema);


export default ProfileModel;