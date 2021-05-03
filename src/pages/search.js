import React, {useState } from 'react'
import Layout from "../components/layout"
import StaticSearchAlgolia from '../components/parts/AlgoliaSearch/StaticSearchAlgolia'


const Search = ({location}) => {
  if (typeof window !== "undefined" && window.location.href.includes('chapters.uwalumni.com')) {
    const fixedUrl = window.location.href.replace('chapters.uwalumni.com','www.uwalumni.com')
    window.location.replace(fixedUrl)
  }
  const [searchString] = useState(location?.state?.string ? location.state.string : null)

  return (
    <Layout title="Search" url="/search">
      <StaticSearchAlgolia
      indices={[{name: "All"}]}
      results={false}
      searchString={searchString}
      />
    </Layout>
  )
}

export default Search
