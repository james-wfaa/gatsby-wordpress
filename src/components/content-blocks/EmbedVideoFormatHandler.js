import React from 'react'
import { css } from "styled-components"
import { breakpoints } from '../css-variables'

const EmbedVideoFormatHandler = ({source}) => {

  let wrapperCss = css`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    border: none;
  `

  let divCss = css`
    position: relative;
    height: 244px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 18px;
    
    @media screen and ${breakpoints.tabletS} {
      height: 385px;
    }
  ` 
  const vimeoURL = source ? 'https://vimeo.com/' + source : null

  const parsedURL = (source) => {
    const vimeoRegex = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
    const parsed = source.match(vimeoRegex);
  
    return "//player.vimeo.com/video/" + parsed[1];    
  }

  const embedURL = vimeoURL ? parsedURL(vimeoURL) : null

  

  return embedURL ? (
    <div css={divCss}>
      <iframe
        css={wrapperCss}
        src={embedURL}
        scrolling="no"
        frameborder="0"
        allowFullScreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    </div>
  )
  : null

}


export default EmbedVideoFormatHandler

