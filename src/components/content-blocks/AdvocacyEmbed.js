import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import Helmet from 'react-helmet'

const AdvocacyEmbed = ({ block }) => {
  const parsed = (block?.dynamicContent) ? parse(block.dynamicContent) : null
  const advocacyId = (parsed?.props?.id) ? (parsed.props.id) : null

  // useEffect(() => {
  //     const loaded = document.getElementById("p2a-campaign-container");
  //     console.log(loaded)
  //     if (!loaded) {
  //       const script = document.createElement("script");
  //       script.id = 'advocacy-actionwidget-code';
  //       script.src = '//p2a.co/js/embed/widget/advocacywidget.min.js';
  //       script.async = false;
  //       document.body.appendChild(script);
  //     }
  // }, [])

  return (
  <div className="advocacy-embed">
    <Helmet>
      <script src="https:////p2a.co/js/embed/widget/advocacywidget.min.js"></script>
    </Helmet>
    <div className="advocacy-actionwidget" data-domain="p2a.co" data-shorturl={advocacyId}></div>
  </div>)
}


export default AdvocacyEmbed

