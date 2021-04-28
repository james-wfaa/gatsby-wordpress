import React from "react"
const HeaderSocialIcons = ({ classList }) => {

    return ( 
        <ul className="socialLinks">
            <li><a className="fb" target="_blank" title="Follow WAA on Facebook" href="https://www.facebook.com/wisalumni" tabIndex="0"><span>Follow WAA on Facebook</span></a></li>
            <li><a className="tw" target="_blank" title="Follow WAA on Twitter" href="https://www.twitter.com/wisalumni" tabIndex="0"><span>Follow WAA on Twitter</span></a></li>
            <li><a className="ig" target="_blank" title="Follow WAA on Instagram" href="https://www.instagram.com/wisalumni"><span>Follow WAA on Instagram</span></a></li>
            <li><a className="wc" target="_blank" title="Learn more About following WAA on WeChat" href="/about/wechat"><span>Learn more About following WAA on WeChat</span></a></li>
            <li><a className="li" target="_blank" title="Follow WAA on LinkedIn" href="https://www.linkedin.com/company/wisconsin-alumni-association"><span>Follow WAA on LinkedIn</span></a></li>
        </ul>
    )
}


export default HeaderSocialIcons