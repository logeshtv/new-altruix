// pages/api/profile/getByProfileId.js
import ProfileModel from "@/models/ProfileModel";
import connectDB from "@/utils/connectDB";

export default async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  await connectDB();

  try {
    const { _profileId } = req.query;
    console.log(_profileId)
    const profiles = await ProfileModel.findById(_profileId);

    return res.status(200).json({ profiles });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
