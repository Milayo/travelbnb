import React from "react";
import { useHistory } from "react-router-dom";
import "./card.scss";
import {
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBCardText,
  MDBRow,
  MDBCardGroup,
  MDBCardImage,
  MDBCol,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";

const CardComponent = ({ location}) => {
  const { name, imageUrl, routeName } = location;
  const history = useHistory();
  return (
    <MDBContainer className="card-container">
      <MDBCardGroup>
        <MDBCol>
          <MDBCard
            style={{ width: "20rem", marginBottom: "25px" }}
            alignment="center"
          >
            <MDBCardImage src={imageUrl} alt="destination-img" position="top" />
            <MDBCardBody>
              <div className="icon-cardtitle">
                <MDBIcon icon="map-marker-alt" className="card-icon" />
                <p> {name}</p>
              </div>
              <MDBCardText>
                This is a wider card with supporting text below as a natural
              </MDBCardText>
              <MDBBtn
                color="deep-orange"
                style={{ borderRadius: "100px" }}
                onClick={() => {
                  history.push(`/destination/${routeName}`);
                }}
              >
                See More
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default CardComponent;
