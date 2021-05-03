import React from 'react'
import Layout from '../components/layout';
import styled from 'styled-components'
import {sizes, colors, fonts, breakpoints} from '../components/css-variables'

const Page404 = () => {
    if (typeof window !== "undefined" && window.location.includes('chapters.uwalumni.com')) {
        const fixedUrl = window.location.replace('chapters.uwalumni.com','www.uwalumni.com');
      }

    const OuterWrapper = styled.div`
        margin:100px auto 50px;
        max-width: 300px;
        min-height:400px;
        @media screen and ${breakpoints.tabletS} {
            max-width: 534px;
        }
        @media screen and ${breakpoints.laptopS} {
            max-width:1080px;
        }
        h1 {
            color: ${colors.titleColor};
            font-family: ${fonts.eaves};
            font-weight: bold;
            font-style: italic;
            margin-bottom: ${sizes.s72};
        }
        h1:after {
            display: block;
            margin: 30px auto;
            position: absolute;
            left: calc(0 - 30px);
            height: 0.444rem;
            width: calc(3.778rem);
            background-color: ${colors.titleColor};
            content: "";
            
        }
        p a {
            color:${colors.titleColor};
        }
    
    `
    return(
        <Layout title="404 - Item Not Found" url="/404">
            <OuterWrapper>
                <h1>Oops, Something Went Wrong</h1>
                <p>The page you were looking for was not found. Maybe the page has moved. Or, the address is outdated. Was the URL typed correctly? 
                    Perhaps the site is on break and went to get some Babcock ice cream.</p>
                <p>Whatever the reason for this unfortunate error, please use the menu or <a href="/search">site search</a> to get 
                where you want to go. You can reach out at any time using our chat feature or you can check out 
                our <a href="/about/customer-service-faq/">frequently asked questions</a>.</p>
            </OuterWrapper>
        </Layout>
    )
}
export default Page404