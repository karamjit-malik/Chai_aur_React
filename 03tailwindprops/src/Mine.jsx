import React from "react";

function Myapp({username,img})
{
    return(
        <>
        <div className="relative h-[30rem] w-[20rem] rounded-xl border-none overflow-hidden shadow-[0.2rem_.5rem_1rem_.05rem_#9999] hover:text-[cyan] hover:-translate-y-4 cursor-pointer transition:ease-in-out duration-500 ">
            <img src={img} className=" h-full w-full z-0 "/>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-semibold z-1 text-2xl">{username}</div>
        </div>
        </>
    )
}

export default Myapp;