import axios from "axios";
import { useEffect, useState } from "react";
import * as xlsx from 'xlsx';

function ViewTable() {
    const [profile, setProfile] = useState([])

  useEffect(async ()=> {
    const res = await axios.get('/api/getAll');
    setProfile(res.data.profiles);
  },[]);

  const handleOnExportExcel = () => {
    const specificColumns = profile.map(item => ({
        Name: item.Name,
        Email: item.email,
        PhoneNumber: item.phoneNo,
        collegeName: item.collegeName,
        RegistrationId : item.collegeRegistrationNumber
      }));
    var wb = xlsx.utils.book_new(),
    ws = xlsx.utils.json_to_sheet(specificColumns);
    xlsx.utils.book_append_sheet(wb,ws,"ProfileData");
    xlsx.writeFile(wb,"Registered_List.xlsx")
  }
    
    return (
    <div>
        <div className="flex  justify-center mb-4">
            <button className='bg-aneesh w-full h-10' onClick={handleOnExportExcel}>EXPORT TO EXCEL</button>
        </div>
        <div className="flex  justify-center mb-4">
            <div className="flex flex-col h-36 w-52 bg-primary-light  justify-center items-center">
                <div className="text-primary font-bold uppercase mb-2">total Registeration</div>
                
                <span className="text-primary text-6xl">{profile.length}</span>
            </div>
        </div>
            <div>
                <table class="w-full bg-primary-light  border-yellow-600 border-separate border border-separate border-spacing-2 border border-slate-500">
                <thead className="text-primary ">
                    <tr className="">
                    <th className="text-primary  " >Name</th>
                    <th className="text-primary  " >Email</th>
                    <th className="text-primary  ">Phone Number</th>
                    <th className="text-primary  ">CollegeName</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td  className="text-primary  uppercase font-medium text-center" >glafhiruegfiuweg;</td>
                        <td className="text-primary   font-medium text-center" >456365754765</td>
                        <td  className="text-primary  uppercase font-medium text-center" >dshthetsdjkvbgwluiv</td>
                        <td className="text-primary  text-center font-medium " >44444k;gvlbjdf;v</td>
                        </tr>
                    {
                        profile.map((item,key)=> (
                        
                        <tr key={item._id}>
                        <td  className="text-primary  uppercase font-medium text-center" >{item.Name}</td>
                        <td className="text-primary   font-medium text-center" >{item.email}</td>
                        <td  className="text-primary  uppercase font-medium text-center" >{item.phoneNo}</td>
                        <td className="text-primary  text-center font-medium " >{item.collegeName}</td>
                        </tr>
                        ))
                    }
                </tbody>
                </table>


            </div>
    </div>
    );
}

export default ViewTable;