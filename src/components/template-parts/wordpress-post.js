import React from "react"

import { Link } from "gatsby"
import Layout from "../layout"
import { normalizePath } from "../../utils/get-url-path"
import WordPressContent from "../content-blocks/WordPressPostContent"
import StorySectionHeader from '../parts/StorySectionHeader'
import PageSection from "../page-sections/PageSection"
import FeaturedImage from "../content-blocks/FeaturedImage"
import {TiSocialTwitter} from "react-icons/ti";
import {TiSocialFacebook} from "react-icons/ti";
import {AiFillMail} from "react-icons/ai";
import { ShareButtonIconOnly, ShareBlockStandard } from "react-custom-share";

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage, categories, author, date, excerpt } = page
  const shareBlockProps = {
    url: "https://localhost:8000/",
    button: ShareButtonIconOnly,
    buttons: [
      { network: "Twitter", icon: TiSocialTwitter },
      { network: "Facebook", icon: TiSocialFacebook },
      { network: "Email", icon: AiFillMail },
    ],
    text: `Give it a try - mywebsite.com `,
    longtext: `Take a look at this super website I have just found.`
  };


  return (
    <Layout>
      <PageSection>
        <StorySectionHeader heading={title} author={author} categories={categories} date={date} excerpt={excerpt}  />
        {!!featuredImage?.node?.remoteFile?.childImageSharp && (
            <FeaturedImage featuredImage={featuredImage} />
        )}
        <WordPressContent content={content} />
      </PageSection>


      <br />
      {!!nextPage && (
        <Link to={normalizePath(nextPage.uri)}>Next: {nextPage.title} --
      </Link>
       
      )}
      <br />
      {!!previousPage && (
        <Link to={normalizePath(previousPage.uri)}>
          Previous: {previousPage.title}
        </Link>
      )}
      <ShareBlockStandard {...shareBlockProps} />
    </Layout>
  )
}

export default BlogPost
