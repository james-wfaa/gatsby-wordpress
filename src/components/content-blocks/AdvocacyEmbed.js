import React, { useEffect } from 'react'
import parse from 'html-react-parser';



const AdvocacyEmbed = ({ block }) => {
  const parsed = (block?.dynamicContent) ? parse(block.dynamicContent) : null
  const advocacyId = (parsed?.props?.id) ? (parsed.props.id) : null

  const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }

  useEffect(() => {
    if (!document.getElementById('advocacy-actionwidget-code')) {
      addScript("https://p2a.co/js/embed/widget/advocacywidget.min.js")
    }
  }, [])

  return (
    <div>
      <div className="embed-block advocacy-embed">
        <div className="advocacy-actionwidget" data-domain="p2a.co" data-shorturl={advocacyId}></div>
      </div>
    </div>
  )
}


export default AdvocacyEmbed

