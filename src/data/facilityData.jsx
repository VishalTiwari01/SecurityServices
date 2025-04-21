import React from "react";
import {
  FaBuilding,
  FaIndustry,
  FaHome,
  FaFileAlt,
  FaGift,
  FaUtensils,
} from "react-icons/fa";
const facilityData = [
  {
    id: 1,
    name: "Housekeeping",
    content1:
      "We provide our security guards with professional on-the-job training and our best practices make us a special security agency.",
    content2:
      "Khyati Shield is a popular address for hiring security guards for houses, apartments, hospitals, colleges, and other commercial and non-commercial properties. From our range of services, we have appeared as a security guard specialist in Delhi NCR and PAN India.",

    heading: " KHYATI SHIELD HOUSEKEEPING SERVICE INCLUDE:",
    standards: [
      {
        category: "Daily cleaning",
        points: [
          "Interior and floor cleaning",
          "Washroom cleaning",
          "Dust control",
          "Removal of garbage",
          "Vacuum cleaning",
        ],
      },
      {
        category: "Periodical cleaning",
        points: [
          "Carpet cleaning",
          "Maintenance of floor",
          "Window glass cleaning",
          "Cobweb cleaning",
          "Cleaning of wall cladding",
          "Cleaning of fixture & fitting",
        ],
      },
      {
        category: "Special cleaning",
        points: [
          "Floor polishing",
          "Carpet/Sofa shampooing",
          "Façade/Glass cleaning",
          "High pressure cleaning of outside area",
          "Steam cleaning",
        ],
      },
      {
        category: "Segment cleaning",
        points: [
          "Post construction cleaning",
          "Marble crystallization and grinding polishing",
          "Industrial cleaning",
          "Spring cleaning",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Pantry Services",
    content1:
      "Our professional pantry service providers have unparalleled experience and are trained in different service dimensions. While performing routines like tending to VIPs, they are at absolute ease. Vending machine service, photocopier operator handling, messenger/errand boys handling. We understand time management and hospitality.",
    content2:
      "We are trained in establishing pantry service areas for meetings and conferences.",

    heading: "Some Of The Unique Features Of Our Pantry Service Are:",
    standards: {
      points: [
        "We make sure all etiquettes associated with such events are fully observed and maintained",
        "We deploy professionals with expertise in specific pantry service tasks",
        "We draw up customized plans to ensure smooth handling of events of any size",
      ],
    },
  },
  {
    id: 3,
    name: "Waste Management",
    content1:
      "We include extensive recycling, industry-specific waste management, sector and corporate sustainability solutions.",
    content2:
      "As an end-to-end solution provider, we provide our services for compliant waste segregation, storage, processing, recycling, and approved disposal.",
    waste: [
      {
        icon: <FaBuilding />,
        title: "COMMERCIAL WASTE COLLECTION",
        description:
          "Eco Wise provides quality collection, recycling, and disposal services to both large and small businesses.",
      },
      {
        icon: <FaIndustry />,
        title: "INDUSTRIAL WASTE COLLECTION",
        description:
          "Eco Wise customizes its services to meet your needs and assists you in managing your waste.",
        highlight: true,
      },
      {
        icon: <FaHome />,
        title: "RESIDENTIAL WASTE COLLECTION",
        description:
          "Eco Wise provides Door-to-Door collection of MSW in Delhi/NCR.",
      },
      {
        icon: <FaFileAlt />,
        title: "DOCUMENT DESTRUCTION",
        description:
          "Eco Wise provides secure & confidential On-site / Off-site Document destruction Services.",
      },
      {
        icon: <FaGift />,
        title: "PRODUCT DESTRUCTION",
        description:
          "Eco Wise introduces “Product Destruction & Recycling Services”.",
      },
      {
        icon: <FaUtensils />,
        title: "FOOD WASTE PROCESSING",
        description:
          "Specialized recycling services to help lessen your environmental impact.",
      },
    ],
  },
  {
    id: 4,
    name: "Pest Control Services",
    content1:
      "We offer priority pest control services and handle deep-rooted pest problems with specialized approaches. We have the experience and resources to remove termites and pests from your office or business premises, regardless of severity.",
    content2:
      "Our pest control measures are effective against all pests. We ensure prompt and comprehensive protection, and our technicians provide insured, guaranteed solutions.",
    standards: {
      points: ["Rodent trappers", "Gum stickers", "Treatment with chemicals"],
    },
  },
  {
    id: 5,
    name: "Plumbing Services",
    content1:
      "Plumbing is a very important service for providing timely, courteous and professional service to your commercial plumbing needs. Overall, our mission is to ensure that our plumbers properly analyze a situation and treat it with the most up-to-date technology, equipment, and products available and provide customers with a level of plumbing service satisfaction.",

    standards: [
      {
        category:
          "Khyati Shield provides experienced team of Plumbers which will take care:",
        points: [
          "Blocked drains.",
          "Leakage and sewer damages.",
          "Damaged Pipe Lines.",
          "Repair/Replacement of Taps or faulty equipments.",
          "Wastage of Water through leakage/damage equipments.",
        ],
      },
      {
        category:
          "We have trained experienced team of plumbers which will help you to solve your all plumbing needs:",
        points: [
          "Check all plumbing fittings in toilets for proper operation.",
          "Ensuring adequate water in the overhead tanks for use",
          "Operation & maintenance of water treatment plants",
          "Check for proper functioning of valves and rectify for water leakages through valves and fittings.",
          "To clean on regular basis, all underground and overhead tanks and to ensure there are no deposits / sediments or algae growth.",
        ],
      },
    ],
  },
];

export default facilityData;
