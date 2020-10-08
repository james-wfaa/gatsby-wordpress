import React from "react"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import LocationMap from '../content-modules/LocationMap'
import BikeIcon from '../../svg/Transportation_icons_bike_blk_2x.svg' 
import BusIcon from '../../svg/Transportation_icons_bus_subway_blk_2x.svg'
import CarIcon from '../../svg/Transportation_icons_car_blk_2x.svg'
import WalkIcon from '../../svg/Transportation_icons_walk_blk_2x.svg'



const EventMapDetails = ({ className, venue }) => {

    const addressString = venue.address ? venue.title + '<br />' + venue.address + '<br />' + venue.city + ',' + venue.state : '';
    const dirLink = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(addressString);
    const location = {
        lat: venue.latitude,
        lng: venue.longitude,
    };

    return (
        <div className={className} id="EventMap">
            <div className="venueContent">
                { addressString && (
                    <div className="addressWrap">
                        <div className="address" dangerouslySetInnerHTML={{ __html: addressString }} />
                        <div className="icons ">
                            <ul className="travelIcons">
                                <li><a className="car" title="Driving Directions" href={`${dirLink}&travelmode=driving`} target="_blank"></a></li>
                                <li><a className="walk" title="Walking Directions" href={`${dirLink}&travelmode=walking`} target="_blank"></a></li>
                                <li><a className="bus" title="Transit Directions" href={`${dirLink}&travelmode=transit`} target="_blank"></a></li>
                                <li><a className="bike" title="Biking Directions" href={`${dirLink}&travelmode=bicycling`} target="_blank"></a></li>
                            </ul>
                        </div>
                   </div>
                )}

                { !addressString && (
                    <div className="address">{venue.title}</div>
                )}
                { venue.content && (
                    <div className="detailsWrap">
                        <div className="subHeader">Event Details</div>
                        <div className="details" dangerouslySetInnerHTML={{ __html: venue.content }} />
                    </div>
                )}

            </div>
            { (location.lat && location.lng) && (
                <div className="venueMap">
                    <LocationMap center={location} />
                </div>
            )}

        </div>
    )
}

const StyledEventMapDetails = styled(EventMapDetails)`

    max-width: 304px;
    display: flex;
    flex-flow: column-reverse;
    text-align: left;
    position: relative;
    margin-bottom: ${sizes.s88};
    margin: 0 auto;
    background-color: ${colors.bgLightGrey};
    color: ${colors.mapDetailsText};

    @media screen and ${breakpoints.tabletS} {
        max-width: 534px;
        flex-flow: row;
    }
    @media screen and ${breakpoints.laptopS} {
        max-width: 712px;
    }

    .venueContent{
        padding: ${sizes.s16};
        padding-bottom: 0;

        @media screen and ${breakpoints.tabletS} {
            flex: 1 1 0px
        }
        @media screen and ${breakpoints.laptopS} {
            padding: ${sizes.s32};
            padding-bottom: 0;

        }

        .address{
            font-size: ${sizes.s18};
            line-height: ${sizes.s26};    
            font-weight: 800;
        }

        .subHeader{
            position: relative;
            font-weight: 800;
            margin-top: ${sizes.s24};
            margin-bottom: ${sizes.s16};
            font-size: ${sizes.s18};
            line-height: ${sizes.s26};    

            @media screen and ${breakpoints.tabletS} {
                margin-top: ${sizes.s32};
            }

        }
        .travelIcons {
            width: 160px;
            display: flex;
            list-style-type: none;
        
            margin: 0;
            margin-top: ${sizes.s24};
            @media screen and ${breakpoints.tabletS} {
                margin-top: ${sizes.s32};
            }
        
            li {
              display: block;
              width: ${sizes.s24};
              height: ${sizes.s24};
              margin: 0 ${sizes.s16} 0 0;
        
              a {
                display: block;
                width: ${sizes.s24};
                height: ${sizes.s24};
                background-color: ${colors.iconGrey};
                &:hover {
                  background-color: ${colors.buttonRed};
                }
                &.car {
                  mask: url(${CarIcon}) no-repeat;
                  mask-position: center;
                }
                &.walk {
                  mask: url(${WalkIcon}) no-repeat;
                  mask-position: center;
                }
                &.bus {
                  mask: url(${BusIcon}) no-repeat;
                  mask-position: center;
                }
                &.bike {
                  mask: url(${BikeIcon}) no-repeat;
                  mask-position: center;
                }
              }
            }
          }
    
    }

    .venueMap{
        @media screen and ${breakpoints.tabletS} {
            flex: 1 1 0px
        }
    }

`

export default StyledEventMapDetails