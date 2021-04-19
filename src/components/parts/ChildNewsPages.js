import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, mixins } from "../css-variables"


const ChildNewsPages = ({ className, items }) => {
    const newsList = items.sort((a,b) => (a.dateGmt < b.dateGmt) ? 1 : -1).map((subpage) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
          const date = (subpage.month && subpage.dayYear) 
            ? `${months[parseInt(subpage.month)-1]} ${subpage.dayYear}`
            : ''
        return (<li key={subpage.id}><Link to={subpage.uri}>{subpage.title}</Link> - <span className="date">{date}</span></li>)
    })
    return items.length > 0 
        ? (<ul className={className} >{newsList}</ul>)
        : <p>There are currently no published news items or stories.</p>
}

const StyledChildNewsPages = styled(ChildNewsPages)`
    display: block;
    text-align: left;
    a {
        ${mixins.a}
    }
    .date {
        color: ${colors.captionGrey};
    }

`
export default StyledChildNewsPages
