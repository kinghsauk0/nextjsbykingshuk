"use client";

import React, { useState } from "react";
function login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
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
        <h1 className="text-white text-center  mt-[100px] mb-[100px] text-5xl">Login</h1>
        <div className=" w-full h-auto  flex-col flex justify-center items-center">

          <label className="text-white text-center">
            Useremail :
            <input
              className="ml-3 w-1/2 h-8 bg-white rounded-md p-3 text-black mb-5 "
              type="text"
              value={user.email}
              onChange={(e) => setUser({ email: e.target.value })}
              placeholder="Enter Username here"
            />
          </label>

          <label className="text-white text-center">
          password :
            <input
              className="ml-3 w-1/2 h-8 bg-white rounded-md p-3 text-black mb-5"
              type="text"
              value={user.password}
              onChange={(e) => setUser({ password: e.target.value })}
              placeholder="Enter Username here"
            />
          </label>
        </div>
         <div className="flex justify-center items-center w-full mt-8">
         <button className="self-center bg-green-400 hover:bg-green-800 w-[120px] rounded-lg h-9 text-black">login</button>
         </div>
      </div>
    </div>
  );
}

export default login;
