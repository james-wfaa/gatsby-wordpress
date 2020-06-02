import React from 'react'
import styled from 'styled-components'

const GenericPageSection = ({className, pad, children}) => {
    const classes = pad ? `${className} ${className}--pad` : className
    return (
        <div className={classes}>
            {children}
        </div>
    )

}

const StyledGenericPageSection = styled(GenericPageSection)`
&--pad {
    padding: 30px;
}

`

export default StyledGenericPageSection