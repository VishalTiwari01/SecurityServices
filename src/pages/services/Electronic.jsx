import React from 'react'
import cctv from "../../assets/electronic/cctv.png";
import fire from "../../assets/electronic/fire.png"
import gps from "../../assets/electronic/gps.png"
import walkie from "../../assets/electronic/walkie-talkie.png";

const Electronic = () => {
  return (
   <div>
         <div className="flex flex-col justify-center md:flex-row">
         {/* Main Content */}
         <div className="w-full md:w-3/4 p-6">
           {/* Header */}
           <h1 className="text-2xl font-bold mb-4 text-gray-800">Electonic Surveillance</h1>
           <p className="text-gray-600 mb-4">
           Wireless monitoring is one of the most advanced security technologies in the world today. Electronic cameras such as CCTVs have proven to be excellent in tracing crime and curbing threats. Electronic Surveillance is necessary in many businesses and industries where physical or human injury is increasingly threatened.

           </p>
           <p className="text-gray-600 mb-4">
           Our security team tracks alien activities for customers by electronic means and for future assistance everything goes on record. We recommend trapunethical actions in MNCs, conferences, marriages, gatherings, releases, homes, etc. with electronic security systems.
           </p>
   
           {/* Services Section */}
           <h2 className="text-xl font-bold mb-4 text-gray-800">
           Our Some Electronic Surveillance Equipments are:
           </h2>
           <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-6 mt-6">
             {/* Service Cards */}
             <div className="border rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300">
             <img
              src={fire}
              alt="FIRE ALRAM"
              className="rounded-md mb-4"
            />
               <h3 className="font-bold text-lg text-gray-800">
               FIRE ALRAM
               </h3>
             </div>
   
             <div className="border rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300">
             <img
              src={cctv}
              alt="CCTV"
              className="rounded-md mb-4"
            />
               <h3 className="font-bold text-lg text-gray-800">
                 CCTV
               </h3>
             </div>
   
             <div className="border rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300">
             <img
              src={gps}
              alt="GPS TRACKER"
              className="rounded-md mb-4"
            />
               <h3 className="font-bold text-lg text-gray-800">GPS TRACKER</h3>
             </div>
   
             <div className="border rounded-lg p-12 shadow-md hover:shadow-lg transition duration-300">
               <img
                 src={walkie}
                 alt="walkie"
                 className="rounded-md mb-4"
               />
               <h3 className="font-bold text-lg text-gray-800">
                 WALKIE TALKIE
               </h3>
             </div>
           </div>
         </div>
       </div>
       </div>
  )
}

export default Electronic