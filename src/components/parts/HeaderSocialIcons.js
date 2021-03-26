import React from "react"
const HeaderSocialIcons = ({ classList }) => {

    return ( 
        <ul className="socialLinks">
            <li><a className="fb" title="Follow WAA on Facebook" href="https://www.facebook.com/wisalumni" target="_blank"></a></li>
            <li><a className="tw" title="Follow WAA on Twitter" href="https://www.twitter.com/wisalumni" target="_blank"></a></li>
            <li><a className="ig" title="Follow WAA on Instagram" href="https://www.instagram.com/wisalumni" target="_blank"></a></li>
            <li><a className="wc" title="Follow WAA on WeChat" href="/wechat" target="_blank"></a></li>
            <li><a className="li" title="Follow WAA on LinkedIn" href="https://www.linkedin.com/company/wisconsin-alumni-association" target="_blank"></a></li>
        </ul>
    )
}


export default HeaderSocialIcons