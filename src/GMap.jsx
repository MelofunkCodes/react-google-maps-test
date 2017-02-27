import React from 'react';
import {GoogleMap, Marker, InfoWindow, withGoogleMap} from "react-google-maps";
//REFERENCE: https://github.com/tomchentw/react-google-maps


//==================GLOBAL RE-USABLE FUNCTIONS===============================
function toLatLng(geo_loc){
    //var array = "45 -73".split(" ").map(element => +element); //returns [45, -73]
    var array = geo_loc.split(" ")
                .map(element => +element);
                
    var latLng = {lat: array[0], lng: array[1]};
    return latLng;
}

function formatMarkers(store){
  console.log("store name: ", store.supplier_name);
  return {
    position: toLatLng(store.geo_loc),
    showInfo: false,
    infoContent: (
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">{store.supplier_name}</h1>
              <div id="bodyContent">
                <p>{store.address}</p>
                <p>{store.city}, {store.province}</p>
                <p>{store.tel}</p>
              </div>
            </div>
          )
  };  
}

//===========================================================================

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
      defaultAnimation: 2
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  //this fetches the sneaker stores in Montreal from our shoestagram API retail_shops endpoint 
  fetchData(){
    console.log("before fetching");

    fetch(`https://cors-anywhere.herokuapp.com/http://shoestagram-allendecodemtl.c9users.io/retail_shops`)
    .then(response => response.json())
    .then(function(data){

      console.log(data);

      var markerArray = data.map(formatMarkers);

      //upon fetching, insert marker data
      this.setState({
        markers: markerArray
      });
    }.bind(this));
  }

  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick(targetMarker){

    this.setState({
      markers: this.state.markers.map( marker => {
        if (marker.showInfo === true ) {
          return {
            ...marker,
            showInfo: false
          };
        } //closes any infowindow that's open

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
    //containerElement and mapElement used to be 400px by 400px
    return (
      <SneakerMap
        containerElement={<div className="sneaker-map-container" style={{width: `100%`, height: `100%`, position: `relative`, margin: `0 auto`, overflow: `hidden`}}/>}
        mapElement={<div className="sneaker-map" style={{width: `100%`, height: `100%`, position: `absolute`}}/>}
        center={this.state.center}
        markers={this.state.markers}
        onMarkerClick={this.handleMarkerClick}
        onMarkerClose={this.handleMarkerClose}
      />
    );
  }
}

export default GMap;

//NOTE: copied CSS styling for SneakerMap from https://www.ostraining.com/blog/coding/responsive-google-maps/
