import React from "react";

function Home() {
  return (
    <section className="min-h-screen bg-stone-50">
      <div id="navbar" className="flex items-center justify-center  mt-          20">
        <div className="w-2/3 bg-white shadow-xl shadow-slate-100 rounded-full my-5 py-4 mx-20 px-8 flex justify-between text-gray-800 font-medium">
          <div className="space-x-6 flex items-center">
            <p>How it works</p>
            <p>Top creators</p>
          </div>  
          <div className="space-x-6 flex items-center">
            <p>Login</p>
            <button className="bg-yellow-300 rounded-full px-4 py-2">Sign up</button>
          </div>  
        </div>
      </div>

      <div className="flex flex-col justify-between items-center mt-20">
      <p className="px-96 leading-normal text-6xl font-bold text-center">A supporter is worth a thousand followers.
</p>
        <p className="text-xl text-center mt-10">Accept donations. Start a membership. Sell anything you like. <br />It’s easier than you think.</p>
        <div className="flex bg-white shadow-xl shadow-slate-100 px-8 py-2 border-2 border-gray-50 rounded-full text-xl mt-10">
          <input type="text" value="buymeabitcoin.com/" readonly="readonly" className="font-semibold focus:outline-none" />
          <input type="text" placeholder="yourname" className="focus:outline-none -ml-14" />
          <button className="bg-yellow-300 rounded-full py-4 px-5 flex justify-center items-center font-semibold">Start my page</button>
          
        </div>
        <p className="mt-5 text-gray-700">It's free, decentralized, pricavy-oriented and set ups quickly.</p>
      </div>

      
    </section>)
}

export default Home;