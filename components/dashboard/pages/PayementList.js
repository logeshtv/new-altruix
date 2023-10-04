import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Dashnavbar from "../components/navbar/navbar";
import RegisterationAccess from "@/lib/data/RegistrationAccess";
import { QrScanner } from "@yudiel/react-qr-scanner";

export default function PaymentList() {
  const { data: session } = useSession();
  const [isAllowed, setIsAllowed] = useState(false);
  const [eventProfile, setEventProfile] = useState([]);
  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (session) {
      const permission_granted = RegisterationAccess['payment'];
      setIsAllowed(permission_granted.includes(session.user.email));
    }
  }, [session]);

  const handleScan = async (data) => {
    if (data) {
      try {
        setLoading(true);
        const res = await axios.put(`/api/isPaid`, {
          _profileId: data,
        });
        if (res.data && res.data.PaidProfiles && res.data.profile) {
          setEventProfile(res.data.PaidProfiles);
          setProfile(res.data.profile);
          setMessage(res.data.message);
        } else {
          if (res.data && res.data.message) {
            setMessage(res.data.message);
          } else {
            setMessage("An error occurred while processing your QR code.");
          }
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("An error occurred while processing your QR code.");
        setLoading(false);
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
        <div className="sm:p-4 p-8 flex justify-between space-x-6">
          <div className="w-3/4 sm:w-3/5">
            <div className="overflow-x-auto w-full sm:rounded-lg">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-primary-dark">
                    <th className="py-2 px-4 text-lg font-bold text-gray-300">
                      Name
                    </th>
                    <th className="py-2 px-4 text-lg font-bold text-gray-300">
                      Email
                    </th>
                    <th className="py-2 px-4 text-lg font-bold text-gray-300">
                      Phone Number
                    </th>
                    <th className="py-2 px-4 text-lg font-bold text-gray-300">
                      CollegeName
                    </th>
                    <th className="py-2 px-4 text-lg font-bold text-gray-300">
                      Payment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {eventProfile.map((user) => (
                    <tr key={user.email} className="hover:bg-red">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-semibold text-center">
                              {user.Name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="font-semibold text-center">
                          {user.email}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-center">
                          {user.phoneNo}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold">{user.collegeName}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold">
                          {user.isPaid ? (
                            <span className="bg-green text-white py-1 px-8 rounded-full">
                              Paid
                            </span>
                          ) : (
                            <span className="bg-red text-white py-1 px-4 rounded-full">
                              Unpaid
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-1/4 sm:w-2/5">
            <div className="p-8">
              <p className="text-lg">PAYMENT REGISTRATION</p>
              <QrScanner
                onDecode={(result) => handleScan(result)}
                onError={(error) => console.log(error?.message)}
                size={200}
              />
              {loading ? (
                <div className="mt-6 bg-primary-light p-4 rounded-lg">
                  <p className="text-lg text-aneesh font-semibold">
                    Scanning QR code...
                  </p>
                </div>
              ) : message !== "" ? (
                <div className="mt-6  p-4 rounded-lg  p-4 rounded-lg bg-primary-light">
                  <h2 className="text-primary font-bold">
                    Dear, <span className="text-green text-2xl font-bold">{profile.Name}</span>
                  </h2>
                  <p className="text-primary font-semibold">
                    {message}
                  </p>
                </div>
              ) : profile.Name ? (
                <div className="mt-6  p-4 rounded-lg  p-4 rounded-lg bg-primary-light">
                  <h2 className="text-primary  font-bold">
                    Dear, <span className="text-green text-2xl font-bold" >{profile.Name}</span>
                  </h2>
                  <p className=" text-primary font-semibold">
                    You have successfully Paid.
                  </p>
                </div>
              ) : error ? (
                <div className="mt-6 bg-red-100 dark:bg-red-700 p-4 rounded-lg">
                  <p className="text-red-500 font-semibold">{error}</p>
                </div>
              ) : (
                <div className="mt-6 bg-primary-light p-4 rounded-lg">
                  <h2 className="text-aneesh text-lg font-semibold">
                    Scan QR to register
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
