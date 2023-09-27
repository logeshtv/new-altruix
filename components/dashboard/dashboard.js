import Dashnavbar from "./navbar/navbar";
import ViewTable from "./table/table";
import axios from "axios";
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";

function Dashboard() {
    const { data: session } = useSession();
    const [isAllowed,setIsAllowed] = useState(false)
    const permission_granted = ['logeshtv21@gmail.com','araneesh08@gmail.com','mohansree1709@gmail.com','varshini21.nkl@gmail.com']
    useEffect(()=>{
        if (session){
            setIsAllowed(permission_granted.includes(session.user.email))
        }
    },[session])
    return (
        <div>
            <Dashnavbar/>
            {!isAllowed?(
                <div className="flex flex-col items-center justify-center mt-32">
                    <div className="text-5xl mb-2 text-aneesh">you dont have permission to acess this page.....</div>
                    <div>please sign in with autherized mail or contact website team</div>
                </div>
            ):
            (
                <div className="sm:p-4 p-16">
                    <ViewTable />
                </div>
            )}
        </div>
    );
}

export default Dashboard;