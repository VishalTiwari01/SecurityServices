import React from "react";
import {
  FaTruck,
  FaBox,
  FaFileAlt,
  FaPizzaSlice,
  FaMoneyBillWave,
  FaUtensils,
  FaGift,
  FaShoppingCart,
  FaTshirt,
} from "react-icons/fa";

const logisticsData = [
  {
    id: 1,
    title: "CASH VAN LOGISTICS",
    subtitle:
      "THE MODIFIED CASH VAN PROVIDED BY US SHOULD CONFORM TO THE FOLLOWING STANDARDS:-",
    description: [
      "Cash Logistics is the actual transfer and storage on behalf of banks and the replenishment of the ATM of money and other valuables. We provide updated cash van according to RBI Rule.",
      "Our cash vans are installed with vehicle tracking system and are monitored and tracked by highly professional staff.",
      "Each cash van is provided with Driver, Armed Security Guards one or two depending on cash carrying limit with single/double barrel guns with valid licenses and ATM Officer/Custodians.",
    ],
    standards: {
      heading: "The modified cash van provided by us should conform to the following standards:-",
      points: [
        "Make: LMV.",
      "Cash Van have three independent compartments...",
      "Security Monitoring is done with the help of GPS...",
      "Cash Compartment specially reinforced with steel...",
      "A hooter, portable fire extinguishers for quick reaction...",
      "Each cash van is provided with Driver, Armed Security Guards...",
      "All employees are properly screened...",
      "We provide the best cash van services...",
      ]
    },
    
  },
  {
    id: 2,
    title: "DELIVERY BOY LOGISTICS",
    subtitle: "OUR DELIVERY SERVICES:",
    description: [
      "We value your chances & quality times, that's why we're bringing CAKE, Pizza, Money, BOUQUET's amazing home delivery & much more to make your day special.",
    ],
    servicesHeading: "Available Services:",
    services: [
      { name: "Parcel Delivery", icon: <FaBox /> },
      { name: "Document Delivery", icon: <FaFileAlt /> },
      { name: "Cake & Pizza Delivery", icon: <FaPizzaSlice /> },
      { name: "Cash Delivery", icon: <FaMoneyBillWave /> },
      { name: "Food Delivery", icon: <FaUtensils /> },
      { name: "Flower Delivery", icon: <FaGift /> },
      { name: "Grocery Delivery", icon: <FaShoppingCart /> },
      { name: "Gift Delivery", icon: <FaGift /> },
      { name: "Clothes Delivery", icon: <FaTshirt /> },
    ],
  },
];

// const LogisticsInfo = () => {
//   return (
//     <div className="container mx-auto p-6">
//       {logisticsData.map((item) => (
//         <div
//           key={item.id}
//           className="grid md:grid-cols-4 gap-6 border-b pb-8 mb-8"
//         >
//           {/* Left column - Title */}
//           <div className="md:col-span-1 font-bold text-xl text-blue-700">
//             {item.title}
//           </div>

//           {/* Right column - Details */}
//           <div className="md:col-span-3 space-y-4">
//             <h3 className="text-lg font-semibold text-gray-700">{item.subtitle}</h3>

//             {/* Descriptions */}
//             {item.description.map((desc, index) => (
//               <p key={index} className="text-gray-600">
//                 {desc}
//               </p>
//             ))}

//             {/* Standards or Services */}
//             {item.standards && (
//               <ul className="list-disc ml-6 text-sm text-gray-700">
//                 {item.standards.map((std, index) => (
//                   <li key={index}>{std}</li>
//                 ))}
//               </ul>
//             )}

//             {item.services && (
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                 {item.services.map((service, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded shadow-sm"
//                   >
//                     <span className="text-blue-500">{service.icon}</span>
//                     <span className="text-sm">{service.name}</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

export default logisticsData;
