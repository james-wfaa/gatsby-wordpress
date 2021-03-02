import React from 'react'
import LibraryResourceForm from './LibraryResourceForm'
import MembershipForm from './MembershipForm'
import parse from 'html-react-parser';


const SpecialBlock = ({block}) => {
    const parsed = parse(block.dynamicContent)
    let target = null
    if (Array.isArray(parsed)) {
        target = parsed.map( element => {
            if (element?.props?.id) {
                console.log(element.props.id)
                switch(element.props.id) {
                    case 'library-lock-resources':
                        return (<LibraryResourceForm />)
                    case 'membership-join':
                        return (<MembershipForm />)
                    default:
                        return (<>bad block</>)
                        break
                }
            }
        })
    }
    return target
}

export default SpecialBlock