import React, {useState, useEffect} from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PageSection from "../components/page-sections/PageSection"
import ContentCard from "../components/content-blocks/ContentCard"
import ContentBlockList from "../components/content-modules/ContentBlockList"
import AccordianSearch from "../components/parts/AccordianSearch"

const taglist1 = [
    {
        link: '#',
        tag: 'Tag 1'
    },
    {
        link: '#',
        tag: 'Tag 2'
    },
    {
        link: '#',
        tag: 'Tag 3'
    },
    {
        link: '#',
        tag: 'Tag 4'
    },
    {
        link: '#',
        tag: 'Tag 5'
    },
    {
      link: '#',
      tag: 'Tag 6'
    },
    {
      link: '#',
      tag: 'Tag 7'
    },
    {
      link: '#',
      tag: 'Tag 8'
    },
    {
      link: '#',
      tag: 'Tag 9'
    },
  ]
  const taglist2 = [
    {
        link: '#',
        tag: 'Tag 1'
    },
    {
        link: '#',
        tag: 'Tag 2'
    },
    {
        link: '#',
        tag: 'Tag 3'
    },
    {
        link: '#',
        tag: 'Tag 4'
    },
]



export default ({ data }) => {
  const [filteredEvents, setFilteredEvents] = useState([])
  const [filterString, setFilterString] = useState("")
  const [categoryList, setCategoryList] = useState([])
  const [categoryFilters, setCategoryFilters] = useState([])

  const cardList = [
    {
      startDate: "Apr 29",
      endDate: "May 3",
      title: "The Kentucky Derby",
      category: "Horse Racing",
      venue: "Churchill Downs",
      location: "Louisville, KY",
      img: data.cardImage5,
      featureImg: data.cardImage4,
      alt: true,
      size: "XXL"
    },
    {
      startDate: "Apr 29",
      title: "The Kentucky Derby",
      category: "Buggy Racing",
      venue: "Churchill Downs",
      location: "Louisville, KY",
      tags: taglist2,
      img: data.cardImage3,
      featureImg: data.cardImage2,
      size: "Wide"
    },
    {
      startDate: "Apr 29",
      endDate: "May 3",
      title: "The Past, Present, and Future of Rainstorms and Floods in Wisconsin",
      category: "Historical Tour",
      venue: "Churchill Downs",
      location: "Louisville, KY",
      tags: taglist1,
      img: data.cardImage5,
      featureImg: data.cardImage1,
      size: "Wide"
    },
    {
      startDate: "Apr 29",
      endDate: "May 3",
      title: "Typewriter gluten-free occupy jianbing selvage, artisan neutra reprehenderit lomo est post-ironic ad 90's.",
      category: "Historical Tour",
      venue: "Churchill Downs",
      location: "Louisville, KY",
      tags: taglist2,
      size: "Wide"
    },
    {
      startDate: "Apr 29",
      endDate: "May 3",
      title: "Gentrify try-hard tacos, taiyaki small batch bespoke 90's hell of non hot chicken.",
      category: "Food Trucks",
      venue: "Churchill Downs",
      location: "Louisville, KY",
      tags: taglist2,
      size: "Wide"
    },
    {
      startDate: "Apr 29",
      endDate: "May 3",
      title: "Testing various titles here",
      category: "Other",
      venue: "Churchill Downs",
      location: "Louisville, KY",
      tags: taglist2,
      size: "Wide"
    },
    {
      startDate: "Apr 29",
      endDate: "May 3",
      title: "Lorem Ipsum Puget Sound",
      category: "Food Trucks",
      venue: "Churchill Downs",
      location: "Louisville, KY",
      tags: taglist2,
      size: "Wide"
    },
  ]

  const getCategories = () => {
    let categorylist = cardList.map((card) => {
      return card.category
    })
    let reducedlist = [...new Set(categorylist)]
    reducedlist.sort()
    return reducedlist
  }

  const handleFilterString = (str) => {
    setFilterString(str)
  }

  const handleCategoryFilters = (obj) => {
    setCategoryFilters(obj)
  }

  const titleFilter = data => {
    if (filterString !== "") {
      return data.filter(evt => {
         return evt.title.toUpperCase().includes(filterString.toUpperCase())
      })
    }
    return data
  }

  const categoryFilter = (data) => {
    let updatedData = data
    let filterArray = []
    let keys = Object.keys(categoryFilters)
    let filtered = keys.filter(key => categoryFilters[key])
    filtered.forEach(filter => {
      let cardArray = updatedData.filter(card => card.category === filter)
      filterArray.push(cardArray)
    })
    return filterArray.flat()
  }


  const runFilters = () => {
    let updatedData = [...cardList]
    updatedData = titleFilter(updatedData)
    updatedData = categoryFilter(updatedData)
    setFilteredEvents(updatedData)
  }

  useEffect(() => {
    setCategoryList(getCategories());
    setFilteredEvents(cardList);
  }, [])

  useEffect(() => {
    runFilters()
  }, [filterString, categoryFilters])

  let contentCards = filteredEvents.map(card => {

    return (
    <ContentCard
      key={`${card.startDate}${card.venue}`}
      startDate={card.startDate}
      endDate={card.endDate}
      title={card.title}
      category={card.category}
      venue={card.venue}
      location={card.location}
      img={card.img}
      featureImg={card.featureImg}
      alt={card.alt}
      size={card.size}
    />)
  })

  return (
    <Layout>
      <AccordianSearch
        handleFilterString={(str) => handleFilterString(str)}
        handleCategoryFilters={(obj) => handleCategoryFilters(obj)}
        filterString={filterString}
        categoryFilters={categoryList}
      />
      <PageSection heading="Sifted Events">
        <ContentBlockList>
          {contentCards}
        </ContentBlockList>
      </PageSection>
    </Layout>
  )
}

export const pageQuery = graphql`
query {
    cardImage1: file(relativePath: { eq: "Feb_Richard_Davis_Web_01@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 720, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage2: file(relativePath: { eq: "12_DutchWaterways_header@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 720, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage3: file(relativePath: { eq: "17LEARN_JakeWood_manis_29.png" }) {
      childImageSharp {
        fluid(maxWidth: 720, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage4: file(relativePath: { eq: "lead_720_405@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize

        }
      }
    }
    cardImage5: file(relativePath: { eq: "lead_720_405-2-1-a@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 712,  quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize

        }
      }
    }
    cardImage6: file(relativePath: { eq: "fball_ILL_band18_0556-3@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 712,  quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize

        }
      }
    }
    cardImage7: file(relativePath: { eq: "19AP_DowntownMadisonInc_NewFacesNPlaces_Manis_13@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 712,  quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize

        }
      }
    }
  }
`