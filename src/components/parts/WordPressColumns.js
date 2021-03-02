import React from "react"
import styled from 'styled-components'
import { breakpoints } from '../css-variables'
import Block from '../content-blocks/WordPressBlock'


const WordPressColumns = ({ block, className }) => {

    const Columns = (block && block.innerBlocks) ? block.innerBlocks : null
    const RenderedBlocks = (Columns) ? Columns.map((column) => {
        if(column.originalContent){
            return (<Block className={column.name.replace('/', '-')} block={column} />)
        }
        
    }
    ) : null
      
    return (
        <div className={className}>
            { RenderedBlocks && (
                <div className={block.name.replace('/', '-')}>{RenderedBlocks}</div>
            )}
        </div>
    )
}

const StyledWordPressColumns = styled(WordPressColumns)`

.core-columns{
    
    @media screen and ${breakpoints.tabletS} {
        display: flex;
        flex: 1 1 auto;
        flex-shrink: 1;

        .core-column{
            margin-right: 12px;
            margin-left: 12px;
        }
        .core-column:first-child{
            margin-left: 0px;
        }
        .core-column:last-child{
            margin-right: 0px;
        }

    }
    @media screen and ${breakpoints.laptopS} {
        max-width: 712px;
    }
    .core-column{
        min-width: 50px;
    }
}

`

export default StyledWordPressColumns