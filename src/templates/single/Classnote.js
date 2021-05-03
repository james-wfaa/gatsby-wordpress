import React from "react"
import { graphql } from "gatsby"
import Classnote from "../../components/template-parts/wordpress-classnote"

const ClassNote = ({ data }) => {
  if (typeof window !== "undefined" && window.location.includes('chapters.uwalumni.com')) {
    const fixedUrl = window.location.replace('chapters.uwalumni.com','www.uwalumni.com');
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
            ...HeroImage
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
