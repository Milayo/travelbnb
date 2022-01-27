import React from 'react';
import { connect } from "react-redux";

import DestinationComponent from '../../components/destination/destinationComponent';


const DestinationPage = (e, { locations }) => {
    const path = e.match.params.id;
    const { routeName } = locations;
    console.log(routeName)
    console.log(path)
    console.log(e)
    return (
        <div>
            <DestinationComponent/>
        </div>
    )
}

const mapStateToProps = ({ filter }) => ({
  locations: filter.Locations,
});

export default connect(mapStateToProps)(DestinationPage);
