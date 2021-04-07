import React from 'react'
import striptags from 'striptags'
import { Helmet } from 'react-helmet'

function FilledHelmet({title, img, desc, url}) {
  let fullhostname = 'https://gatsby.uwalumni.com'
  const imgpath = ( img && typeof img !== 'undefined' && img.localFile )
  ?   `${fullhostname}${img.localFile.childImageSharp.fluid.src}`
  : null
  const cleanDesc = ( desc ) ? striptags(desc) : null

  return (
    <Helmet titleTemplate="%s | Wisconsin Alumni Association" htmlAttributes={{
      lang: 'en',
    }}>
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
      <meta property="og:title" content={`${title} | Wisconsin Foundation & Alumni Association`} />
      {url &&
      <meta property="og:url" content={url} />
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