import React from "react"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import LocationMap from '../content-modules/LocationMap'

const EventMapDetails = ({ className, venue }) => {

    return (
        <div className={className}>
            <div className="venueContent">
                <div className="address">{venue.title}<br></br>{venue.address}<br></br>{venue.city}, {venue.state}</div>
                <div className="icons "></div>
                <div className="subHeader">Event Details</div>
                <div className="details" dangerouslySetInnerHTML={{ __html: venue.content }} />

            </div>
            <div className="venueMap">
                <LocationMap />
            </div>

        </div>
    )
}

const StyledEventMapDetails = styled(EventMapDetails)`

    max-width: 304px;
    display: flex;
    flex-flow: column;
    text-align: left;
    position: relative;
    margin-bottom: ${sizes.s88};
    background-color: ${colors.bgLightGrey};

    @media screen and ${breakpoints.tabletS} {
        max-width: 534px;
        flex-flow: row;
    }
    @media screen and ${breakpoints.laptopS} {
        max-width: 712px;
    }

    .venueContent{
        padding: ${sizes.s18};
        padding-bottom: 0;

        @media screen and ${breakpoints.tabletS} {
            flex: 1 1 0px
        }
        @media screen and ${breakpoints.tabletL} {
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
            margin-top: ${sizes.s50};
            margin-bottom: ${sizes.s21};
            font-size: ${sizes.s13};
            line-height: ${sizes.s19};
    
            @media screen and ${breakpoints.tabletL} {
                font-size: ${sizes.s18};
                line-height: ${sizes.s26};    
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