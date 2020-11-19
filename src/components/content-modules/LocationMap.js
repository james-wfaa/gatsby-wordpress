import React, { Component } from 'react';
import PropTypes from 'prop-types'

import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMapReact from 'google-map-react';
import LocationMapMarker from './LocationMapMarker'


class LocationMap extends Component {
  static propTypes = {
    center: PropTypes.object,
    breakpoint: PropTypes.number,
    zoom: PropTypes.number,
    mobileZoom: PropTypes.number,
    placeCoords: PropTypes.any
  }
  static defaultProps = {
    center: {
      lat: 43.074,
      lng: -89.398
    },
    breakpoint: 768,
    zoom: 14.3,
    mobileZoom: 13.25
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  _getZoom() {
    return (typeof window !== 'undefined' && window.innerWidth < this.props.breakpoint)
    ? this.props.mobileZoom
    : this.props.zoom
  }


  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '435px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA57hYRTUBC1pxd07EREa_t6_wQegZwjPA' }}
          defaultCenter={this.props.center}
          defaultZoom={this._getZoom()}
          hoverDistance={20}
        >
          <LocationMapMarker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default LocationMap;