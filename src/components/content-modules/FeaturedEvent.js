import React from 'react'
import parse from 'html-react-parser';
import AllEvents from '../collections/AllEvents'
import EventContentCard from '../content-blocks/EventContentCard'
import PageSection from '../page-sections/PageSection'

const FeaturedEvent = ({ block }) => {

    const parsedBlock = (block?.dynamicContent) ? parse(block.dynamicContent) : null
    const eventId = (parsedBlock?.props?.id) ? Number(parsedBlock.props.id) : null

    const allEvents = AllEvents()

    let theEvent = null
    if (allEvents?.nodes) {
        allEvents.nodes.forEach((event) => {
            if (event.databaseId === eventId) {
                theEvent = event
            }
        }) 
    }
    console.log(theEvent)
    const eventImg = (theEvent?.featuredImage?.node?.localFile) ? theEvent.featuredImage.node.localFile : null
    return (
        <PageSection centered feature>
            <EventContentCard size="XXL" {...theEvent} url={theEvent.link} img={eventImg} featureImg={eventImg}/>
        </PageSection>
       
    )
}
export default FeaturedEvent