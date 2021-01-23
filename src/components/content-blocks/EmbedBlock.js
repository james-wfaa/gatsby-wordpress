import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const EmbedBlock = (data) => {
  let string = "<figure class='wp-block-embed-flickr wp-block-embed is-type-rich is-provider-flickr'><div class='wp-block-embed__wrapper'>↵https://www.flickr.com/photos/bucky-badger/albums/72157709965518786↵</div></figure>"
  return (
    <div>
      { ReactHtmlParser(string) }
      {/* { ReactHtmlParser(data) } */}
    </div>
  )
}

export default EmbedBlock

