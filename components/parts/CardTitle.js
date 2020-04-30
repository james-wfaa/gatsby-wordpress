import React from "react"
import styled from 'styled-components'
import { baseSize, colors } from '../css-variables'

const CardTitle = ({ className, title }) => (
    <h3 className={className}>{title}</h3>
)

const StyledCardTitle = styled(CardTitle)`
color: ${colors.titleColor};
font-size: 1.333rem;
font-style: italic;
font-weight: bold;

`

export default StyledCardTitle