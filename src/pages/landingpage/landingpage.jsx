import React from "react";
import LandingComponent from "../../components/landing/landingcomponent";
import DestinationsPreview from "../../components/destinationspreview/destinationsprev";
import ThirdLandingSection from "../../components/3rdlandingsection/3rdlandingsection";
import WCSSSComponent from "../../components/whyChooseUs-SearchSection/WCS-SS/WCS-SS.jsx";
import ScrollToTop from "../../components/scrolltothetop/scrolltothetop";
import Footer from "../../components/footer/footer";
import DataContext from "../../contexts/data/data.context";
import TRAVEL_DATA from "../../contexts/data/data";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser)
  return (
    <div>
      <LandingComponent />
      <DataContext.Provider value={TRAVEL_DATA}>
        <DestinationsPreview />
      </DataContext.Provider>
      <ThirdLandingSection />
      <WCSSSComponent />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
