import React, { Component } from 'react';
import PropTypes from 'prop-types'

import shouldPureComponentUpdate from 'react-pure-render/function';

const K_SIZE = 20;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '5px solid #c5050c',
  borderRadius: K_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#c5050c',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: '5px solid #c5050c',
  color: '#ffffff',
  backgroundColor: '#c5050c'
};

class LocationMapMarker extends Component {
    
    static propTypes = {
      // GoogleMap pass $hover props to hovered components
      // to detect hover it uses internal mechanism, explained in x_distance_hover example
      $hover: PropTypes.bool,
      text: PropTypes.string
    };
  
    static defaultProps = {};

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;

        return (
        <div style={style}>
            {this.props.text}
        </div>
        );
    }
}

export default LocationMapMarker;