import React from "react"
import styled from 'styled-components'
import { colors, sizes, breakpoints, mixins } from '../css-variables'
import Accordian from "./Accordian"


const ProductMenu = ({ items, className, menuTitle }) => {
    const itemsList = items.map((item) => (
        <div className="menu__item" key={item.title}>
            <a className="menu__link" href={item.uri}><span>{item.title}</span></a>
        </div>
      ))
    const navOpenText =  menuTitle + ' menu' 
    const navCloseText = menuTitle + ' menu'

      
        return (
            <Accordian opentext={navOpenText} closetext={navCloseText} useAsMenu>
                <div className={className}>
                    {itemsList && (<section className="menu__items">{itemsList}</section>)}
                </div>
            </Accordian>
        
        )
}

const StyledProductMenu = styled(ProductMenu)`

margin-bottom: 48px;
width: 80%;
max-width: 500px;
margin: 0 auto;


@media screen and ${breakpoints.tabletS} {
    width: max-content;
}

.menu__link{
    color: ${colors.copyText};
    font-size: ${sizes.s18};
    line-height: ${sizes.s36};
    text-decoration: none;
    &:hover {
        color: ${colors.linkTextHover};
    }
    
}

`

export default StyledProductMenu