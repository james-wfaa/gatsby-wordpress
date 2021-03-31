import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { sizes, breakpoints } from '../../components/css-variables'
import Layout from '../../components/layout'
import PageSection from '../../components/page-sections/PageSection'
import StoryContentCard from '../../components/content-blocks/StoryContentCard'

const NewsAll = ({ data }) => {
    const CardContainer = styled.div`
        width: 256px;
        margin: 0 auto;
        display: grid;
        grid-row-gap: ${sizes.s24};

        @media screen and ${breakpoints.tabletS} {
            width: 536px;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: ${sizes.s24};
        }

        @media screen and ${breakpoints.tabletL} {
            width: 816px;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: ${sizes.s24};
        }

        @media screen and ${breakpoints.laptopS} {
            width: 1080px;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: ${sizes.s24};
        }
    `
    let cards = data.posts.nodes.map(card => {
        return (
            <StoryContentCard
                category={card.category}
                title={card.title}
                url={card.url}
                excerpt={card.excerpt}
                img={card?.featuredImage?.node?.localFile}
            />
        )
    })
    return (
        <Layout>
            <PageSection heading="All News and Story">
                <CardContainer>{cards}</CardContainer>
            </PageSection>
        </Layout>
    )
}

export default NewsAll

export const query = graphql`
    query AllNews {
        posts: allWpPost(limit: 100, sort: { order: DESC, fields: date }) {
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
                acfAlternatePostType{
                    alternateposttype
                }
                videoFormat {
                    vimeoId
                }
            
            }
        }
    }
`
