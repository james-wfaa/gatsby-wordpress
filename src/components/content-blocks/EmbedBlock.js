import React from 'react'
import parse from 'html-react-parser';

const EmbedBlock = ({source, type}) => {
  //console.log(type)
  //console.log(source)
  let parsed
  //console.log(source.children)
  //console.log(parse(data.data))
  let interactQuizClass = source && source?.includes('tryinteract') ? 'quiz-embed' : null;

  
  switch (type) {
    case "vimeo":
      //console.log(source)
      parsed = parse(source)
      if (
        parsed?.props?.children &&
        parsed.props.children?.props?.className &&
        parsed.props.children.props.className === "wp-block-embed__wrapper"
      ) {
        //console.log("match")
        //console.log(parsed.props.children.props.children)
        return (
          <div
            style={{
              position: "relative",
              paddingBottom: "56%",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src={parsed.props.children.props.children}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
        )
      }
      break
    case "youtube":
      parsed = parse(source)
      if (
        parsed?.props?.children &&
        parsed.props.children?.props?.className &&
        parsed.props.children.props.className === "wp-block-embed__wrapper"
      ) {
        //console.log("match")
        //console.log(parsed.props.children.props.children)
        return (
          <div
            style={{
              position: "relative",
              paddingBottom: "56%",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src={parsed.props.children.props.children}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
        )
      }
    case "instagram":
      //console.log(source)
      parsed = parse(source)
      //console.log(parsed)
      //console.log(parsed.props)
      if (
        parsed?.props?.children &&
        parsed.props.children?.props?.className &&
        parsed.props.children.props.className === "wp-block-embed__wrapper"
      ) {
        //console.log("match")
        //console.log(parsed.props.children.props.children)
        return (
            <div
              style={{
                position: "relative",
                paddingBottom: "150%",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
              }}
              className="instagram-embed"
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src={`${parsed.props.children.props.children}embed`}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </div>
          )
      }
      
    case "flickr":
      const FlickrData = parse(source.data)
      const FlickrUrlData = FlickrData.props.children.props.children
      const FlickrUrl = Array.isArray(FlickrUrlData)
        ? FlickrUrlData[0]
        : FlickrUrlData
      //console.log(FlickrUrl)
      return (
        <div
          style={{
            position: "relative",
            paddingBottom: "56%",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src={`https://flickrembed.com/cms_embed.php?source=flickr&layout=responsive&input=www.flickr.com/photos/bucky-badger/albums/${FlickrUrl}&sort=2&by=album&theme=default&scale=fill&skin=default&id=588237896e27d`}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>
      )
    case "base":
      parsed = parse(source)

      return (
        parsed?.props?.children &&
        parsed.props.children?.props?.className &&
        parsed.props.children.props.className === "wp-block-embed__wrapper"
      ) ? (
          <div
            style={{
              position: "relative",
              paddingBottom: "56%",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
            }}
            className={interactQuizClass}
          >
            
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src={parsed.props.children.props.children}
              scrolling="yes"
              frameBorder="0"
              allowFullScreen={true}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
        )
      : null
    default:
      return null
  }

}


export default EmbedBlock

