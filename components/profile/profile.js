
import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from "react-to-print";
import jwt from 'jwt-simple';

function Profile({ profileData }) {
    const [qrCodeData, setQRCodeData] = useState('');
    const conponentPDF= useRef();
    useEffect(() => {
    console.log(profileData)
      const jsonString = JSON.stringify(profileData._id);
      const payload = { data: jsonString };
      const token = jwt.encode(payload, "Altruix2k23");
      setQRCodeData(token);
    }, []);
  
    const downloadPdf= useReactToPrint({
        content: ()=>conponentPDF.current,
        documentTitle:"Userdata",
    });
  
  return (
    <div  className="flex items-center ">
      <div id='profile-container' className="container ">
        <div  className="flex sm:w-[400px] m2lg:w-[500px]  ">
          <div   className="flex-1 ">
            <div  style={{height:'100%'}} className="shadow">
              <div ref={conponentPDF} className="bg-primary  px-6 py-6 pb-0 border-4 border-green">
                <div className="flex mb-4 md:mb-0 justify-between items-center">
                  <span className="bg-green px-4 py-3 text-white text-sm rounded-full font-semibold"></span>
                  <span className="bg-grey-lighter px-4 py-2 text-grey-darkest text-xs rounded-full font-semibold">
                    <span className="-mt-1">Registered At :</span>
                    <span className="text-lg text-black">
                      {new Date(profileData.createdAt).toLocaleString()}
                    </span>
                  </span>
                </div>
                <br />
                <div className="text-grey-darker mb-4 text-red">Download Your ticket or take screen shot!!</div>
                <br/>
                <div>
                  {qrCodeData && (
                    <div className="text-center">
                      <img
                        className="mx-auto block mb-3 -mt-6 shadow-md"
                        height="100%"
                        width="100%"
                        layout="responsive"
                        src={`https://chart.googleapis.com/chart?chs=450x450&cht=qr&chl=${qrCodeData}`}
                        alt="logo"
                    />
                    </div>
                  )}
                  
                  <table className="table-auto mx-auto">
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 font-semibold">Name:</td>
                        <td className="px-4 py-2">{profileData.Name.toUpperCase()}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-semibold">College ID:</td>
                        <td className="px-4 py-2">
                          {profileData.collegeRegistrationNumber}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-semibold">Email:</td>
                        <td className="px-4 py-2">{profileData.email}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-semibold">College:</td>
                        <td className="px-4 py-2">{profileData.collegeName}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-center mb-6 flex flex-wrap justify-center">
                <button
                    onClick={downloadPdf}
                    className="border-2 border-grey-light px-4 py-2 rounded-full text-sm text-grey-darker mr-1 mb-1"
                  >
                    Download Your Ticket
                  </button>
                </div>
                <div className="border-1 border-grey-light mb-4 mx-8"></div>
                <div className="text-grey-darker mb-4">Altruix welcomes you!!!</div>
                <div className="border border-grey-light mb-2 mx-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
