import React from 'react'
import parse from 'html-react-parser';

const EmbedBlock = ({source, type}) => {


  //console.log(type)
  //console.log(source)
  let parsed
  //console.log(source.children)
  //console.log(parse(data.data))
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
              webkitOverflowScrolling: "touch",
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
              frameborder="0"
              allowFullScreen="true"
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
              webkitOverflowScrolling: "touch",
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
              frameborder="0"
              allowFullScreen="true"
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
              paddingBottom: "56%",
              overflow: "auto",
              webkitOverflowScrolling: "touch",
            }}
          >
            <img
              src="https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/138756864_237508114436033_2180741691868094000_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=105&_nc_ohc=CdZWeVz6414AX-SGKzU&tp=1&oh=2d676484822f8c9a29be55c9f2169623&oe=605A53BE"
            />
            {/* <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src={parsed.props.children.props.children}
              scrolling="no"
              frameborder="0"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe> */}
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
            webkitOverflowScrolling: "touch",
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
            frameborder="0"
            allowFullScreen="true"
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
              webkitOverflowScrolling: "touch",
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
              frameborder="0"
              allowFullScreen="true"
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

