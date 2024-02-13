"use client";

import React, { useEffect, useState } from "react";
import { UseUserApiContext } from "../context/user.context";

function singup() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputuser, setInputUser] = useState({
    username: "",
    email: "",
    password: "",
  })
   // eslint-disable-next-line react-hooks/rules-of-hooks
  
 

  // create singup
  const  handelSingUp =  async () => {
   
  }

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/authBG.jpg')",
        backgroundSize: "cover",
        // Add any other background properties as needed
      }}
    >
      <div className="sm:w-1/2  lg:w-[400px] bg-black opacity-75 h-3/4 rounded-[15px]">
        <h1 className="text-white text-center  mt-[100px] mb-[100px] text-5xl">Singup</h1>
        <div className=" w-full h-auto  flex-col flex justify-center items-center">
          <label className="text-white text-center ">
            Username :
            <input
              className="ml-3 w-1/2 h-8 bg-white rounded-md p-3 text-black mb-5 "
              type="text"
              value={inputuser.username}
              onChange={(e) => setInputUser({ username: e.target.value })}
              placeholder="Enter Username here"
            />
          </label>

          <label className="text-white text-center">
            Useremail :
            <input
              className="ml-3 w-1/2 h-8 bg-white rounded-md p-3 text-black mb-5 "
              type="text"
              value={inputuser.email}
              onChange={(e) => setInputUser({ email: e.target.value })}
              placeholder="Enter Username here"
            />
          </label>

          <label className="text-white text-center">
          password :
            <input
              className="ml-3 w-1/2 h-8 bg-white rounded-md p-3 text-black mb-5"
              type="text"
              value={inputuser.password}
              onChange={(e) => setInputUser({ password: e.target.value })}
              placeholder="Enter Username here"
            />
          </label>
        </div>
         <div className="flex justify-center items-center w-full mt-8">
         <button onClick={handelSingUp} className="self-center bg-green-400  hover:bg-green-800 w-[120px] rounded-lg h-9 text-black">singup</button>
         </div>
      </div>
    </div>
  );
}

export default singup;
