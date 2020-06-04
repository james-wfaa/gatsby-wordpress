import React from 'react'
import styled from 'styled-components'  

import IntroRedPageSection from './IntroRedPageSection'
const HeroIntroSection = ({className, heroImage, heroHeading, redHeading, excerpt}) => {


    return (
        <div className={className}>
            <div className={`${className}__hero`}>
                <div className={`${className}__heading`}>{heroHeading}</div>
            </div>
            <IntroRedPageSection excerpt={excerpt} heading={redHeading} />
        </div>
    )
}

const StyledHeroIntroSection = styled(HeroIntroSection)`

`

export default StyledHeroIntroSection