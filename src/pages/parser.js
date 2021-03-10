import React from "react"
import parse from 'html-react-parser';

const parsed = parse('<div className="foogallery foogallery-container foogallery-default foogallery-lightbox-none fg-gutter-10 fg-center fg-default fg-light fg-border-thin fg-shadow-outline fg-loading-default fg-loaded-fade-in fg-caption-hover fg-hover-fade fg-hover-zoom fg-ready" id="foogallery-gallery-75581" data-foogallery="{&quot;item&quot;:{&quot;showCaptionTitle&quot;:true,&quot;showCaptionDescription&quot;:true},&quot;lazy&quot;:true,&quot;src&quot;:&quot;data-src-fg&quot;,&quot;srcset&quot;:&quot;data-srcset-fg&quot;}" data-fg-common-fields="1" >\t<div className="fg-item"><figure className="fg-item-inner"><a href="/static/1685003007829ec9d6a549e6b701b9e1/Wildlife Ecology.png" data-attachment-id="73508" className="fg-thumb"><span className="fg-image-wrap"><img width="150" height="150" data-src-fg="/static/1685003007829ec9d6a549e6b701b9e1/Wildlife Ecology.png" className="fg-image" /></span></a><figcaption className="fg-caption"><div className="fg-caption-inner"></div></figcaption></figure><div className="fg-loader"></div></div><div className="fg-item"><figure className="fg-item-inner"><a href="/static/281392882c01eef264340274b55be5dc/SoilTurfgrass_WEB.png" data-attachment-id="73504" className="fg-thumb"><span className="fg-image-wrap"><img width="150" height="150" data-src-fg="/static/281392882c01eef264340274b55be5dc/SoilTurfgrass_WEB.png" className="fg-image" /></span></a><figcaption className="fg-caption"><div className="fg-caption-inner"></div></figcaption></figure><div className="fg-loader"></div></div><div className="fg-item"><figure className="fg-item-inner"><a href="/static/26e7e827f08d2027e9cf89f8de54eda8/Veterinary Medicine.png" data-attachment-id="73506" className="fg-thumb"><span className="fg-image-wrap"><img width="150" height="150" data-src-fg="/static/26e7e827f08d2027e9cf89f8de54eda8/Veterinary Medicine.png" className="fg-image" /></span></a><figcaption className="fg-caption"><div className="fg-caption-inner"></div></figcaption></figure><div className="fg-loader"></div></div><div className="fg-item"><figure className="fg-item-inner"><a href="/static/9f6a814e683c79a0a4c2656945850c63/SouthPoleScience_WEB.png" data-attachment-id="73502" className="fg-thumb"><span className="fg-image-wrap"><img width="150" height="150" data-src-fg="/static/9f6a814e683c79a0a4c2656945850c63/SouthPoleScience_WEB.png" className="fg-image" /></span></a><figcaption className="fg-caption"><div className="fg-caption-inner"></div></figcaption></figure><div className="fg-loader"></div></div><div className="fg-item"><figure className="fg-item-inner"><a href="/static/fdfeb0a60878b3944c5747a537444a6d/pbs1.jpg" data-attachment-id="76565" className="fg-thumb"><span className="fg-image-wrap"><img alt="UW–Madison Phi Beta Sigma Fraternity, Kappa Rho Chapter alumni attend the Phi Beta Sigma centennial celebration in Washington, DC, in 2014. (Courtesy of Candace McDowell ’73) Left to right: Monte McDowell, Harry Ogden, Sr." width="150" height="150" data-src-fg="https://uwalumdev.wpengine.com/wp-content/uploads/cache/2021/02/pbs1/1645589298.jpg" className="fg-image" /></span></a><figcaption className="fg-caption"><div className="fg-caption-inner"></div></figcaption></figure><div className="fg-loader"></div></div></div>')
//const parsed = parse('<div><span>foo</span></div>')
//console.log(parsed)
const dumbComponent = () => {
    const changed = parsed.props.children.map((child) => {
        //console.log(child)
        if (child?.props?.classname === 'fg-item') {
            //console.log('match')
            // get image and caption
            // pass as a CardE to an array of CardE (similar to RenderedBlocks in WordPressContentBlocks)
            // pass that array to the slider
        }
    })
    //console.log(changed)
    return (<div>{parsed}</div>)
}

export default dumbComponent