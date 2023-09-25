// pages/api/profile/getByProfileId.js
import ProfileModel from "@/models/ProfileModel";
import connectDB from "@/utils/connectDB";
import NextCors from 'nextjs-cors';

export default async (req, res) => {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
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
