import React from "react"
import styled from 'styled-components'
import { sizes } from '../css-variables'
import Img from 'gatsby-image'

const Sponsor = ({ className, sponsorName, sponsorText, sponsorLogo }) => {

    const SponsorHeading = styled.div`
        font-size: ${sizes.s32};
        font-weight: bold;
        display: block;
        margin: 100px auto;
    `

    const alt = sponsorLogo?.altText ? sponsorLogo.altText : ''
    const isGif = (! sponsorLogo?.localFile?.childImageSharp)
    if (!isGif) { console.log(sponsorLogo.localFile.childImageSharp.fluid)}

    return (
        <div className={className}>
            <figure >
                
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
                {!sponsorLogo && sponsorName && (
                    <SponsorHeading>{sponsorName}</SponsorHeading>
                )}
                {sponsorText && (
                    <figcaption dangerouslySetInnerHTML={{__html: sponsorText}} />
                )}
            </figure>
        </div>
        
    )
}

const StyledSponsor = styled(Sponsor)`
    min-width: 200px;
    max-width: 312px;
    margin: 0 ${sizes.s32};
    figcaption {
        margin-top: ${sizes.s32};
    }
`

export default StyledSponsor