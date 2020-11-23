import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import { sizes, breakpoints } from '../css-variables'
import Img from 'gatsby-image'

const SponsorAd = ({className}) => {
  
    return (
        <StaticQuery
        query={graphql`
          query HeadingQuery {
            allWp {
                nodes {
                  siteOptions {
                    SponsorAd {
                        adCopy
                        adHeading
                        adLink {
                          ... on WpPage {
                            id
                            uri
                          }
                        }
                        fieldGroupName
                        logoImage1 {
                          localFile {
                            ...HeroImage
                          }
                        }
                        logoImage2 {
                            localFile {
                              ...HeroImage
                            }
                          }
                        logoImage3 {
                            localFile {
                                ...HeroImage
                            }
                        }
                        logoImage4 {
                            localFile {
                              ...HeroImage
                            }
                        }
                    }
                  }
                }
              }
          }
        `}
        render={data => (
            <div className={className}>
                {data.allWp.nodes && data.allWP.nodes[0].siteOptions.SponsorAd &&(
                    <a className="SponsorAd_Link" href={data.allWP.nodes[0].siteOptions.SponsorAd.adLink.uri}>
                        <div className="AdTitle" dangerouslySetInnerHTML={{ __html: data.allWP.nodes[0].siteOptions.SponsorAd.adHeading }}/>
                        <div className="AdContent" dangerouslySetInnerHTML={{ __html: data.allWP.nodes[0].siteOptions.SponsorAd.adCopy }}/>
                    </a>
                )}
            </div>
        )}
      />
    )
  }

const StyledSponsorAd = styled(SponsorAd)`
figure {
    max-width: 302px;
    margin: 0 auto;

    @media screen and ${breakpoints.mobileL} {
        max-width: 1080px;
    }

    Img {
        width: 100%;
    }
    a {
        .imgSmall{
            @media screen and ${breakpoints.mobileL} {
                display: none;
            }    
        }
        .imgLarge{
            display: none;
    
            @media screen and ${breakpoints.mobileL} {
                display: block;
            }    
        }
    
    }
}

`
export default StyledSponsorAd
