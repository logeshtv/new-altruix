// pages/api/profile/getByProfileId.js
import ProfileModel from "@/models/ProfileModel";
import connectDB from "@/utils/connectDB";

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001/');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method !== "GET") {
    return res.status(405).end(); 
  }

  await connectDB();

  try {
    const profiles = await ProfileModel.find();
    return res.status(200).json({ profiles });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
