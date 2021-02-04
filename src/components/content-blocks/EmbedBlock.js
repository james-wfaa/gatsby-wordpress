import React from 'react'
import parse from 'html-react-parser';
import Embed from 'react-embed';

const EmbedBlock = (data) => {

//console.log(data.data)
//console.log(parse(data.data))

const FlickrData = parse(data.data)
const FlickrUrlData = FlickrData.props.children.props.children
const FlickrUrl = (Array.isArray(FlickrUrlData)) ? FlickrUrlData[0] : FlickrUrlData
console.log(FlickrUrl)
  return (
      <div style={{position: 'relative', paddingBottom: '56%', overflow: 'auto', webkitOverflowScrolling: 'touch'}}>
        <iframe 
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
          src={`https://flickrembed.com/cms_embed.php?source=flickr&layout=responsive&input=www.flickr.com/photos/bucky-badger/albums/${FlickrUrl}&sort=2&by=album&theme=default&scale=fill&skin=default&id=588237896e27d`}
          scrolling='no' frameborder='0' allowFullScreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>
      </div>
  )
}

export default EmbedBlock

