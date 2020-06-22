import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default ({menuName, pageLink="#"}) => (
  <StaticQuery
    query={graphql`
    query {
      allWordpressWpApiMenusMenusItems  {
        edges {
          node {
            slug
            name
            items {
              title
              url
            }
          }
        }
      }
    }
  `}
    render={data => {
      const myMenu =  data.allWordpressWpApiMenusMenusItems.edges.find(
        ({ node }) => node.slug === menuName
      )
      
      return (
        <nav className="footer-menu">
          <a href={pageLink}>
            <div className="footer-menu__title" dangerouslySetInnerHTML={{ __html: myMenu.node.name }} />
          </a>
          <ul>
            {myMenu &&
              myMenu.node &&
              myMenu.node.items &&
              myMenu.node.items.map(
                prop => (
                  <li className="nav-item" key={prop.url}>
                    <a
                      className="nav-link active"
                      href={prop.url}
                      alt={prop.title}
                    >
                      {prop.title}
                    </a>
                  </li>
                )
              )}
          </ul>
        </nav>
      )
    }}
  />
)
  
