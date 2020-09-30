import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import styled from 'styled-components'
import quotationMarks from '../../svg/Testimonial_Quotation_Marks_2x.svg'
import EventRegistration from "../content-blocks/EventRegistration"
import WordPressContent from "../content-blocks/WordPressContent"
import TitleSection from '../parts/WordPressTitleSection'





const WordPressEventContent = ({className, content, date, startDate, endDate, link, venue, cost, organizers, title}) => {

    return(
        <div className={className}>
           
            <div className="desktopWrap">
                <TitleSection className="header" heading={title} event />
                <div className="mobileWrap">
                    <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
                    <EventRegistration 
                        className="reg-mobile" 
                        date={date} 
                        registrationLink={link} 
                        startDate={startDate} 
                        endDate={endDate} 
                        venue={venue} 
                        cost={cost} 
                        organizers={organizers} 
                    />
                </div>
            </div>
            <EventRegistration 
                className="reg-desktop" 
                date={date}
                registrationLink={link} 
                startDate={startDate} 
                endDate={endDate} 
                venue={venue} cost={cost} 
                organizers={organizers} 
            />
           
        </div>
    )
}
const StyledWordPressEventContent = styled(WordPressEventContent)`
padding-bottom: ${sizes.s58};
@media screen and ${breakpoints.laptopS} {
    display: flex;
    
    max-width: 1080px;
    margin: 0 auto;
    padding-bottom: ${sizes.s88};
}
@media screen and ${breakpoints.laptopL} {
    width: 1080px;
}

.mobileWrap {
    display: flex;
    flex-direction: column-reverse;
    @media screen and ${breakpoints.laptopS} {
        display: block;
    }
}

.header{
    @media screen and ${breakpoints.laptopS} {
    }
}

.reg-desktop {
    display: none;
    @media screen and ${breakpoints.laptopS} {
        display: block;
        margin-left: 116px;
    }
    
}
.reg-mobile {
    min-width: 300px;
    width: 100%;   
    max-width: 712px;
    padding: 0 ${sizes.s36};
    margin: 0 auto;
    @media screen and ${breakpoints.tablet} {
        padding: 0;
    }
    @media screen and ${breakpoints.laptopS} {
        display: none;
    }

}
    
.content{
    > p, 
    > ul,
    > h2,
    > h3 {
        min-width: 300px;
        width: 100%;
        padding-left: ${sizes.s36};
        padding-right: ${sizes.s36};
       
        
        @media screen and ${breakpoints.tablet} {
            max-width: 712px;
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
    
}
h2 {
    font-size: ${sizes.s18};
    font-weight: bold;
    margin-bottom: ${sizes.s16};
}


`
export default StyledWordPressEventContent