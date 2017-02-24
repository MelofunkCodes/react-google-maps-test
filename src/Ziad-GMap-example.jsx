//copied over from GMap.jsx

import React from 'react';
import {GoogleMap, Marker, InfoWindow, withGoogleMap} from "react-google-maps";
//REFERENCE: https://github.com/tomchentw/react-google-maps


//React allows you if you have a component that just renders something, to pass it as a function
//in the case of tomchentw's react-google-map wrapper, you're passing the function SimpleMap to withGoogleMap and it's a higher order function

export default withGoogleMap(function SimpleMap (props) {

  return (
    <section style={{height: "100%"}}>
      <GoogleMap containerProps={{
          style: {
            height: "100%",
          },
        }}
        defaultZoom={12}
        defaultCenter={{lat: 45.5, lng: -73.5}}
        onClick={props.onMapClick}
      >
        {props.markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              position={marker}
              onRightclick={() => props.onMarkerRightclick(index)} />
          );
        })}
      </GoogleMap>
    </section>
  );
});