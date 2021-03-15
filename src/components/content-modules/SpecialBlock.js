import React from 'react'
import LibraryResourceForm from './LibraryResourceForm'
import MembershipForm from './MembershipForm'
import SponsorAd from "../content-blocks/SponsorAd"
import ChapterSearch from "../parts/ChapterSearch/ChapterSearch"

import parse from 'html-react-parser';


const SpecialBlock = ({block}) => {
    const parsed = parse(block.dynamicContent)
    let target = null
    if (Array.isArray(parsed)) {
        target = parsed.map( element => {
            if (element?.props?.id) {
                //console.log(element.props.id)
                switch(element.props.id) {
                    case 'library-lock-resources':
                        return (<LibraryResourceForm />)
                    case 'membership-join':
                        return (<MembershipForm />)
                    case 'chpater-search':
                        return (<ChapterSearch />)
                    case 'sponsors':
                        return (<SponsorAd />)
                    default:
                        return (<>unknown block</>)
                }
            }
        })
    }
    return target
}

export default SpecialBlock