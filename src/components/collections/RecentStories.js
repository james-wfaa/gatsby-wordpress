import { useStaticQuery, graphql } from "gatsby"

const RecentStories = () => {
    const { allWpPost } = useStaticQuery(
      graphql`
        query {
          allWpPost(limit: 500, sort: {order: DESC, fields: date}) {
            nodes {
              title
              excerpt
              featuredImage {
                node {
                  localFile {
                    ...HeroImage
                  }
                }
              }
              url: uri
              terms {
                nodes {
                  ... on WpPostFormat {
                    id
                    name
                    slug
                  }
                }
              }
              linkFormat {
                linkAuthor
                linkUrl
              }
            }
          }
        }
      `
    )
    return (
      allWpPost
    )
  }
  
  export default RecentStories
  