import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const EmbedBlock = (data) => {

  return (
    <div>
      { ReactHtmlParser(data.data) }
    </div>
  )
}

export default EmbedBlock

