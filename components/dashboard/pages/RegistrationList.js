import ViewTable from "../table/table";
import axios from "axios";
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import Dashnavbar from "../components/navbar/navbar";


function RegistrationList() {
    const { data: session } = useSession();
    const [isAllowed,setIsAllowed] = useState(false)
    const [profile, setProfile] = useState([])
    const permission_granted = ['logeshtv21@gmail.com','anandasriram0303@gmail.com','rohith14n@gmail.com','thrishasathya19@gmail.com','vishalisow003@gmail.com','araneesh08@gmail.com','mohansree1709@gmail.com','akjaddu@gmail.com','alphadevtech07@gmail.com','varshini21.nkl@gmail.com']
    useEffect(async ()=>{
        if (session){
            setIsAllowed(permission_granted.includes(session.user.email))
        }   
        const res = await axios.get('/api/getAll');
        setProfile(res.data.profiles);     
    },[session])
    
    return (
        <div>
            <Dashnavbar/>
            {(isAllowed===false)?(
                <div className="flex flex-col items-center justify-center mt-32">
                    <div className="text-5xl mb-2 text-aneesh">you dont have permission to acess this page.....</div>
                    <div>please sign in with autherized mail or contact website team</div>
                </div>
            ):
            ((profile.length===0)?(
                <div className="sm:p-4 p-16 bg-aneesh">
                    No data found!!!!!!  
                </div>
            ):(
                <div className="sm:p-4 p-16">
                    <ViewTable tableData={profile} tableTitle={'TOTAL REGISTRATION'}/>
                </div>
            )
            )}
        </div>
    );
}

export default RegistrationList;