import React from "react"
import styled from 'styled-components'
import { colors } from '../css-variables'
import CardTitle from '../parts/CardTitle'
const CardD = ({ className, children }) => {

    return (
        <div className={className}>
            {children}
        </div>
    )
}

const StyledCardD = styled(CardD)`
width: 344px;
min-height: 344px;
margin: 30px;
position: relative;

`

export default StyledCardD