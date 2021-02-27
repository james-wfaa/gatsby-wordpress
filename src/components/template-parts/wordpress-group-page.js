import React from "react"
import styled from 'styled-components'

import { colors, sizes } from "../css-variables"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import GridCardD from "../content-modules/GridCardD"
import CardHandler from "../content-modules/CardHandler"
import RecentPosts from "../page-sections/RecentPosts"

import CardE from "../content-blocks/CardE"
import PromoCardD from "../content-blocks/PromoCardD"
import HeroIntroSection from "../page-sections/HeroIntroSection"
import SimpleSlider from "../content-modules/SimpleSlider"
import AllChaptersData from "../page-sections/AllChapters"
import FbIcon from '../../svg/fb_icon_gray.svg'
import IgIcon from '../../svg/instagram_icon_gray.svg'
import LiIcon from '../../svg/linkedin_icon_gray.svg'
import TwIcon from '../../svg/twitter_icon_gray.svg'
import WcIcon from '../../svg/wechat_icon_gray.svg'

function WordPressGroupPage({ className, page, options }) {
  const { chapters: chaptersText, varsityChapterText, recognizedChapterText, bascomChapterText } = options
  const { chapterLevel } = page
  const { chapterLevel: level } = chapterLevel

  const chapterData = AllChaptersData()
  console.log(chapterData)
  console.log(page)

  const thisChapterArr = chapterData.nodes.filter(function (e) {
    return e.chapterDetails.csUrl === page.slug
})
const thisChapter = thisChapterArr[0] ? thisChapterArr[0] : null


 

  
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
  
  if (wpChildren?.nodes) {
    wpChildren.nodes.sort((a,  b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
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

  return (
    <Layout className={className} title={title}>
      <PageSection
        heading={title}
        excerpt={chapterTypeText}
        withSocial
        plainText
        pageTitle
      > { // this is static text... will live in a WP settings field somewhere... same for every chapter 
      }
      
      
       <div dangerouslySetInnerHTML={{__html: chaptersText}} />
      </PageSection>
      <div style={{maxWidth: `1080px`, margin: `auto`, paddingBottom: `58px`}}>

        { featuredImage?.node && (
        <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroSize="slim"
          variant="white"
          excerpt={excerpt}
        />
      )}
      <ul className="socialIcons">
      { thisChapter?.chapterDetails?.csFacebook && (
        <li><a className="fb" title="Wisconsin Alumni Association Facebook Page" href={thisChapter.chapterDetails.csFacebook}></a></li>
      )}
      { thisChapter?.chapterDetails?.csTwitter && (
        <li><a className="tw" title="Wisconsin Alumni Association Twitter Page" href={thisChapter?.chapterDetails?.csTwitter}></a></li>
      )}
      { thisChapter?.chapterDetails?.csInstagram && (
        <li><a className="ig" title="Wisconsin Alumni Association Instagram Page" href={thisChapter.chapterDetails.csInstagram}></a></li>
      )}
      { thisChapter?.chapterDetails?.csLinkedin && (
        <li><a className="li" title="Wisconsin Alumni Association LinkedIn Page" href={thisChapter.chapterDetails.csLinkedin}></a></li> 
      )}
      { thisChapter?.chapterDetails?.csWechat && (
        <li><a className="tw" title="Wisconsin Alumni Association WeChat Page" href={thisChapter.chapterDetails.csWechat}></a></li>
      )}
       { thisChapter?.chapterDetails?.csSnapchat && (
        <li><a className="tw" title="Wisconsin Alumni Association SnapChat Page" href={thisChapter.chapterDetails.csSnapchat}></a></li>
      )}
       
   
  </ul>
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

      <PageSection heading="Our Chapter Sponsors" topBorder>
        <SimpleSlider
          className="center"
          slidesToShow="1"
          dots
          centerMode
          variableWidth
          centerPadding="100px"
        >
          <CardE
            img={page.asset29}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
            captionStyleProps={{textAlign:`center`, fontWeight: `normal`, color: `${colors.captionBlack}`, marginTop: `${sizes.s32}`, fontSize: `${sizes.s18}`}}
          />
          <CardE
            img={page.asset30}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
            captionStyleProps={{textAlign:`center`, fontWeight: `normal`, color: `${colors.captionBlack}`, marginTop: `${sizes.s32}`, fontSize: `${sizes.s18}`}}
          />
          <CardE
            img={page.square1}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
            captionStyleProps={{textAlign:`center`, fontWeight: `normal`, color: `${colors.captionBlack}`, marginTop: `${sizes.s32}`, fontSize: `${sizes.s18}`}}
          />
          <CardE
            img={page.squareBucky}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
            captionStyleProps={{textAlign:`center`, fontWeight: `normal`,color: `${colors.captionBlack}`, marginTop: `${sizes.s32}`, fontSize: `${sizes.s18}`}}
          />
        </SimpleSlider>
      </PageSection>
      <PageSection heading="WAA Stories" buttons={featuredbutton} topBorder>
        <RecentPosts />
      </PageSection>
    </Layout>
  )
}
const StyledWordPressGroupPage =styled(WordPressGroupPage)`
.socialIcons {
  display: flex;
  margin-top: ${sizes.s24};
  z-index: 1;
  list-style-type: none;
  li {
    display: block;
    width: ${sizes.s24};
    height: ${sizes.s24};
    margin: 0 ${sizes.s16} 0 0;
       
    a {
        display: block;
        width: ${sizes.s24};
        height: ${sizes.s24};
        background-color: ${colors.bgWhite};
        &:hover {
            transform: scale(1.1);
        }
        &:active {
          transform: scale(1);
        }
        &.fb {
            mask: url(${FbIcon});
        }
        &.tw {
            mask: url(${TwIcon});
        }
        &.ig {
            mask: url(${IgIcon});
        }
        &.wc {
            mask: url(${WcIcon});
        }
        &.li {
            mask: url(${LiIcon});
        }
    }
  }
}
`

export default StyledWordPressGroupPage
