import { graphql } from "gatsby"

export const fragments = graphql`
  fragment HeroImage on File {
    childImageSharp {
      fluid(maxWidth: 2880) {
        ...GatsbyImageSharpFluid
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
          dateGmt
          hideFromMenu {
            hideFromMenu
            fieldGroupName
          }
          menuOrder
          wpChildren {
            nodes {
              ... on WpPage {
                id
                title
                uri
                dateGmt
                hideFromMenu {
                  hideFromMenu
                  fieldGroupName
                }
                menuOrder
                wpChildren {
                  nodes {
                    ... on WpPage {
                      id
                      title
                      uri
                      dateGmt
                      hideFromMenu {
                        hideFromMenu
                        fieldGroupName
                      }
                      menuOrder
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
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                  aspectRatio
                  src
                  srcSet
                  sizes
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
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                  src
                  srcSet
                  aspectRatio
                  sizes
                }
              }
            }
          }
        }
        acfAlternatePostType{
          alternateposttype
        }
        videoFormat {
          vimeoId
        }
        linkFormat {
          linkAuthor
          linkUrl
        }
        categories {
          nodes {
            name
            slug
            id
          }
        }
        products {
          nodes {
            name
            slug
            id
          }
        }

      }
    }
  }
`
