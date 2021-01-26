import { attributesToProps } from "html-react-parser";
import React, { useContext } from "react"
import styled from 'styled-components'
import { mixins, colors, fonts, sizes, breakpoints } from '../../css-variables'
import { AppContext } from "../../../context/AppContext"

const ProgressBar = ({ progress, currentStep }) => {
    
    //console.log(progress, currentStep)
    
    let increment = 33
    let current = progress.indexOf(currentStep)
    switch(progress.length){
        case 3:
            increment = 33
            break;
        case 4:
            increment = 25
            break;
        case 5:
            increment = 20
            break;
        case 6:
            increment = 16
            break;
        case 7:
            increment = 14
            break;
     }
    
    let progressWidth = increment * current + '%'
    //console.log(progress, currentStep, current, progressWidth)
 return  (
        <StyledProgressBar>
            <div className="progress" style={{ width: `${progressWidth}` }}></div>
        </StyledProgressBar>
    )
}
const StyledProgressBar = styled.div`
    width: 100%;
    background-color: white;
    border: 1px solid ${colors.buttonRed};
    max-width: 712px;
    margin: 0 auto;
    position:relative;
    .progress{
      background-color: ${colors.buttonRed};
      height: 12px;
      position:relative;
      &:after{
        content: '';
        display: inline-block;
        position: absolute;
        right: -4px;
        top: -2px;
        width: 16px;
        height: 16px;
        -moz-border-radius: 7.5px;
        -webkit-border-radius: 7.5px;
        border-radius: 7.5px;
        background-color: #fff;
        border: 1px solid ${colors.buttonRed};
      }
    }
    &:before{
        content: '';
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
        height: 12px;
        background-color: #ffcccb;
      }
  
`
export default ProgressBar