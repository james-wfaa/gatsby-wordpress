import React from "react"
const HeaderSocialIcons = ({ classList }) => {

    return ( 
        <ul className="socialLinks">
            <li><a className="fb" target="_blank" title="Follow WAA on Facebook" href="https://www.facebook.com/wisalumni">Follow WAA on Facebook</a></li>
            <li><a className="tw" target="_blank" title="Follow WAA on Twitter" href="https://www.twitter.com/wisalumni">Follow WAA on Twitter</a></li>
            <li><a className="ig" target="_blank" title="Follow WAA on Instagram" href="https://www.instagram.com/wisalumni">Follow WAA on Instagram</a></li>
            <li><a className="wc" target="_blank" title="Learn more About following WAA on WeChat" href="/about/wechat">Learn more About following WAA on WeChat</a></li>
            <li><a className="li" target="_blank" title="Follow WAA on LinkedIn" href="https://www.linkedin.com/company/wisconsin-alumni-association">Follow WAA on LinkedIn</a></li>
        </ul>
    )
}


export default HeaderSocialIcons