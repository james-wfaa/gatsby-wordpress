import React from "react"

import { Link } from "gatsby"
import styled from 'styled-components'
import { mixins } from '../css-variables'

const Button = ({ className, link, text, bgimage, alt, fullwidth, disabled = false, external = false }) => {
    let classesList = className
    if (bgimage) { 
        classesList += ` ${className}--bgimage`
    }
    if (alt) {
        classesList += ` ${className}--alt`
    }
    if (disabled) {
        classesList += ` ${className}--disabled`
    }
    if (fullwidth) {
        classesList += ` ${className}--fullwidth`
    }
    

 return  (
        <div>
            { (!external && !disabled) && (
                <Link className={classesList} to={link}>{text} </Link>
            )}
            { (external && !disabled) && (
                <a className={classesList} href={link}>{text} </a>
            )}
            { disabled && (
                <div className={classesList}>{text} </div>
            )}
        </div>
    )
}
const StyledButton = styled(Button)`
${mixins.buttons};


`

export default StyledButton