import React from "react"
import styled from 'styled-components'
import { size } from '../css-variables'

/* this just renders an <hr> element that is 655px long, for a visual cue on where the mobile breakpoint is. */
const MobileHr = styled.hr`
width: ${size.laptopS};
margin-bottom: 0;

`
export default MobileHr