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

    return (
        <div className={className}>
            <figure >
                {sponsorLogo && (
                    <Img 
                        className={`${className}__img`}
                        fixed={sponsorLogo.localFile.childImageSharp.fixed}
                    />
                )}
                {!sponsorLogo && sponsorName && (
                    <SponsorHeading>{sponsorName}</SponsorHeading>
                )}
                <figcaption dangerouslySetInnerHTML={{__html: sponsorText}} />
            </figure>
        </div>
        
    )
}

const StyledSponsor = styled(Sponsor)`
    max-width: 312px;
    margin: 0 ${sizes.s32};
    figcaption {
        margin-top: ${sizes.s32};
    }
`

export default StyledSponsor