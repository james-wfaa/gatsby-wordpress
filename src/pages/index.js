import React from "react"
import Layout from "../components/layout"
import PageSection from "../components/page-sections/GenericPageSection"

import { Link } from "gatsby"


export default () => <Layout>
    <PageSection pad>
    <h1>uwalumni.com redesign - development work in progress</h1>
    <h2>Full Page Templates</h2>
    <li>
        <Link to="/wordpress-story">Story Page (NEW) (in progress)</Link>
    </li>
    <li>
        <Link to="/chapter-page">Individual Group Page (NEW) (in progress)</Link>
    </li>
    <li>
        <Link to="/homepage">Full Homepage</Link> 
    </li>
    <h2>Page Sections &amp; Content Components</h2>
    <ul>
    <li>
            <Link to="/testimonials">Testimonials (NEW - WP content)</Link> 
        </li>
        <li>
            <Link to="/contentCardFlex">Content Card (NEW - Promo Card S)</Link> 
        </li>
        <li>
            <Link to="/james-test">Image/Content Modules (1/3, 1/2, 2/3) from WordPress Pages </Link>(new / in progress)
        </li>
        <li>
            <Link to="/contentBlockList">Content Card List (NEW)</Link>
        </li>
        <li>
            <Link to="/gridCardDPop">Card D Grid Alternative, pops out of section (NEW)</Link>
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
            <Link to="/slider">Carousel</Link>
        </li>
        <li>
            <Link to="/fonts">Text Styles</Link>
        </li>
    
       
    </ul>


    </PageSection>
    

    
    </Layout>