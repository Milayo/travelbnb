import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import "./filter.scss";
import { MDBBtn } from "mdb-react-ui-kit";
import {
  filterUnderHundred,
  filterAboveHundred,
  restoreState
} from "../../redux/filter/filter.actions";

const FilterComponent = ({ filterUnderHundred }) => {
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTitle(e.target.id);
    setChecked(e.target.checked)
  };

  const handleApply = (e) => {
    if (title === "defaultUnchecked1" && checked === true) {
      dispatch(filterAboveHundred());
    }

    else if (title === "defaultUnchecked2" && checked === true) {
      dispatch(filterUnderHundred());
    }
    else {
      setChecked(false)
      dispatch(restoreState())
    }

    console.log("run");
  };

  //   const [filterBy, setFilteredBy] = useState([]);

  //   const handleToggleFilter = (param) => {
  //     setFilteredBy((prevState) => {
  //       if (!prevState.includes(param)) {
  //         return [...prevState, param];
  //       } else {
  //         return prevState.filter((name) => name !== param);
  //       }
  //     });
  //   };

  //   const handleApply = () => {
  //     let filteredData = Locations;
  //     filterBy.map((data) => {
  //       console.log(data);
  //       if (data === "France") {
  //         filteredData = filteredData.filter((location, id) =>
  //           location.name.includes(data)
  //         );
  //       }
  //       if (data === "under100") {
  //         filteredData = filteredData.filter(
  //           (location, id) => location.price < 100
  //         );
  //       } else if (data === "over100") {
  //         filteredData = filteredData.filter(
  //           (location, id) => location.price > 100
  //         );
  //       }
  //     })
  //     setData(filteredData);
  //     toggleButton();
  //   };
  return (
    <div className="filtercomponent">
      {/* <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="defaultUnchecked0"

          // checked={isChecked}
          // onChange={handleChange}
          //   checked={filterBy.includes("France")}
          //   onClick={() => handleToggleFilter("France")}
        />
        <label className="custom-control-label" for="defaultUnchecked0">
          Places in France
        </label>
      </div> */}
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="defaultUnchecked1"
          onClick={handleChange}
          disabled={title === "defaultUnchecked2" && checked === true}
          //   disabled={filterBy.includes("under100")}
          //   checked={filterBy.includes("over100")}
          //   onClick={() => handleToggleFilter("over100")}
        />
        <label className="custom-control-label" for="defaultUnchecked1">
          Prices above $100
        </label>
      </div>
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="defaultUnchecked2"
          onClick={handleChange}
          disabled={title === "defaultUnchecked1" && checked === true}
          //   disabled={filterBy.includes("over100")}
          //   checked={filterBy.includes("under100")}
          //   onClick={() => handleToggleFilter("under100")}
        />
        <label className="custom-control-label" for="defaultUnchecked2">
          Prices under $100
        </label>
      </div>

      <MDBBtn
        className="filter-btn"
        color="deep-orange"
        href=""
        onClick={handleApply}
      >
        Apply
      </MDBBtn>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterUnderHundred: () => dispatch(filterUnderHundred()),
});

export default connect(null, mapDispatchToProps)(FilterComponent);
