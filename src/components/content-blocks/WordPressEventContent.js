import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import styled from 'styled-components'
import quotationMarks from '../../svg/Testimonial_Quotation_Marks_2x.svg'
import EventRegistration from "../content-blocks/EventRegistration"
import WordPressContent from "../content-blocks/WordPressContent"




const WordPressEventContent = ({className, content, date, startDate, endDate, link, venue, cost, organizers}) => {

    return(
        <div className={className}>
            <EventRegistration date={date} registrationLink={link} startDate={startDate} endDate={endDate} venue={venue} cost={cost} organizers={organizers}></EventRegistration>
            <WordPressContent content={content} />
        </div>
    )
}
const StyledWordPressEventContent = styled(WordPressEventContent)`
    @media screen and ${breakpoints.laptopS} {
        display: flex;
        flex-direction: row-reverse;
        width: 814px;
        margin: 0 auto;
    }
    @media screen and ${breakpoints.laptopL} {
        display: flex;
        flex-direction: row-reverse;
        width: 1080px;
        margin: 0 auto;
    }

    EventRegistration{
        z-index: 1;
    }

`
export default StyledWordPressEventContent