import React from "react"
import styled from 'styled-components'
import { colors, sizes, breakpoints, mixins } from '../css-variables'

const MenuBasic = ({ items, className, menuTitle }) => {
    const itemsList = items.map((item) => (
        <div className="menu__item" key={item.title}>
            <a className="menu__link" href={item.uri}><span>{item.title}</span></a>
        </div>
      ))
      
        return (
        <div className={className}>
            {menuTitle && (<div className="menu__title">&ldquo;{menuTitle}&rdquo;</div> )}
            {itemsList && (<section className="menu__items">{itemsList}</section>)}
        </div>
        )
}

const StyledMenuBasic = styled(MenuBasic)`

margin-bottom: 48px;
width: 80%;
max-width: 500px;
margin: 0 auto;


@media screen and ${breakpoints.tabletS} {
    width: max-content;
}

.menu__title{
    color: ${colors.titleColor};
    font-size: ${sizes.s16};
    font-weight: bold;
    line-height: ${sizes.s26};
    margin-bottom: 32px;
}  
.menu__link{
    color: ${colors.copyText};
    font-size: ${sizes.s18};
    line-height: ${sizes.s36};
    text-decoration: none;
    
}

`

export default StyledMenuBasic