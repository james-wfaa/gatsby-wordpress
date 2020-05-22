import React from 'react'

import styled from 'styled-components'  

const HeroIntroSection = ({className, heroImage, heroHeading}) => {


    return (
        <div className={className}>
            <div className={`${className}__hero`}>
                <div className={`${className}__heading`}>{heroHeading}</div>
            </div>
            <div className={`${className}__excerpt`}>
                {excerpt}
            </div>
        </div>
    )
}

const StyledHeroIntroSection = styled(HeroIntroSection)`

`

export default StyledHeroIntroSection