import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Company from "./pages/Company"
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
// Services
import Scaffolding from "./pages/services/Scaffolding";
import ITNonIT from "./pages/services/consulting/ITNonIT";
import BPO from "./pages/services/consulting/BPO";
import TechnicalSales from "./pages/services/consulting/TecnicalSales";
import Travels from "./pages/services/consulting/Travels";
import BankingFinance from "./pages/services/consulting/Banking";
import RealEstate from "./pages/services/consulting/RealEstate";
import Agriculture from "./pages/services/consulting/Agriculture";
import SecurityGuard from "./pages/services/securityServices/SecurityGuard";
import BankATMSecurityGuard from './pages/services/securityServices/BankATM';
import PersonalSecurityGuard from "./pages/services/securityServices/Personal";
import EventSecurityGuard from "./pages/services/securityServices/Event";
import EducationInstitutionSecurity from "./pages/services/securityServices/Education";
import CommericalSecurityGuard from "./pages/services/securityServices/Commercial";
import HotelSecurityGuard from "./pages/services/securityServices/Hotel";
import HealthCare from "./pages/services/securityServices/HealthCare";
import MetroRailSecurityGuard from "./pages/services/securityServices/Metro&rail";
import HouseKeeping from "./pages/services/faclity/HouseKeeping";
import PantyServices from "./pages/services/faclity/PantyServices";
import PlumbingServices from "./pages/services/faclity/Plumbing";
import WasteManegement from "./pages/services/faclity/WasteManagement";
import PestControlServices from "./pages/services/faclity/PestControl";
import CashVanLogistics from "./pages/services/logistics/CashVan";
import DeliveryBoyLogistics from './pages/services/logistics/DeliveryBoy';
import AboutUS from "./pages/company/About";
import Certification from "./pages/company/Certification";
import DirectorMessage from "./pages/company/DirectorMsg";
import OrganizationStructure from "./pages/company/Organization";
import TrustedBrands from "./components/TrustedBrand";
import Manpower from "./components/Manpower";
import Services from "./components/Services";
import PhotoGallery from "./components/Photo";
import Electronic from "./pages/services/Electronic";
import RecruitmentTrainingService from "./pages/services/RecruitmentTrainingService";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/services/scaffolding/" element={<Scaffolding />} />
        <Route path="/services/consulting/it-non-it" element={<ITNonIT />} />
        <Route path="/services/consulting/bpo" element={<BPO />} />
        <Route
          path="/services/consulting/travel-tourism"
          element={<Travels />}
        />
        <Route
          path="/services/consulting/bankingfinance"
          element={<BankingFinance />}
        />
        <Route
          path="/services/consulting/realestate"
          element={<RealEstate />}
        />
        <Route
          path="/services/consulting/agriculture"
          element={<Agriculture />}
        />
        <Route
          path="/services/SecurityServices/security-guard"
          element={<SecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/bankatm-security-guard"
          element={<BankATMSecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/personal-security-guard"
          element={<PersonalSecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/event-security-guard"
          element={<EventSecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/education-institutions-security"
          element={<EducationInstitutionSecurity />}
        />
        <Route
          path="/services/SecurityServices/metro-rail-security-guard"
          element={<MetroRailSecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/healthcare-security-guard"
          element={<HealthCare />}
        />
        <Route
          path="/services/SecurityServices/hotel-security-guard"
          element={<HotelSecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/commercial-security-guard"
          element={
            <div>
              <CommericalSecurityGuard />
            </div>
          }
        />
        <Route
          path="/services/FacilityManagement/houskeeping"
          element={<HouseKeeping />}
        />
        <Route
          path="/services/FacilityManagement/Pantry-Services"
          element={<PantyServices />}
        />
        <Route
          path="/services/FacilityManagement/Plumbing-Services"
          element={<PlumbingServices />}
        />
        <Route
          path="/services/FacilityManagement/Waste-Management"
          element={<WasteManegement />}
        />
        <Route
          path="/services/FacilityManagement/PestControl-Services"
          element={<PestControlServices />}
        />
        <Route
          path="/services/Logistics/cash-van-logistics"
          element={<CashVanLogistics />}
        />
        <Route
          path="/services/Logistics/delivery-boy-logistics"
          element={<DeliveryBoyLogistics />}
        />
        <Route
          path="/pages/Company"
          element={
            <div>
              <AboutUS />,<TrustedBrands />
            </div>
          }
        />
        <Route
          path="/pages/Company/certification"
          element={<Certification />}
        />
        <Route
          path="/pages/Company/director-message"
          element={<DirectorMessage />}
        />
        <Route
          path="/pages/Company/organizationStructure"
          element={<OrganizationStructure />}
        />
        <Route path="/services/electronic-surveillance" element={<Electronic/>}/>
        <Route
          path="/services/consulting/technical-sales"
          element={<TechnicalSales />}
        />
        <Route
          path="/services/recruitment"
          element={<RecruitmentTrainingService/>}
        />
      </Routes>
      <Manpower />
      <TrustedBrands />
      <Footer />
    </Router>
  );
};

export default App;
