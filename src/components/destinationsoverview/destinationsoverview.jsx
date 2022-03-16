import React from "react";
import { connect } from "react-redux";
import { MDBIcon } from "mdb-react-ui-kit";
import { useHistory } from "react-router-dom";
import { toggleFilterButton } from "../../redux/filter/filter.actions.js";
import "./destinationsoverview.scss";
import DestinationItem from "../destinationsoverviewItem/destinationOverviewItem";
import FilterPage from "../../pages/filterpage/filterpage";


const OverviewComponent = ({ toggleFilterButton, hidden, locations }) => {
  //const [isOpen, setIsOpen] = useState(false);
  // const TRAVEL_DATA = useContext(DataContext);
  // const [data, setData] = useState(TRAVEL_DATA.Locations);
  console.log(locations)

  const history = useHistory();
  // const toggleButton = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      <div className="destinations-header">
        <MDBIcon
          fab
          icon="accusoft"
          size="3x"
          className="header-icon"
          onClick={() => {
            history.push("/");
          }}
        />
        <MDBIcon
          icon="exchange-alt"
          size="2x"
          className="filter-icon"
          onClick={toggleFilterButton}
        />
        {hidden && <FilterPage />}
        <span className="filter-text">Filter</span>
      </div>
      <div className="destinations-overview">
        {locations.map((locationItem) => (
          <DestinationItem key={locationItem.id} locationItem={locationItem} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({filter}) => ({
  hidden: filter.hidden,
  locations: filter.Locations
})

const mapDispatchToProps = (dispatch) => ({
toggleFilterButton: () => dispatch(toggleFilterButton())
})

export default connect(mapStateToProps, mapDispatchToProps)(OverviewComponent);
