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
    const { _profileId } = req.body;
    const decodedid = jwt.decode(_profileId, process.env.JWT_KEY);
    const objectIdString = decodedid.data.replace(/"/g, '');
    const objectId = new ObjectId(objectIdString);
    const profile = await ProfileModel.findById(objectId);
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    profile.isPaid = true;
    await profile.save();
    const PaidProfiles = await ProfileModel.find({
      isPaid: true
    });
    return res.status(200).json({ message: 'Paid successfully', PaidProfiles , profile });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
