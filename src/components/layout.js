import React, {useState, useRef, useEffect, useLayoutEffect} from "react"
import PropTypes from "prop-types"

import FilledHelmet from './FilledHelmet'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"

import { useWindowSize } from "./hooks"

import "./layout.css"
import styled from 'styled-components'
import { fonts, sizes, breakpoints } from '../components/css-variables'

const Layout = ({ children, img, url, excerpt, noborder, title }) => {
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
    //update height after things are loaded or if window width changes
    useEffect(() => {
        const height = document.getElementById('alert').clientHeight
        setalertHeight(height)
        
    }, [firstUpdate.current, width]);
  
  return (
    <>
    <FilledHelmet
      title={title}
      img={img}
      url={url}
      desc={excerpt}
      />
      <Header noborder={noborder} />
      <div style={{marginTop: alertHeight + 'px'}}>
        <main>{children}</main>
        <Footer />
      </div>
      {alertText ? <StyledAlert id="alert" dangerouslySetInnerHTML={{__html: alertText}} /> : marketingInterruptorText ? <StyledMarketingInterruptor id="alert" dangerouslySetInnerHTML={{__html: marketingInterruptorText}} /> : null}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const StyledAlert = styled.div`
  width: 100%;
  background-color: #FFE691;
  padding: ${sizes.s24};
  position:absolute;
  top: 86px;
  a{
    color: #C5050C;
  }
  p{
    margin: 0;
    font-size: ${sizes.s18};
    line-height: ${sizes.s26};
  }
  @media screen and ${breakpoints.tabletS} {
    top: 118px;
    p{
      font-size: ${sizes.s26};
      line-height: ${sizes.s36};
    }
  }
`
const StyledMarketingInterruptor = styled.div`
  width: 100%;
  padding: ${sizes.s32};
  position:absolute;
  top: 86px;
  h1,h2,h3,h4,h5,h6{
    margin: 0 0 24px 0;
    padding:0;
    color:#C5050C;
    font-size: ${sizes.s24};
    line-height: ${sizes.s30};
    font-family: ${fonts.eaves};
    font-style: italic;
    font-weight: 900;
  }
  background-color: #F3F3F3;
  p{
    margin: 0;
    font-size: ${sizes.s18};
    line-height: ${sizes.s26};
    color: #3C3C3C;
  }
  a{
    color:#C5050C;
  }
  @media screen and ${breakpoints.tabletS} {
    top: 118px;
    h1,h2,h3,h4,h5,h6{
      font-size: ${sizes.s36};
      line-height: ${sizes.s42};
    }
    p{
      margin: 0;
      font-size: ${sizes.s26};
      line-height: ${sizes.s36};
      color: #3C3C3C;
    }
  }
`