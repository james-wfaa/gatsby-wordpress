import React from 'react'
import Layout from '../components/layout';
import styled from 'styled-components'


const Page404 = () => {
    const styled404 = styled.div `
        margin:100px auto 50px;
        max-width:1080px;
        min-height:400px
        h1 {
            color: rgb(197, 5, 12);
            font-family: mrs-eaves-xl-serif, serif;
            font-weight: bold;
            font-style: italic;
            margin-bottom:75px;
        }
        div h1:after {
            display: block;
            margin: 30px auto;
            position: absolute;
            left: calc(0 - 30px);
            height: 0.444rem;
            width: calc(3.778rem);
            background-color: rgb(197, 5, 12);
            content: "";
        }
        div p a {
            color:rgb(197, 5, 12);
        }
    `
    return(
        <Layout>
            <styled404>
                <h1>Oops, Something Went Wrong</h1>
                <p>The page you were looking for was not found. Maybe the page has moved. Or, the address is outdated. Was the URL typed correctly? Perhaps the site is on break and went to get some Babcock ice cream.</p>
                <p>Whatever the reason for this unfortunate error, please use the menu or <a href="/search">site search</a> to get where you want to go. You can reach out at any time using our chat feature or you can check out our <a href="/customer-service-faq/">frequently asked questions</a>.</p>
            </styled404>
        </Layout>
    )
}
export default Page404