import React from 'react'
import parse from 'html-react-parser';

const AdvocacyEmbed = ({ block }) => {
  const parsed = (block?.dynamicContent) ? parse(block.dynamicContent) : null
  const advocacyId = (parsed?.props?.id) ? (parsed.props.id) : null

  const addScript = url => {
    if (document.getElementById('advocacy-actionwidget-code')) {
      return
    }
    const script = document.createElement("script")
    script.id = 'advocacy-actionwidget-code'
    script.src = '//p2a.co/js/embed/widget/advocacywidget.min.js'
    script.async = true
    const fjs = document.getElementsByTagName(script)[0]
    script.src = '//p2a.co/js/embed/widget/advocacywidget.min.js'
    document.body.appendChild(script)
    //fjs.parentNode.insertBefore(script, fjs)
  }

  return (
  <div className="advocacy-embed">
    <div className="advocacy-actionwidget" data-domain="p2a.co" data-shorturl={advocacyId}></div>
    {addScript()}
  </div>)
}


export default AdvocacyEmbed

