import { signIn, signOut, useSession } from "next-auth/react"
import { useEffect } from "react";
import Image from 'next/image'

function Dashnavbar() {
    const { data: session } = useSession();
    return (
        <div className="flex bg-dashboardNav items-center justify-between w-full h-20 bg-newprimary">
            {(!session)?
            <div></div>:
            <div className="ml-4 font-medium font-serif">
                hello,  
                <span className="uppercase"> {session.user.name}</span>
            </div>
            }
            <div className="flex items-center mr-4">
            {(!session)?
            <div className=" pt-1">
                <button className=" h-8 w-16 " onClick={() => signIn()}>
                Sign In
                </button>
            </div>:
            <>
            <Image
            className="h-12 w-12 rounded-[50px] "
            src={session.user.image}
            alt="Landscape picture"
            width={50}
            height={50}
            />
            <div className="ml-1 pt-1">
                <button className=" h-8 w-12 " onClick={() => signOut()}>
                logout
                </button>
            </div>
            </>}
            </div>
        </div>
    );
}

export default Dashnavbar;