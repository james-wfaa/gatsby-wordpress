import React from 'react'
import { sizes, breakpoints } from '../css-variables'

import styled from 'styled-components'

const SponsorSet = ({className, children }) => {
    
    return (
        <div className={className} sponsorSet={true}>{children}
        </div>
    )
}

const StyledSponsorSet = styled(SponsorSet)`
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
> * {
    margin: 0 auto ${sizes.s24};
    &:last-child {
        margin-bottom: 0;
    }

}
@media screen and ${breakpoints.tabletL} {
    flex-direction: row;
    > * {
        margin: 0 ${sizes.s24} 0 0;
        &:last-child {
            margin-right: 0;
        }
    }
}


`

export default StyledSponsorSet
