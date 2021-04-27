import React from 'react'
import styled from 'styled-components'
import CloseButton from '../parts/CloseButton'
import { useLockBodyScroll } from "../hooks"
import { mixins } from "../css-variables"

const GenericModal = ({data, button, closeCallback}) => {

  const OuterWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: rgba(0,0,0,.58);
  backdrop-filter: blur(0);
  
  `

  const ContentWrapper = styled.div`
    height: 80%;
    width: 80%;
    top: 50%;
    left: 50%;
    position: relative;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 1002;
    
    
  `

  const PropData = styled.div`
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    a {
      ${mixins.a}
    }
  `
  


  useLockBodyScroll();

  return (
    <OuterWrapper>
      <ContentWrapper>
        {data ? <PropData>{data}</PropData> : null}
        {button ? button :
         <CloseButton
          callback={closeCallback}
          styleProps={{position: `absolute`, top: `8px`, right: `8px`}}
         />
        }
      </ContentWrapper>
    </OuterWrapper>
  )
}

export default GenericModal
