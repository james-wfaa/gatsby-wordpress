import React from "react"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import LocationMap from '../content-modules/LocationMap'
import BikeIcon from '../../svg/Transportation_icons_bike_blk_2x.svg' 
import BusIcon from '../../svg/Transportation_icons_bus_subway_blk_2x.svg'
import CarIcon from '../../svg/Transportation_icons_car_blk_2x.svg'
import WalkIcon from '../../svg/Transportation_icons_walk_blk_2x.svg'



const EventMapDetails = ({ className, venue, eventDetails }) => {

    const addressString = (venue && venue.address) 
    ? venue.title + `<br />${venue.address}<br />${venue.city ? venue.city : ""}${venue.state ? `, ${venue.state}` : ""}`
    : '';
    const dirLink = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(addressString);
    const location = (venue && venue.latitude && venue.longitude) 
        ? {
        lat: venue.latitude,
        lng: venue.longitude,
        }
        : null

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

                { !addressString && venue && venue.title && (
                    <div className="address">{venue.title}</div>
                )}
                { eventDetails && eventDetails.eventlocationDetails && (
                    <div className="detailsWrap">
                        <div className="subHeader">Additional Details</div>
                        <div className="details" dangerouslySetInnerHTML={{ __html: eventDetails.eventlocationDetails }} />
                    </div>
                )}

            </div>
            { (location && location.lat && location.lng) && (
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
    }
    @media screen and ${breakpoints.laptopS} {
        max-width: 712px;
        flex-flow: row;
    }

    .venueContent{
        padding: ${sizes.s16};

        @media screen and ${breakpoints.laptopS} {
            padding: ${sizes.s32};
            flex: 1 1 0px


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

          .detailsWrap{
              p:last-child{
                  margin-bottom: 0;
              }
          }
    
    }

    .venueMap{
        @media screen and ${breakpoints.laptopS} {
            flex: 1 1 0px
        }
    }

`

export default StyledEventMapDetails