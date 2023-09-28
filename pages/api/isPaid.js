// pages/api/profile/getByProfileId.js
import ProfileModel from "@/models/ProfileModel";
import connectDB from "@/utils/connectDB";

export default async (req, res) => {
  if (req.method !== "PUT") {
    return res.status(405).end(); // Method Not Allowed
  }

  await connectDB();
  try {
    const { _profileId } = req.query;
    const profile = await ProfileModel.findById(_profileId);
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
