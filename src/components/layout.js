import React, {useState, useRef, useEffect, useLayoutEffect} from "react"
import PropTypes from "prop-types"

import FilledHelmet from './FilledHelmet'
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./Footer"
import Alert from "./content-blocks/Alert"
import { useWindowSize } from "./hooks"

import "./layout.css"

const Layout = ({ children, img, url, excerpt, noborder, title, plaintitle }) => {
  const data = useStaticQuery(graphql`
    query alertQuery {
      allWp {
        edges {
          node {
            siteOptions {
              alert {
                alertText
                fieldGroupName
              }
              marketing_interruptor {
                fieldGroupName
                marketingInterruptorText
              }
            }
          }
        }
      }
      }
    `);
  
    const { allWp } = data
    const { siteOptions } = allWp.edges[0].node
    const { alert, marketing_interruptor } = siteOptions
    const { alertText} = alert
    const { marketingInterruptorText} = marketing_interruptor

    const [alertHeight, setalertHeight] = useState(0);
    const { width } = useWindowSize()

    //check if things are loaded, component did mount
    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
        }
    });
    //update height after things are loaded or if window width changes or when modal is closed
    useEffect(() => {
      if(alertText || marketingInterruptorText){
        updateHeight()
      }
    }, [firstUpdate.current, width]);

    const updateHeight = () =>{
      let height =  document.getElementById('alert') ? document.getElementById('alert').clientHeight : 0
      setalertHeight(height)
    }
  
  return (
    <>
    <FilledHelmet
      title={title}
      plaintitle={plaintitle}
      img={img}
      url={url}
      desc={excerpt}
      />
      <Header noborder={noborder} />
      <div style={{marginTop: alertHeight + 'px'}}>
        <main>{children}</main>
        <Footer />
      </div>
      {alertText || marketingInterruptorText ? <Alert alertText={alertText} marketingInterruptorText={marketingInterruptorText} updateHeight={setalertHeight}/> : null}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout