import React from "react"
import styled from 'styled-components'

const Container = ({ className, children }) => (
    <div className={className}>{children}</div>
)
const StyledContainer = styled(Container)`
border: 1px solid #ccc;
background-color: #bbb;
padding: 16px;
margin-bottom: 32px;
`
export default StyledContainer