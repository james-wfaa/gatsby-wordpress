import React from "react"
import { css } from "styled-components"
import { mixins } from '../css-variables'

import { useWindowSize } from "../hooks"

const VimeoVideo = ({ videoURL, heroSize, heroHeading }) => {
  const { width } = useWindowSize();

  let size = "720px";
  if (heroSize === 'jumbo') {
    size = width > 655 ? "calc(100vh - 118px)" : "calc(100vh - 86px)"
  }


  let wrapperCss = css`
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  `
  let divCss = css`
    height: ${size};
    width: 100%;
    overflow: hidden;
  `
  let headingCss = css`
    ${mixins.introHeading}
    top: calc(${size} / 2) !important;
  `
  return (
    <div css={divCss}>
      <video
        src={videoURL}
        autoPlay
        muted
        loop
        preload
        css={wrapperCss}
      ></video>
      {heroHeading && (
              <div
                className="heading--video"
                css={headingCss}
                dangerouslySetInnerHTML={{ __html: heroHeading }}
              />
          )}

    </div>

  )
}

export default VimeoVideo
