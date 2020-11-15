import React from 'react'
import styled from 'styled-components'
import CloseButton from '../parts/CloseButton'
import { useLockBodyScroll } from "../hooks"




const GenericModal = ({data, opacity, button, closeCallback}) => {
  let wrapperOpacity = `rgba(0,0,0,${opacity})`

  const OuterWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: ${wrapperOpacity};
  backdrop-filter: blur(15px);
  `

  const ContentWrapper = styled.div`
    height: 80%;
    width: 80%;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: white;
  `

  const PropData = styled.div`
    width: 80%;
    margin: 0 auto;
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
