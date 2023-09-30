// pages/api/profile/getByProfileId.js
import ProfileModel from "@/models/ProfileModel";
import connectDB from "@/utils/connectDB";
import jwt from 'jwt-simple';
import {ObjectId } from "mongodb";


export default async (req, res) => {
  if (req.method !== "PUT") {
    return res.status(405).end(); // Method Not Allowed
  }

  await connectDB();
  try {
    const { eventName ,_profileId } = req.body;
    const decodedid = jwt.decode(_profileId, process.env.JWT_KEY);
    const objectIdString = decodedid.data.replace(/"/g, '');
    const objectId = new ObjectId(objectIdString);

    const updatedProfile = await ProfileModel.findOneAndUpdate({_id: objectId ,isPaid: true},{$addToSet: { eventAttended: eventName }},{new: true});
    
    if (!updatedProfile) {
      return res.status(200).json({ message:"User doesn't Paid!!!!", });
    }
    
    const EventProfiles = await ProfileModel.find({
      eventAttended: eventName,
      isPaid: true
    });
    return res.status(200).json({ message: 'Event Add successfully', EventProfiles, updatedProfile });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
