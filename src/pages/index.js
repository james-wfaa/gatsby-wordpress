import React from "react"
import Layout from "../components/layout"
import PageSection from "../components/page-sections/GenericPageSection"
import { Link } from "gatsby"


const IndexPage = () => (
  <Layout>
    <PageSection pad>
      <h1>uwalumni.com redesign - development work in progress</h1>
      <h2>Full Pages / Templates</h2>
      <ul>
        <li>
          <Link to="update-info">Update My Info (NEW)</Link>
        </li>
        <li>
          <Link to="membership-join">Membership Join (NEW)</Link>
        </li>
         
      <li>
        <Link to="/email">Email Login</Link>
      </li>
  
      <li>
        <Link to="/product-aggregate">Product Aggregate</Link>
      </li>
      <li>
        <Link to="/homepage">Full Homepage </Link>
      </li>
      <li>
        <Link to="/news">News/Stories Page</Link>
      </li>
      <li>
        <Link to="/events">Events Calendar Page </Link>
      </li>
      </ul>
      <h3>Product Pages</h3>
      <ul>
        <li>
          <Link to="/gpu">Grandparents University</Link>
        </li>
        <li>
          <Link to="/founders-day">Founders Day</Link>
        </li>
        <li>
          <Link to="/reunions">Reunions</Link>
        </li>
        <li>
          <Link to="/alumni-directory">Alumni Directory</Link>
        </li>
        <li>
          <Link to="/jamess-product">Product Page - James Test</Link>
        </li>
      </ul>
      <h3>Story Pages</h3>
      <ul>
        <li>
          <Link to="/wordpress-story">Story Page - Long &amp; Winding Road (wide feature image) </Link>
        </li>
        <li>
          <Link to="/refocused">Story Page - "Refocused" (column-width feature image) </Link>
        </li>
      </ul>
    
    <h3>Default Pages</h3>
    <ul>
    <li>
        <Link to="/gpu/majors/">GPU / Majors</Link>
      </li>
      <li>
        <Link to="/gpu/scrapbooks/">GPU / Scrapbooks</Link>
      </li>
      <li>
        <Link to="/alumni-directory/opt-out/">Opt out of Badger Bridge</Link>
      </li>

    </ul>
    <h3>Event Pages</h3>
    <ul>
    <li>
        <Link to="/event/planarians">Planarians to Parasites</Link>
      </li>
      <li>
        <Link to="/event/badger-cafe-threats-to-peace-around-the-world/">Badger Café: “Threats to Peace around the World”</Link>
      </li>
    </ul>
     
     
     

 
    </PageSection>
  </Layout>
)
export default IndexPage