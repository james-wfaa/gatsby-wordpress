import React from "react"

const VimeoVideo = ({ videoID }) => {
  let videoURL = `https://player.vimeo.com/video/${videoID}?title=0&byline=0&portrait=0&playsinline=0&autoplay=1&autopause=0&controls=0&loop=1&background=1`
  return (
    <div style={{ padding: `46.88% 0 0 0`, position: `relative` }}>
      <iframe
        src={videoURL}
        style={{
          position: `absolute`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100%`,
        }}
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
    </div>
  )
}

export default VimeoVideo
