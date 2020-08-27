import React from 'react'

const FooterMenu = ({ menu, pageLink="#" }) => {

  const { name, items } = menu

      return (
        <nav className="footer-menu">
          <a href={pageLink}>
            <div className="footer-menu__title" dangerouslySetInnerHTML={{ __html: name }} />
          </a>
          <ul>
            {menu &&
              items.map(
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
}
  

export default FooterMenu