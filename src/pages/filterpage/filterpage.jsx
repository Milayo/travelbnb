import React from 'react';
import "./filterpage.scss";
import { connect } from 'react-redux';
import { toggleFilterButton } from '../../redux/filter/filter.actions';
import { MDBIcon } from 'mdb-react-ui-kit';
import FilterComponent from '../../components/filter/filter';

const FilterPage = ({ toggleFilterButton }) => {
  return (
    <div className="filterpage">
      <MDBIcon
        icon="times"
        size="2x"
        className="cancel-icon"
        onClick={toggleFilterButton}
      />
      <FilterComponent />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleFilterButton: () => dispatch(toggleFilterButton()),
});

export default connect(null, mapDispatchToProps)(FilterPage);
