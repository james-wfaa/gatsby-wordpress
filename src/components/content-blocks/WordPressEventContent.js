import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import styled from 'styled-components'
import EventRegistration from "../content-blocks/EventRegistration"
import TitleSection from '../parts/WordPressTitleSection'
import EventMapDetails from "../content-blocks/EventMapDetails"
import SocialShareLinks from "../parts/SocialShareLinks"
import Button from "../parts/Button"


const WordPressEventContent = ({className, content, date, startDate, endDate, link, venue, cost, organizers, title, eventDetails}) => {

    return(
        <div className={className}>
           
            <div className="desktopWrap">
                <TitleSection className="header" heading={title} event />
                <div className="mobileWrap">
                    <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
                    <EventRegistration 
                        className="reg-mobile" 
                        date={date} 
                        startDate={startDate} 
                        endDate={endDate} 
                        venue={venue} 
                        cost={cost} 
                        organizers={organizers} 
                        eventDetails={eventDetails}
                    />
                </div>
                
                <div className="social-mobile">
                    <Button link="#" text="Questions" fullwidth alt altborder />
                    <h2>Invite Others</h2>
                    <SocialShareLinks></SocialShareLinks>
                </div>

                <EventMapDetails 
                    className="eventMap" 
                    venue={venue}
                />
            </div>
            <div className="reg-desktop">
                <EventRegistration 
                    className="reg-Wrap" 
                    date={date}
                    registrationLink={link} 
                    startDate={startDate} 
                    endDate={endDate} 
                    venue={venue} cost={cost} 
                    organizers={organizers} 
                    eventDetails={eventDetails}
                />
                <div className="social-desktop">
                    <Button link="#" text="Questions" fullwidth alt altborder />
                    <h2>Invite Others</h2>
                    <SocialShareLinks></SocialShareLinks>
                </div>
            </div>


        </div>
    )
}
const StyledWordPressEventContent = styled(WordPressEventContent)`
padding-bottom: ${sizes.s58};
margin: ${sizes.s48} auto 0;

@media screen and ${breakpoints.tabletL} {
    display: flex;
    max-width: 814px;
    padding-bottom: ${sizes.s88};
    margin-top: ${sizes.s58}; 
}
@media screen and ${breakpoints.laptopS} {
    max-width: 1080px;
}
@media screen and ${breakpoints.laptopL} {
    width: 1080px;
}

.mobileWrap {
    display: flex;
    flex-direction: column-reverse;
    @media screen and ${breakpoints.tabletL} {
        display: block;
    }
}

.header{
    @media screen and ${breakpoints.tabletS} {
        max-width: 536px;
    }
}

.desktopWrap{
    @media screen and ${breakpoints.tabletL} {
        max-width: 534px;
    }
    @media screen and ${breakpoints.laptopS} {
        max-width: 712px;
    }
}

.reg-desktop {
    display: none;
    @media screen and ${breakpoints.tabletL} {
        display: block;
        margin-left: 93px;
        margin-top: 12px; /* to align with the header in the janky font */
        max-width: 187px;
        .reg-Wrap{
            max-width: 187px;
        }
    }
    @media screen and ${breakpoints.laptopS} {
        margin-left: 116px;
        max-width: 252px;
        .reg-Wrap{
            max-width: 252px;
        }
    }
}
.reg-mobile {
    min-width: 300px;
    width: 100%;   
    padding: 0 0 ${sizes.s32};
    margin: 0 auto ${sizes.s32};
    border-bottom: 18px solid ${colors.sectionBorder};
    @media screen and ${breakpoints.tabletL} {
        display: none;
    }

}

.social-mobile{
    ${mixins.socialStyles}
    min-width: 300px;
    max-width: 303px;
    margin: 0 auto;
    text-align: center;
    @media screen and ${breakpoints.tabletS} {
        max-width: 536px;
    }
    @media screen and ${breakpoints.tabletL} {
        display: none;
    }
}

.social-desktop{
    ${mixins.socialStyles}
    display: none;
    text-align: left;
    h2{
        margin-bottom: 0px;
    }
    @media screen and ${breakpoints.tabletL} {
        display: block;
    }
}
    
.content{
    > p, 
    > ul,
    > h2,
    > h3,
    > div,
    > table,
    > div.callout,
    > div.call-out {
        min-width: 300px;
        width: 100%;
        max-width: 303px;
        margin-left: auto;
        margin-right: auto;
       
        @media screen and ${breakpoints.tabletS} {
            max-width: 536px;
            padding-left: 0;
            padding-right: 0;
            margin-left: auto;
            margin-right: auto;

        }
        @media screen and ${breakpoints.laptopS} {
            margin-left: 0;
            max-width: 712px;
        }
        
    }
    ul {
        list-style-position: inside;
    }
    a {
        ${mixins.a}
    }
    
}
h2 {
    font-size: ${sizes.s18};
    font-weight: bold;
    margin-bottom: ${sizes.s16};
}


`
export default StyledWordPressEventContent