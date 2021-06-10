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
  fragment HeroImageNew on File {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  fragment EventImage on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
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
          dayYear: date(formatString: "DD, YYYY")
          month: date(formatString: "MM")
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
                dayYear: date(formatString: "DD, YYYY")
                month: date(formatString: "MM")
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
                      dayYear: date(formatString: "DD, YYYY")
                      month: date(formatString: "MM")
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
        eventsCategories {
          nodes {
            name
            url: uri
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
