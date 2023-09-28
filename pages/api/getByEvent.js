// pages/api/profile/getByProfileId.js
import ProfileModel from "@/models/ProfileModel";
import connectDB from "@/utils/connectDB";

export default async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }
  await connectDB();
  try {
    const { eventName } = req.body;
    const EventProfiles = await ProfileModel.find({
      eventAttended: eventName,
      isPaid: true
    });
    return res.status(200).json({ EventProfiles });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
