import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { sizes, breakpoints } from '../../components/css-variables'
import Layout from '../../components/layout'
import PageSection from '../../components/page-sections/PageSection'
import AlgoliaArchivePage from '../../components/parts/AlgoliaSearch/AlgoliaArchivePage'
import StoryContentCard from '../../components/content-blocks/StoryContentCard'

const NoteAll = ({ data }) => {
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
    
    return (
        <Layout>
            <PageSection heading="All Alumni Notes">
            <AlgoliaArchivePage
                indices={[{name: "All"}]}
                results={false}
                filters={'type:Post AND categories.name:Classnote'}
            />
                {/* <CardContainer>{cards}</CardContainer> */}
            </PageSection>
        </Layout>
    )
}

export default NoteAll

export const query = graphql`
    query AllAlumniNotes {
        notes: allWpClassnote(limit: 100, sort: { order: DESC, fields: date }) {
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
            }
        }
    }
`
