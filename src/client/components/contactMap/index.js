import React, { Component } from "react";
// import GoogleMap from '../../assets/images/google-map.jpg';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class ContactMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlace: { name: null }
    };
  }
  
  onMarkerClick() {
    alert("Hello");
  }
  render() {
    return (
      <div className="contact-map">
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 28.554175,
            lng: 77.251319
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          {/* <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCG4pdrtultSAWkEBr7wUW0bo95r5as-hI"
})(ContactMap);
