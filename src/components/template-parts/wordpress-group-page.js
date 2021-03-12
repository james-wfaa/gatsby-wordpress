import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import GridCardD from "../content-modules/GridCardD"
import CardHandler from "../content-modules/CardHandler"
import SponsorHandler from "../content-modules/SponsorHandler"
import RecentPosts from "../page-sections/RecentPosts"
import Sponsor from "../content-blocks/Sponsor"
import PromoCardD from "../content-blocks/PromoCardD"
import HeroIntroSection from "../page-sections/HeroIntroSection"
import AllChaptersData from "../page-sections/AllChapters"

function WordPressGroupPage({  page, options }) {
  const { chapters: chaptersText, varsityChapterText, recognizedChapterText, bascomChapterText } = options
  const { chapterLevel, chapterSponsors } = page
  const { chapterLevel: level } = chapterLevel
  const { sponsors } = chapterSponsors

  const chapterData = AllChaptersData()
  const thisChapterArr = chapterData.nodes.filter(function (e) {
    return e.chapterDetails.csUrl === page.slug
})
const thisChapter = thisChapterArr[0] ? thisChapterArr[0] : null
  
const RenderedSponsors = (sponsors) ? sponsors.map((sponsor) => {
  return (<Sponsor {...sponsor} />)
}) : null

const eventbutton = [
  {
    link: "/events",
    text: "All Events",
  },
]
const featuredbutton = [
  {
    link: "#",
    text: "See all news and stories",
  },
]
const { title,  excerpt, wpChildren, featuredImage, groups } = page

const imageWidth = featuredImage.node.mediaDetails.width

  if (wpChildren?.nodes) {
    wpChildren.nodes.sort((a,  b) => {
      
      if ( a.menuOrder < b.menuOrder && (a.menuOrder)) {
        return -1
      }
      if (a.menuOrder > b.menuOrder || (!a.menuOrder)) {
        return 1
      }
      return 0
    })
  }
  

  const RenderedMenu = (wpChildren?.nodes) 
      ? wpChildren.nodes.map(item => {
        return (
            <PromoCardD key={item.id} title={item.title} url={item.uri} isNav />
        )
      })
      : null

  const chapterTypeText = (level === 'Varsity')
      ? varsityChapterText
      : (level === 'Bascom' ) 
        ? bascomChapterText
        : recognizedChapterText


  const eventsToShow = (groups?.nodes && groups?.nodes[0]?.events.nodes) ? groups?.nodes[0]?.events.nodes : null
  const social = thisChapter?.chapterDetails ? thisChapter : null
  return (
    <Layout title={title}>
      <PageSection
        heading={title}
        excerpt={chapterTypeText}
        withSocial={social}
        plainText
        pageTitle
        groupPage
      > 
       <div className="groupPage" dangerouslySetInnerHTML={{__html: chaptersText}} />
       
      </PageSection>
      <div style={{maxWidth: `1080px`, margin: `auto`, paddingBottom: `58px`}}>

        { featuredImage?.node && (
        <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroSize="slim"
          variant="white"
          excerpt={excerpt}
          imageWidth={imageWidth}
        />
      )}
      { !featuredImage && (
        <PageSection
          excerpt={excerpt}
        />
      )}
      </div>
      { RenderedMenu && (
        <PageSection popOut>
        <GridCardD>
         {RenderedMenu}
        </GridCardD>
      </PageSection>
      )}
      
      { eventsToShow && (
        <PageSection heading="Upcoming Events" topBorder buttons={eventbutton}><CardHandler items={eventsToShow} size="M" type="event"/></PageSection>
      )}


      { RenderedSponsors && (
         <PageSection heading="Our Chapter Sponsors" topBorder>
          <SponsorHandler>{RenderedSponsors}</SponsorHandler>
         </PageSection>

      )}
      
     
      <PageSection heading="WAA Stories" buttons={featuredbutton} topBorder>
        <RecentPosts />
      </PageSection>
    </Layout>
  )
}



export default WordPressGroupPage
