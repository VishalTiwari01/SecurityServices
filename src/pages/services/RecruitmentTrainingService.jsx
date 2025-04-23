import React from "react";

const RecruitmentTrainingService = () => {
  const recruitmentStandards = [
    { label: "Age", value: "21 to 50 years" },
    { label: "Height", value: "Minimum 5'5\"" },
    { label: "Eye Sight", value: "6 X 6" },
    { label: "Physique", value: "Excellent physical shape" },
    { label: "Education", value: "Minimum matriculate, fluent in English and local language(s)" },
    { label: "Criminal History", value: "No job-related crimes or felony convictions" },
    { label: "Experience", value: "Preferred in security industry" },
  ];

  const trainingIncludes = [
    "Drill movements",
    "Fire fighting and first-aid methods",
    "Gate duties",
    "Proper documentation",
    "Basic telephone duties",
    "Friendly conduct with staff and visitors",
    "Escorting VIPs",
    "Search and frisking",
    "Personal hygiene and housekeeping",
    "Car parking and traffic control",
    "Control at entry and exit points",
    "Issue of passes and ID check",
    "Liaison with police and fire brigade",
    "Premises patrolling",
    "Identifying sources of theft and pilferage"
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Recruitment & Training Services</h1>
      <p className="mb-4 text-gray-700">
        Excellence is an art learned through preparation and habituation. At Khyati Shield,
        we believe that excellence is a habit — deeply reflected in our recruitment and training strategy.
      </p>
      <p className="mb-4 text-gray-700">
        A retired senior army or paramilitary officer team oversees the initial screening and selection.
        Candidates are medically tested and reviewed by the Head of Recruitment, ensuring all basic educational
        and physical standards are met.
      </p>
      <p className="mb-4 text-gray-700">
        Training programs include use of safety gadgets, household/residential security, firefighting,
        crowd control, first aid, and military equipment handling for armed personnel.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Recruitment Standards</h2>
      <ul className="list-disc list-inside mb-4 text-gray-800">
        {recruitmentStandards.map((item, index) => (
          <li key={index}><strong>{item.label}:</strong> {item.value}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Basic Training Includes</h2>
      <ul className="list-disc list-inside text-gray-800">
        {trainingIncludes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecruitmentTrainingService;
