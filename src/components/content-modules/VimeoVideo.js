import React from "react"
import { css } from "styled-components"
import { useWindowSize } from "../hooks"

const VimeoVideo = ({ videoURL, heroSize }) => {
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

    </div>

  )
}

export default VimeoVideo
