import React from "react";

function CompleteYourPage() {
  return (
    <section className="min-h-screen bg-stone-50 flex flex-col items-center">
      <div className="flex flex-col">
        <div className="h-1 w-96"></div>
        <p className="text-3xl font-semibold mt-20">Complete your page</p>
        <label for="name" className="text-gray-600 mt-10">Name</label>
        <input type="text" className="rounded border-2 border-black px-4 py-2 text-gray-700 text-light mt-3" placeholder="Vitalik Buterin" />

        <label for="link" className="text-gray-600 mt-8">Buy me a Bitcoin link</label>
        <div className="flex px-8 py-2 rounded mt-3 border-2 border-black">
          <input type="text" value="buymeabitcoin.com/" readonly="readonly" className="-ml-4 focus:outline-none font-gray-400" />
          <input type="text" placeholder="yourname" className="focus:outline-none -ml-8" />
          
        </div>

        <label for="name" className="text-gray-600 mt-8">About</label>
        <textarea type="text" rows="4" className="rounded border-2 border-black px-4 py-2 text-gray-700 text-light mt-3" placeholder="Heyo!! I just created my page. You can support me here" />

        <button className="mt-8 py-3 rounded-full bg-black text-white font-semibold">Connect wallet</button>
        <button className="mt-4 py-3 rounded-full bg-yellow-300 font-semibold">Continue</button>

        
      </div>
    </section>
  )
}

export default CompleteYourPage;