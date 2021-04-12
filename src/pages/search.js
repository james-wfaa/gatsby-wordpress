import React, {useState } from 'react'
import Layout from "../components/Layout"
import StaticSearchAlgolia from '../components/parts/AlgoliaSearch/StaticSearchAlgolia'


const Search = ({location}) => {
  const [searchString] = useState(location?.state?.string ? location.state.string : null)

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
