import React from "react"
import { Link } from "gatsby"


export default () => <div>
    <h2>Card Components</h2>
    <ul>
        <li>
            <Link to="/cardA">Card A (1/3, 1/2, 2/3 sizes)</Link> (NEW)
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

    
    </div>