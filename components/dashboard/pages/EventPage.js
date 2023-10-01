import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Dashnavbar from "../components/navbar/navbar";
import RegisterationAccess from "@/lib/data/RegistrationAccess";
import ViewTable from "../table/table";
import { QrScanner } from "@yudiel/react-qr-scanner";


export default function EventPage({ eventName }) {
  const { data: session } = useSession();
  const [isAllowed, setIsAllowed] = useState(false);
  const [eventProfile, setEventProfile] = useState([]);
  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (session) {
      const permission_granted = RegisterationAccess[eventName];
      setIsAllowed(permission_granted.includes(session.user.email));
    }
  }, [session]);

  const handleScan = async (data) => {
    if (data) {
      try {
        setLoading(true); // Set loading state while making the request
        const res = await axios.put(`/api/eventAttended`, {
          eventName: eventName,
          _profileId: data,
        });
        if (res.data && res.data.EventProfiles && res.data.updatedProfile) {
          setEventProfile(res.data.EventProfiles);
          setProfile(res.data.updatedProfile);
          setMessage(""); // Clear any previous error messages
        } else {
          if (res.data && res.data.message) {
            setMessage(res.data.message);
          } else {
            setMessage("An error occurred while processing your QR code.");
          }
        }
        setLoading(false); // Reset loading state after request is complete
      } catch (err) {
        console.error(err);
        setError("An error occurred while processing your QR code.");
        setLoading(false); // Reset loading state in case of error
      }
    }
  };
  

  return (
    <>
      <Dashnavbar />
      {!isAllowed ? (
        <div className="flex flex-col items-center justify-center mt-32">
          <div className="text-5xl mb-2 text-aneesh">
            You don't have permission to access this page...
          </div>
          <div>
            Please sign in with authorized mail or contact the website team.
          </div>
        </div>
      ) : (
        <div className="sm:p-4 p-8 flex">
          <div className="w-full">
          <div className="overflow-x-auto w-full  px-4 sm:rounded-lg ">
            <table className="table text-primary">
              <thead>
                <tr className=" uppercase bg-primary-light h-12 w-full">
                    <th>
                      <div className=" text-xl text-primary">Name</div>
                    </th>
                    <th>
                      <div className=" text-xl text-primary">Email</div>
                    </th>
                    <th>
                      <div className=" text-xl text-primary">Phone Number</div>
                    </th>
                    <th>
                      <div className=" text-xl text-primary">CollegeName</div>
                    </th>
                    <th>
                      <div className=" text-xl text-primary">Payment</div>
                    </th>

                </tr>
              </thead>
              <tbody>
                {eventProfile.map((user) => (
                  <tr className="hover bg-primary-light">
                    <td className="h-12 px-4">
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className=" text-xl text-primary">{user.Name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className=" text-xl text-primary">{user.email}</div>
                    </td>
                    <td>
                      <div className=" text-xl text-primary">{user.phoneNo}</div>
                    </td>
                    <td>
                      <div className=" text-xl text-primary">{user.collegeName}</div>
                    </td>
                    <td>
                      <div className="font-bold">{
                          (user.isPaid)?
                          <b className="text-primary h-8 w-18 py-2 px-6 rounded-2xl bg-green">paid</b>
                          :
                          <b className="text-primary h-8 w-18 py-2 px-6 rounded-2xl bg-aneesh">Unpaid</b>
                      }
                      </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
          <div className="w-[500px] p-8 -mt-10">
            <p>
              USE YOUR QR TO REGISTER AT{" "}
              <span className="text-2xl uppercase text-aneesh">{eventName}</span>
            </p>
            <QrScanner
              onDecode={(result) => handleScan(result)}
              onError={(error) => console.log(error?.message)}
            />

            {loading ? (
              <div className="flex flex-col items-center h-[200px] mt-6 w-full bg-primary-light justify-center">
                <p className="flex text-3xl text-aneesh font-bold">Scanning QR code...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center h-[200px] mt-6 w-full bg-primary-light justify-center">
                <p className="flex text-3xl text-red-500 font-bold">{error}</p>
              </div>
            ) : profile.Name ? (
              <>
              <div className="flex flex-col items-center h-[200px] mt-6 w-full bg-primary-light justify-center">
                <h2 className="flex font-bold text-primary">Dear, {profile.Name}</h2>
                <p className="flex itms-center text-green font-bold">You have successfully registered for the event</p>
              </div>
              </>
            ) : (
              <div className="flex flex-col items-center h-[200px] mt-6 w-full bg-primary-light justify-center">
                <h2 className="flex text-3xl text-aneesh font-bold">Scan QR to register</h2>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}


