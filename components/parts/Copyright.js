import React from 'react'
import styled from 'styled-components'

const Copyright = ({ className }) => {

  let d = new Date().getFullYear()
  return (
    <div className={className}>
      <div>&copy; Copyright {`${d}`} Wisconsin Foundation and Alumni Association. All rights reserved.</div>
    </div>
  )
} 

const StyledCopyright = styled(Copyright)`
padding: 2em 3em;
max-width: 900px;
margin: 0 auto;
div {
  margin-bottom: 0.5em;
}
`

export default StyledCopyright