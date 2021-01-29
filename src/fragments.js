import { graphql } from "gatsby"

export const fragments = graphql`
  fragment HeroImage on File {
    childImageSharp {
      fluid(maxWidth: 2880) {
        ...GatsbyImageSharpFluid_tracedSVG
        aspectRatio
      }
    }
  }
  fragment Children on WpPage {
    wpChildren {
      nodes {
        ... on WpPage {
          id
          title
          uri
          wpChildren {
            nodes {
              ... on WpPage {
                id
                title
                uri
                wpChildren {
                  nodes {
                    ... on WpPage {
                      id
                      title
                      uri
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
