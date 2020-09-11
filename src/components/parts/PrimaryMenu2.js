import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { colors, sizes, breakpoints } from "../css-variables"
import styled from "styled-components"

const MenuGrid = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const LeftMenu = styled.div`
  li {
    list-style: none;
  }
`

const RightMenu = styled.div`
  position: relative;
  display: grid;
  ul {
    justify-self: left;
  }
  li {
    list-style: none;
  }
`

const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
`

const menuItems = {
  "Test 1": [
    { tag: "For Waa", url: "/waa" },
    { tag: "Chapters and Groups", url: "/chapters" },
    { tag: "Similar", url: "/similar" },
    { tag: "Stories", url: "/stories" },
  ],
  "Test 2": [
    { tag: "test 5", url: "/waa" },
    { tag: "test 6", url: "/chapters" },
  ],
  "Test 3": [
    { tag: "test 7", url: "/waa" },
    { tag: "test 8", url: "/chapters" },
    { tag: "test 9", url: "/chapters" },
  ],
  "Test 4": [
    { tag: "L", url: "/waa" },
    { tag: "Natural", url: "/chapters" },
    { tag: "Lorem", url: "/chapters" },
    { tag: "Ipsum et al verirtas unas", url: "/chapters" },
    { tag: "Chapters and Groups", url: "/chapters" },
    { tag: "Last line", url: "/chapters" },
  ],
}

const PrimaryMenu2 = () => {
  const [select, setSelect] = useState(null)
  const [childLinks, setChildLinks] = useState([])

  const parentEnterHandler = str => {
    setSelect(str)
  }
  const parentClickHandler = (str, e) => {
    e.stopPropagation()
    setSelect(str)
  }

  const parentLinks = Object.keys(menuItems).map(link => {
    return (
      <li>
        <div
          onMouseEnter={() => parentEnterHandler(link)}
          onClick={e => parentClickHandler(link, e)}
          style={{
            backgroundColor: select === link ? `${colors.navcardGrey}` : null,
          }}
        >
          {link}
        </div>
      </li>
    )
  })

  useEffect(() => {
    if (select !== null) {
      let links = menuItems[select].map(link => {
        return (
          <li>
            <a href={link.url}>{link.tag}</a>
          </li>
        )
      })
      setChildLinks(links)
    }
  }, [select])

  return (
    <>
      <MenuGrid>
        <LeftMenu>
          <ul>{parentLinks}</ul>
        </LeftMenu>
        <RightMenu>
          <Logo>Logo</Logo>
          {childLinks.length > 0 ? <ul>{childLinks}</ul> : null}
        </RightMenu>
      </MenuGrid>
    </>
  )
}

export default PrimaryMenu2
