import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import SponsorAdStyled from "./SponsorAdStyled"

  const SponsorAd = ({className}) => {
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
    `);
  
    const { allWp } = data
    const { siteOptions } = allWp.nodes[0]
    const { SponsorAd } = siteOptions
    const { adHeading, adCopy, adLink, logoImage1, logoImage2, logoImage3, logoImage4} = SponsorAd

  
    return (
        <SponsorAdStyled>
            {siteOptions && 
            logoImage1?.localFile?.childImageSharp && 
            logoImage3?.localFile?.childImageSharp && 
            logoImage4?.localFile?.childImageSharp && 
            logoImage2?.localFile?.childImageSharp &&
            (
                <a className="SponsorAd_Link" href={adLink?.uri ? adLink.uri : null}>
                    <div className="contentWrap">
                        <div className="AdTitle" dangerouslySetInnerHTML={{ __html: adHeading }}/>
                        <div className="AdContent" dangerouslySetInnerHTML={{ __html: adCopy }}/>
                    </div>
                    <div className="LogoList">
                        <div className="LogoLeft LogoColumn" >
                            <div className="LogoWrap">
                                <Img
                                    className="Logo_AmFam LogoIcon"
                                    fluid={logoImage1.localFile.childImageSharp.fluid}
                                />
                            </div>
                            <div className="LogoWrap">
                                <Img
                                    className="Logo_UWCU LogoIcon"
                                    fluid={logoImage3.localFile.childImageSharp.fluid}
                                />
                            </div>
                        </div>
                        <div className="LogoRight LogoColumn">
                            <div className="LogoWrap">
                                <Img
                                    className="Logo_WPS LogoIcon"
                                    fluid={logoImage4.localFile.childImageSharp.fluid}
                                />
                            </div>
                            <div className="LogoWrap">
                                <Img
                                    className="Logo_CapLake LogoIcon"
                                    fluid={logoImage2.localFile.childImageSharp.fluid}
                                />
                            </div>
                        </div>
                    </div>
                </a>
            )}
        </SponsorAdStyled>
    )
  };
  
  export default SponsorAd;
