import React from 'react'
import striptags from 'striptags'
import { Helmet } from 'react-helmet'
import DefaultImg from "../../static/open_graph_illus_1200x630.png"


function FilledHelmet({title, plaintitle, img, desc, url}) {
  let fullhostname = 'https://www.uwalumni.com'
  const imgpath = ( img?.localFile?.childImageSharp?.fluid?.src)
  ?   `${fullhostname}${img.localFile.childImageSharp.fluid.src}`
  : fullhostname + DefaultImg
  const cleanDesc = ( desc ) ? striptags(desc) : null
  const resolvedTitle = plaintitle
    ? "%s"
    : "%s | Wisconsin Alumni Association"
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

      {imgpath &&
        <meta property="og:image" content={imgpath} />
      }
      {imgpath &&
        <meta name="twitter:card" content="summary_large_image" />
      }

    </Helmet>
  )
}

export default FilledHelmet