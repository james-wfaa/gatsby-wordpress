import React from 'react'
import SponsorSet from './SponsorSet'
import SimpleSliderSponsors from './SimpleSliderSponsors'

const SponsorHandler = ({ children }) => {

    if (children?.length && children.length > 0) {
        switch(children.length) {
            case 1:
            case 2:
                return (<SponsorSet>{children}</SponsorSet>)
            default:
                return (<SimpleSliderSponsors items={children}/>)
        }
    } else {
        return (<div>No children found</div>)
    }
}

export default SponsorHandler
