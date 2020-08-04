import React from 'react'
import styled from 'styled-components'
import { sizes } from '../css-variables'


const Copyright = ({ className }) => {

  let d = new Date().getFullYear();
  return (
    <div className={className}>
      <div> &copy; {`${d}`} Wisconsin Foundation & Alumni Association. All rights reserved.</div>
    </div>
  )
} 

const StyledCopyright = styled(Copyright)`
padding: ${sizes.s24} ${sizes.s45};
max-width: 900px;
margin: 0 auto;
div {
  margin-bottom: 0.5em;
}
`

export default StyledCopyright