import React from "react"
import { graphql } from "gatsby"
import Classnote from "../../components/template-parts/wordpress-classnote"

const ClassNote = ({ data }) => {
  if (typeof window !== "undefined" && window.location.href.includes('chapters.uwalumni.com')) {
    const fixedUrl = window.location.href.replace('chapters.uwalumni.com','www.uwalumni.com')
window.location.replace(fixedUrl)
  }
//console.log('Post.js data:',data)

return (<Classnote data={data} />)
}

export default ClassNote

export const query = graphql`
  query classnote($id: String!) {
    page: wpClassnote(id: { eq: $id }) {
      title
      content
      uri
      link
      date(formatString: "MMM. DD, YYYY")
      excerpt
      author {
        node {
          firstName
          lastName
          name

        }

      }
      featuredImage {
        node {
          caption
          mediaDetails {
            height
            width
          }
          author{
            node{
              name
            }
          }
          localFile {
            ...HeroImageNew
          }
        }
      }
      classnoteNotes {
        nodes {
          name
          slug
          description
        }
      }
      classnoteDegrees {
        nodes {
          name
          slug
        }
      }
      alumniNotesFields {
        classnotesAuthor
        classnotesOther
        classnotesSubject
        classnotesUrl
        classnotesUrlname
        fieldGroupName
      }

    }
  }
`
