import React, {useState } from 'react'
import Layout from "../components/layout"
import StaticSearchAlgolia from '../components/parts/AlgoliaSearch/StaticSearchAlgolia'


const Search = ({location}) => {
  const [searchString] = useState(location?.state?.string ? location.state.string : null)

  return (
    <Layout title="Search">
      <StaticSearchAlgolia
      indices={[{name: "All"}]}
      results={false}
      searchString={searchString}
      />
    </Layout>
  )
}

export default Search
