import React, {useState, useEffect} from 'react'
import Layout from "../components/layout"
import PageSection from "../components/page-sections/PageSection"
import StaticSearchAlgolia from '../components/parts/AlgoliaSearch/StaticSearchAlgolia'


const Search = ({location}) => {
  const [searchString, setSearchString] = useState(location?.state?.string ? location.state.string : null)

  return (
    <Layout>
      <StaticSearchAlgolia
      indices={[{name: "All"}]}
      results={false}
      searchString={searchString}
      />
    </Layout>
  )
}

export default Search
