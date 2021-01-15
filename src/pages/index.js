import React from "react"
import Layout from "../components/layout"
import PageSection from "../components/page-sections/GenericPageSection"

import { Link } from "gatsby"


export default () => (
  <Layout>
    <PageSection pad>
      <h1>uwalumni.com redesign - development work in progress</h1>
      <h2>Full Pages / Templates</h2>
      <li>
        <Link to="/gpu">Product Page - GPU</Link>
      </li>
      <li>
        <Link to="/jamess-product">Product Page - James Test</Link>
      </li>
      <li>
        <Link to="/news/wordpress-story">Story Page - Long &amp; Winding Road (wide feature image) </Link>
      </li>
      <li>
        <Link to="/news/wordpress-story">Story Page - "Refocused" (column-width feature image) </Link>
      </li>
    
      <li>
        <Link to="/gpu/majors/">Default Page (GPU / Majors)</Link>
      </li>
      <li>
        <Link to="/gpu/scrapbooks/">Default Page (GPU / Scrapbooks)</Link>
      </li>
      <li>
        <Link to="/email">Email Login - NEW</Link>
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
      <li>
        <Link to="/event/planarians">Event Page</Link>
      </li>
      <li>
        <Link to="/chapter-page">
          Individual Group Page (NEW) (in progress)
        </Link>
      </li>

      <h2>Page Sections &amp; Content Components</h2>
      <ul>
      <li>
          <Link to="/accordian-search">Accordion Search Component (NEW)</Link>
        </li>
        <li>
          <Link to="/slider">Carousel</Link>
        </li>
        <li>
          <Link to="/contentCardFlex">Content Card</Link>
        </li>
        <li>
          <Link to="/james-test">
            Image/Content Modules (1/3, 1/2, 2/3) from WordPress Pages{" "}
          </Link>

        </li>
        <li>
          <Link to="/contentBlockList">Content Card List </Link>
        </li>
        <li>
          <Link to="/gridCardDPop">
            Card D Grid Alternative, pops out of section
          </Link>
        </li>
        <li>
          <Link to="/header">Header Nav Menu</Link>
        </li>
        <li>
          <Link to="/footer">Footer </Link>
        </li>

        <li>
          <Link to="/communicationForm">Communication Form</Link>
        </li>

        <li>
          <Link to="/page-section">Basic Page Section</Link>
        </li>
        <li>
          <Link to="/intro-section">Intro Hero Section</Link>
        </li>
        <li>
          <Link to="/cardD">Card D</Link>
        </li>
        <li>
          <Link to="/gridCardD">Card D Grid Format</Link>
        </li>

        <li>
          <Link to="/fonts">Text Styles</Link>
        </li>
        <li>
          <Link to="/carousel-intro">Carousel Hero Section</Link>
        </li>
        <li>
          <Link to="/modal">Generic Modal</Link>
        </li>
        <li>
          <Link to="/sidebarMenu">Generic Sidebar Menu</Link>
        </li>


      </ul>
    </PageSection>
  </Layout>
)