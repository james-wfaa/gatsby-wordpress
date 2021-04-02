import React from 'react'

const FooterMenu = ({ menu, pageLink="#" }) => {

  const { name, items } = menu
  
  const isLink = (pageLink != "#")
      return (
        <nav className="footer-menu">
          {isLink ? 
          (<a href={pageLink}>
            <div className="footer-menu__title" dangerouslySetInnerHTML={{ __html: name }} />
          </a>)
          :(
            <div className="footer-menu__title" dangerouslySetInnerHTML={{ __html: name }} />
          )}
          <ul>
            {menu &&
              items.map(
                prop => (
                  <li className="nav-item" key={prop.url}>
                    <a
                      className="nav-link active"
                      href={prop.url}
                      alt={prop.title}
                      target={prop.target}
                    >
                      {prop.title}
                    </a>
                  </li>
                )
              )}
          </ul>
        </nav>
      )
}
  

export default FooterMenu