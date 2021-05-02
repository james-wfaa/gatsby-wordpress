import React from "react"
import styled from 'styled-components'
import { sizes, colors, breakpoints } from '../css-variables'
import Img from 'gatsby-image'

const Sponsor = ({ className, sponsorName, sponsorText, sponsorLogo }) => {

    const SponsorHeading = styled.div`
        font-size: ${sizes.s20};
        font-weight: bold;
        display: block;
        margin: 0 auto ${sizes.s32} auto;
    `

    const alt = sponsorLogo?.altText ? sponsorLogo.altText : ''
    const isGif = (! sponsorLogo?.localFile?.childImageSharp)

    return (
        <div className={className}>
            <figure >
                {sponsorName && (
                        <SponsorHeading>{sponsorName}</SponsorHeading>
                    )}
                {!isGif && (
                    <Img 
                        className={`${className}__img`}
                        fluid={sponsorLogo.localFile.childImageSharp.fluid}
                        alt={alt}
                    />
                )}
                {isGif && sponsorLogo?.localFile && (
                    <img src={sponsorLogo.localFile.publicURL} alt={alt} />
                )}
                
                {sponsorText && (
                    <figcaption dangerouslySetInnerHTML={{__html: sponsorText}} />
                )}
            </figure>
        </div>
        
    )
}

const StyledSponsor = styled(Sponsor)`
    width: 255px;
    min-height: 353px;
    height:353px !important;
    margin: 0;
    padding: ${sizes.s16};
    border: 1px solid black;
    position: relative;
    figcaption {
        a{
            color: ${colors.linkText};
            :hover{
                color: ${colors.linkTextHover};
            }
        }
        p{
            margin-bottom: ${sizes.s32};
        }
        p:last-of-type{
            position: absolute;
            bottom: 0;
            left:calc(50% - 46px);
        }
    }
    .gatsby-image-wrapper{
        max-width: 180px;
        max-height: 120px;
        margin: 0 auto ${sizes.s32} auto;
        img{
            object-fit: contain !important;
            margin-bottom: 0;
        }
    }
    @media screen and ${breakpoints.tabletL} {
        width: 345px;
        min-height: 445px;
        height:445px !important;
        padding: ${sizes.s32};
        .gatsby-image-wrapper{
            max-width: 240px;
            max-height: 160px;
        }
    }
`

export default StyledSponsor