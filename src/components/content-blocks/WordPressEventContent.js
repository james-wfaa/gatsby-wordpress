import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import styled from 'styled-components'
import quotationMarks from '../../svg/Testimonial_Quotation_Marks_2x.svg'
import EventRegistration from "../content-blocks/EventRegistration"
import WordPressContent from "../content-blocks/WordPressContent"
import StorySectionHeader from '../parts/StorySectionHeader'





const WordPressEventContent = ({className, content, date, startDate, endDate, link, venue, cost, organizers, title}) => {

    return(
        <div className={className}>
            <div className={`${className}__col1`}>
                <StorySectionHeader className={`${className}__header`} heading={title} event />
                <WordPressContent className={`${className}__content`} content={content} />
            </div>
            <div className={`${className}__col2`}>
                <EventRegistration className={`${className}__reg`} date={date} registrationLink={link} startDate={startDate} endDate={endDate} venue={venue} cost={cost} organizers={organizers}></EventRegistration>
            </div>

        </div>
    )
}
const StyledWordPressEventContent = styled(WordPressEventContent)`
@media screen and ${breakpoints.laptopS} {
    width: 814px;
    margin: 0 auto;
    display: flex;
}
@media screen and ${breakpoints.laptopL} {
    width: 1080px;
}

&__col1{
    width: 712px;
}
&__col2{
    margin-left: 116px;
}

&__header{
    @media screen and ${breakpoints.laptopS} {
    }
}
&__reg{
    @media screen and ${breakpoints.laptopS} {
    }
}
&__content{
    @media screen and ${breakpoints.laptopS} {
    }
}


`
export default StyledWordPressEventContent