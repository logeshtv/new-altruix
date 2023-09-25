import Profile from '@/components/profile/profile';
import Screen from '@/components/screen/Screen';
import Head from 'next/head';
import axios from "axios";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data based on the 'id' parameter
    if (id) {
      console.log(id)
      axios.get(`/api/getById?_profileId=${id}`) // Replace with your API endpoint
        .then((response) => {
          console.log(response.data.profiles);
          setUserData(response.data.profiles);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [id]);

  return (
    <Screen>
      <Head>
        <title>Profile Page</title>
        <meta
          name="description"
          content="User Profile"
        />
      </Head>
        {userData ? (
          
          <div className="flex justify-center items-center min-h-screen ">

          <Profile profileData={userData} />
          </div>
        ) : (
          <p>Loading...</p>

        )}

      </Screen>
  );
}

export default ProfilePage;
