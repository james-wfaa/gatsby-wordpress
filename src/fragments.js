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
          hideFromMenu {
            hideFromMenu
            fieldGroupName
          }
          wpChildren {
            nodes {
              ... on WpPage {
                id
                title
                uri
                hideFromMenu {
                  hideFromMenu
                  fieldGroupName
                }
                wpChildren {
                  nodes {
                    ... on WpPage {
                      id
                      title
                      uri
                      hideFromMenu {
                        hideFromMenu
                        fieldGroupName
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
  }
  fragment ProductEventCards on WpProduct {
    events {
      nodes {
        title
        url: uri
        startDate
        endDate
        venue {
          title
          city
          state
        }
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 712) {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  }
  fragment ProductPostCards on WpProduct {
    posts {
      nodes {
        title
        url: uri
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 712) {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`
