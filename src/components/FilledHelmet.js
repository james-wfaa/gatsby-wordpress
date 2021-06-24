import React from 'react'
import striptags from 'striptags'
import { Helmet } from 'react-helmet'
import DefaultImg from "../../static/open_graph_illus_1200x630.png"
import { getSrc } from "gatsby-plugin-image"


function FilledHelmet({title, plaintitle, img, desc, url}) {
  let fullhostname = 'https://www.uwalumni.com'
  const imgpath = getSrc(img)
  const fullimgpath = ( imgpath )
  ?   `${fullhostname}${imgpath}`
  : fullhostname + DefaultImg
  const cleanDesc = ( desc ) ? striptags(desc) : null
  const resolvedTitle = plaintitle
    ? "%s"
    : "%s | Wisconsin Alumni Association"
  const isHomecomingPage = url?.includes('homecoming') ? true : false
  return (
    <Helmet titleTemplate={resolvedTitle} htmlAttributes={{
      lang: 'en',
    }}>
      {url &&
        <link rel="canonical" href={`${fullhostname}${url}`} />
      }
      
      <title>{title}</title>
      {cleanDesc &&
        <meta name="description" content={cleanDesc} />
      }
      {cleanDesc &&
        <meta property="og:description" content={cleanDesc} />
      }
      {cleanDesc &&
        <meta name="twitter:description" content={cleanDesc} />
      }
      <meta property="og:title" content={`${title} | Wisconsin Alumni Association`} />
      {url &&
      <meta property="og:url" content={`${fullhostname}${url}`} />
      }

      {fullimgpath &&
        <meta property="og:image" content={fullimgpath} />
      }
      {fullimgpath &&
        <meta name="twitter:card" content="summary_large_image" />
      }
      {isHomecomingPage && <script src="https://static.tagboard.com/embed/assets/js/embed.js"></script>}
    </Helmet>
  )
}

export default FilledHelmet