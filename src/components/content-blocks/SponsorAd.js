import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SponsorAdStyled from "./SponsorAdStyled"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

  const SponsorAd = () => {
    const data = useStaticQuery(graphql`
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
                        childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, width: 210)
                        }
                      }
                    }
                    logoImage2 {
                        localFile {
                          childImageSharp {
                          gatsbyImageData(layout: CONSTRAINED, width: 210)
                          }
                        }
                      }
                    logoImage3 {
                        localFile {
                          childImageSharp {
                          gatsbyImageData(layout: CONSTRAINED, width: 210)
                          }
                        }
                    }
                    logoImage4 {
                        localFile {
                          childImageSharp {
                          gatsbyImageData(layout: CONSTRAINED, width: 210)
                          }
                        }
                    }
                }
              }
            }
          }
      }
    `);
  
    const { allWp } = data
    const { siteOptions } = allWp.nodes[0]
    const { SponsorAd } = siteOptions
    const { adHeading, adCopy, adLink, logoImage1, logoImage2, logoImage3, logoImage4} = SponsorAd
    const logo1 = getImage(logoImage1.localFile)
    const logo2 = getImage(logoImage2.localFile)
    const logo3 = getImage(logoImage3.localFile)
    const logo4 = getImage(logoImage4.localFile)
  
    return (
        <SponsorAdStyled>
            {siteOptions && 
            logo1 && 
            logo2 && 
            logo3 && 
            logo4 &&
            (
                <a className="SponsorAd_Link" href={adLink?.uri ? adLink.uri : null}>
                    <div className="contentWrap">
                        <div className="AdTitle" dangerouslySetInnerHTML={{ __html: adHeading }}/>
                        <div className="AdContent" dangerouslySetInnerHTML={{ __html: adCopy }}/>
                    </div>
                    <div className="LogoList">
                      <div className="LogoLeft LogoColumn" >
                          <div className="LogoWrap">
                            <GatsbyImage className="LogoIcon" image={logo1} />
                          </div>
                          <div className="LogoWrap">
                            <GatsbyImage className="LogoIcon" image={logo3} />
                          </div>
                      </div>
                      <div className="LogoRight LogoColumn">
                          <div className="LogoWrap">
                          <GatsbyImage className="LogoIcon" image={logo4} />
                          </div>
                          <div className="LogoWrap">
                          <GatsbyImage className="LogoIcon" image={logo2} />
                          </div>
                      </div>
                    </div>
                </a>
            )}
        </SponsorAdStyled>
    )
  };
  
  export default SponsorAd;
