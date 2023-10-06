import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Dashnavbar from "../components/navbar/navbar";
import RegisterationAccess from "@/lib/data/RegistrationAccess";
import { QrScanner } from "@yudiel/react-qr-scanner";
import * as xlsx from 'xlsx';

export default function EventPage({ eventName }) {
  const { data: session } = useSession();
  const [isAllowed, setIsAllowed] = useState(false);
  const [eventProfile, setEventProfile] = useState([]);
  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const columns = ["Name", "Email", "Phone Number", "College Name", "Payment"];

  useEffect(() => {
    if (session) {
      const permissionGranted = RegisterationAccess[eventName];
      setIsAllowed(permissionGranted.includes(session.user.email));
    }
  }, [session]);

  const handleScan = async (data) => {
    if (data) {
      try {
        setLoading(true);
        const res = await axios.put(`/api/eventAttended`, {
          eventName: eventName,
          _profileId: data,
        });
        if (res.data && res.data.EventProfiles && res.data.updatedProfile) {
          setEventProfile(res.data.EventProfiles);
          setProfile(res.data.updatedProfile);
          setMessage("");
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

  const handleOnExportExcel = () => {
    const specificColumns = eventProfile.map(item => ({
        Name: item.Name,
        Email: item.email,
        PhoneNumber: item.phoneNo,
        collegeName: item.collegeName,
        RegistrationId : item.collegeRegistrationNumber,
        isPaid: item.isPaid
      }));
    var wb = xlsx.utils.book_new(),
    ws = xlsx.utils.json_to_sheet(specificColumns);
    xlsx.utils.book_append_sheet(wb,ws,"ProfileData");
    xlsx.writeFile(wb,eventName+"_registered.xlsx")
  }

  return (
    <div className="bg-gray-900 text-white">
      <Dashnavbar />

      {!isAllowed ? (
        <div className="flex flex-col items-center justify-center mt-32">
          <h1 className="text-4xl text-aneesh mb-4">
            Oops! You don't have permission to access this page.
          </h1>
          <p className="text-lg text-gray-600">
            Please sign in with an authorized email or contact the website team.
          </p>
        </div>
      ) : (
        <div className="sm:p-4 p-8 flex justify-between space-x-6">
          <div className="w-3/4 sm:w-3/5"> 
            <div className="flex justify-end px-5 pb-5">
            <button onClick={handleOnExportExcel} className='h-12 w-32 bg-aneesh flex items-center justify-center '>EXPORT</button>
            </div>
            <div className="overflow-x-auto w-full sm:rounded-lg">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-primary-dark">
                    {columns.map((name) => (
                      <th
                        key={name}
                        className="py-2 px-4 text-lg font-bold text-gray-300"
                      >
                        {name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {eventProfile.map((user) => (
                    <tr key={user.email} className="hover:bg-red">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div >
                            <div className="font-semibold text-center">     {user.Name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="font-semibold text-center">{user.email}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-center">{user.phoneNo}</div>
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
              <p className="text-lg">
                Use your QR code to register at{" "}
                <span className="text-aneesh font-semibold uppercase">
                  {eventName}
                </span>
              </p>
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
              ) : error ? (
                <div className="mt-6 bg-red-100 dark:bg-red-700 p-4 rounded-lg">
                  <p className="text-lg text-red-500 font-semibold">{error}</p>
                </div>
              ) : profile.Name ? (
                <div className="mt-6 bg-primary-light p-4 rounded-lg bg-green-100 dark:bg-green-700 p-4 rounded-lg">
                  <h2 className="text-primary  font-bold">
                    Dear, <span className="text-green text-2xl font-bold" >{profile.Name}</span>
                  </h2>
                  <p className=" text-primary font-semibold">
                    You have successfully registered for the event.
                  </p>
                </div>
              ) : message !== "" ? (
                <div className="mt-6 bg-green-100 dark:bg-green-700 p-4 rounded-lg">
                  <p className="text-green-500 font-semibold">{message}</p>
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
    </div>
  );
}
