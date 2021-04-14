import React from 'react'
import parse from 'html-react-parser';


const Shortcode = ({block}) => {
    //console.log(block)

    const shortcodeName = block.originalContent.substring(block.originalContent.indexOf('[')+1, block.originalContent.indexOf(' '))
   //console.log(shortcodeName)
    // get shortcode name

    switch (shortcodeName) {
        case 'shareprints':
            return (<div className="core-shortcode shareprints">[This photo gallery is temporarily unavailable]</div>)
        default: 
            return null

    }
}

export default Shortcode