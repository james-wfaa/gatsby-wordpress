import React from "react"
import { css } from "styled-components"

const VimeoVideo = ({ videoID }) => {
  let videoURL = `https://player.vimeo.com/video/${videoID}?title=0&byline=0&portrait=0&playsinline=0&autoplay=1&autopause=0&controls=0&loop=1&background=1`
  let wrapperCss = css`
    width: 100%;
    height: 100vh;
    object-fit: cover;
  `
  let sourceCss = css`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `
  return (
    <video
      src="https://player.vimeo.com/external/461136161.hd.mp4?s=281b7ccea86e048329dcfc896f384c27773db220&profile_id=175"
      autoPlay
      muted
      loop
      preload
      css={wrapperCss}
    ></video>
    // <div css={wrapperCss}>
    //   <iframe
    //     src={videoURL}
    //     css={iframeCss}
    //     frameborder="0"
    //     allow="autoplay; fullscreen"
    //     allowfullscreen
    //   />
    // </div>
  )
}

export default VimeoVideo
