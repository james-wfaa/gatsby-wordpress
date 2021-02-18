import React from "react"
import styled from 'styled-components'
import { colors, breakpoints } from '../css-variables'

const ProgressBar = ({ progress, currentStep }) => {
    
    let increment = 33
    let current = progress.indexOf(currentStep)
    switch(progress.length - 2){
        case 3:
            increment = 33.333
            break;
        case 4:
            increment = 25
            break;
        case 5:
            increment = 20
            break;
        case 6:
            increment = 16.666
            break;
        case 7:
            increment = 14.285
            break;
     }
    let progressWidth = increment * current + '%'
    let currentPageProgressWidth = increment + '%'
    if(currentStep === 8){
        progressWidth = `100%`
        currentPageProgressWidth = `0%`
    }
    
 return  (
        <StyledProgressBar>
            <div className="progress-bar-wrapper">
                <div className="progress" style={{ width: `${progressWidth}` }}></div>
                <div className="progress-step" style={{ width: `${currentPageProgressWidth}` }}></div>
            </div>
        </StyledProgressBar>
    )
}
const StyledProgressBar = styled.div`
    width: 100%;
    background-color: white;
    position:relative;
    padding: 0 2rem;
    max-width:896px;
    margin:0 auto;
    @media screen and ${breakpoints.laptopS} {
        padding: 0;
    }
    .progress-bar-wrapper{
        border: 1px solid ${colors.buttonRed};
        line-height:0;
        .progress{
            background-color: ${colors.buttonRed};
            height: 12px;
            position:relative;
            display:inline-block;
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
        .progress-step{
            background-color: #ffcccb;
            display: inline-block;
            height: 12px;
        }
    }
    /*
    //light red bar
    &:before{
        content: '';
        display: inline-block;
        position: absolute;
        left: 0;
        top: 1px;
        width: 50%;
        height: 12px;
        background-color: #ffcccb;
    }*/
      
  
`
export default ProgressBar