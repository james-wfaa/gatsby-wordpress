import { attributesToProps } from "html-react-parser";
import React, { useContext } from "react"
import styled from 'styled-components'
import { mixins, colors, fonts, sizes, breakpoints } from '../../css-variables'
import { AppContext } from "../../../context/AppContext"

const ProgressBar = ({ progress, currentStep }) => {
    
    //console.log(progress, currentStep)
    
    let increment = 33
    let current = progress.indexOf(currentStep)
    switch(progress.length - 1){
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
    if(currentStep === 35){
        current = 2
    }
    let progressWidth = increment * current + '%'
    if(currentStep === 8){
        progressWidth = `100%`
    }
    
    //console.log(progress, currentStep, current, progressWidth)
 return  (
        <StyledProgressBar>
            <div className="progress-bar-wrapper">
                <div className="progress" style={{ width: `${progressWidth}` }}></div>
            </div>
        </StyledProgressBar>
    )
}
const StyledProgressBar = styled.div`
    width: 100%;
    background-color: white;
    position:relative;
    padding: 0 2rem;
    @media screen and ${breakpoints.tabletS} {
        max-width:896px;
        margin:0 auto;
        padding: 0;
    }
    .progress-bar-wrapper{
        border: 1px solid ${colors.buttonRed};
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
    }
    //light red bar
    /*&:before{
        content: '';
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
        height: 12px;
        background-color: #ffcccb;
      }*/
      
  
`
export default ProgressBar