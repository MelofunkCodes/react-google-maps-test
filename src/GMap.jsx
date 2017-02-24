import React from 'react';
import {GoogleMap, Marker, InfoWindow, withGoogleMap} from "react-google-maps";
//REFERENCE: https://github.com/tomchentw/react-google-maps


//React allows you if you have a component that just renders something, to pass it as a function
//in the case of tomchentw's react-google-map wrapper, you're passing the function SimpleMap to withGoogleMap and it's a higher order function

//WHAT IT DOES: SneakerMap renders a google map along with its markers and infowindows
const SneakerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.center}>

    {props.markers.map( (marker,index) => (
      <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)} >

        {/*
          Show info window only if the 'showInfo' key of the marker is true.
          That is, when the Marker pin has been clicked and 'onCloseClick' has been
          Successfully fired.
        */}

        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
          )}
      </Marker>
      ))}
  </GoogleMap>
));



class GMap extends React.Component {
  constructor(){
    super();

    this.state = {
      center: {
        lat: 45.502057,
        lng: -73.57153917
      },
      defaultAnimation: 2,
      // array of objects of markers
      markers: [
        {
          position: {lat: 45.503307, lng: -73.56968049999999},
          showInfo: false,
          infoContent: (
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">New Balance Montreal</h1>
              <div id="bodyContent">
                <p>654 Rue Sainte-Catherine O</p>
                <p>Montreal, QC</p>
                <p>514-844-2777</p>
              </div>
            </div>
          ),
        },
        {
          position: {lat: 45.4983057, lng: -73.57463},
          showInfo: false,
          infoContent: (
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">Adidas Originals Montreal</h1>
              <div id="bodyContent">
                <p>1238 Rue Sainte-Catherine O</p>
                <p>Montreal, QC</p>
                <p>514-844-2777</p>
              </div>
            </div>
          )
        }
      ]
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
  }

  // componentDidMount(){
  //   this.fetchData();
  // }

  // fetchData(){
  //   this.setState({
  //     loading: true
  //   });

  //   console.log("before fetching");

  //   fetch(`https://cors-anywhere.herokuapp.com/http://shoestagram-allendecodemtl.c9users.io/retail_shops`)
  //   .then(response => response.json())
  //   .then(function(data){

  //     console.log(data);

  //     //upon fetching, insert marker data
  //     this.setState({
  //       stores: data,
  //       loading: false
  //     });
  //   }.bind(this));
  // }

  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick(targetMarker){
    this.setState({
      markers: this.state.markers.map( marker => {
        if(marker === targetMarker){
          return {
            ...marker,
            showInfo: true
          };
        }
        return marker;
      })
    }); //closing brackets for this.setState
  }

  handleMarkerClose(targetMarker){
    this.setState({
      markers: this.state.markers.map( marker => {
        if(marker === targetMarker){
          return {
            ...marker,
            showInfo: false
          };
        }
        return marker;
      })
    }); //closing brackets for this.setState
  }

  render(){
    return (
      <SneakerMap
        containerElement={<div style={{width: 400, height: 400}}/>}
        mapElement={<div style={{width: 400, height: 400}}/>}
        center={this.state.center}
        markers={this.state.markers}
        onMarkerClick={this.handleMarkerClick}
        onMarkerClose={this.handleMarkerClose}
      />
    );
  }
}

export default GMap;
