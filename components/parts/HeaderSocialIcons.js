import React from "react"
import styled from 'styled-components'
import { colors, sizes, breakpoints } from '../css-variables'
const HeaderSocialIcons = ({ classList }) => {

    return ( 
        <ul className="socialLinks">
            <li><a className="fb" title="Wisconsin Alumni Association Facebook Page" href="https://www.facebook.com"></a></li>
            <li><a className="tw" title="Wisconsin Alumni Association Twitter Page" href="https://www.twitter.com"></a></li>
            <li><a className="ig" title="Wisconsin Alumni Association Instagram Page" href="https://www.instagram.com"></a></li>
            <li><a className="wc" title="Wisconsin Alumni Association WeChat Page" href="https://www.wechat.com"></a></li>
            <li><a className="li" title="Wisconsin Alumni Association LinkedIn Page" href="https://www.linkedin.com"></a></li>
        </ul>
    )
}


export default HeaderSocialIcons