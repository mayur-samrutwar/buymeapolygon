import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const params = useParams();
  const creatorId = params.creatorId;


  return (
    <section classname="min-h-screen">
      <div className="h-60 bg-cyan-100 flex justify-center items-center">
        <p className="font-semibold text-4xl">{creatorId}</p>
      </div>
      <div className="flex justify-center -mt-20">
        <img src={`https://avatars.dicebear.com/api/personas/${creatorId}.svg`} className="bg-cyan-50 rounded-full border-4 border-white p-2 w-40 h-40" />
      </div>

      <div className="flex space-x-10 justify-center my-10">
        <div className="rounded-md border w-[550px] h-40 p-6 text-gray-600">
          {creatorId}
        </div>
        <div className="rounded-md border w-96 p-6">
          <p className="text-xl font-bold mt-5">Buy <span className="underline decoration-yellow-300 decoration-4 underline-offset-4 text-gray-700">{creatorId}</span> a Polygon</p>

          <div className="mt-8 rounded-md border border-cyan-400 bg-cyan-50 px-4 py-8 flex items-center">
          <img src="https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png" className="h-10 w-10" />
            <p className="mx-4 font-bold text-gray-600">X</p>
            <div className="flex space-x-4">
              <button className="rounded-full h-10 w-10 border border-cyan-400 bg-white flex justify-center items-center font-bold text-cyan-400">1</button>
              <button className="rounded-full h-10 w-10 border border-cyan-400 bg-white flex justify-center items-center font-bold text-cyan-400">3</button>
              <button className="rounded-full h-10 w-10 border border-cyan-400 bg-white flex justify-center items-center font-bold text-cyan-400">5</button>
              <input className="h-10 w-10 border border-gray-400 bg-white flex justify-center items-center font-bold text-gray-400" placeholder=" 
 10" />
            </div>
          </div>
          <textarea rows="4" type="text" className="mt-5 rounded-md w-full p-4 border border-gray-400 bg-gray-50 focus:outline-none"
            placeholder="Hi bro, I'm big fan of yours. You are awesome <3"/>
          <div className="space-x-2 flex text-sm text-gray-600">
            <input type="checkbox" />
            <p>Make this message private</p>
          </div>
          <button className="mt-8 w-full rounded-full p-4 bg-cyan-400 text-white font-bold flex justify-center items-center">Support</button>
        </div>
      </div>

    </section>)
}

export default ProfilePage;