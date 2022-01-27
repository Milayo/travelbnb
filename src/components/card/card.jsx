import React from "react";
import "./card.scss";
import {
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCardGroup,
  MDBCardImage,
  MDBCol,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";

const CardComponent = ({ location}) => {
  const { name, imageUrl } = location;
  return (
    <MDBContainer className="card-container">
        <MDBCardGroup>
          <MDBCol>
            <MDBCard
              style={{ width: '20rem', marginBottom: "25px" }}
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
                  href="#"
                  color="deep-orange"
                  style={{ borderRadius: "100px" }}
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
