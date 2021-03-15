import React, { useState, useEffect } from "react"
import parse from 'html-react-parser';
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { breakpoints, fonts, sizes, colors, mixins } from '../css-variables'
import SearchIcon from "../../svg/search.svg"


const StyledStaffSearch = styled.div`
    text-align: left;
    padding-bottom: 58px;
    border-bottom: 18px solid ${colors.sectionBorder};


    fieldset{
        border: none;

        label{
            display: block;
            margin-top: ${sizes.s24};
        }
        input{
            color: ${colors.searchFontGrey};
            display: block;
            border: 2px solid ${colors.formInputBorder};
            margin-top: 12px;
            margin-bottom: 40px;
            width: 100%;
            padding: ${sizes.s10} ${sizes.s16};
            @media screen and ${breakpoints.tabletS} {
                width: 436px;
            }
        }
        input:focus, button:focus{
            outline: none;
        }
        .staffSubmit{
            ${mixins.buttons};
            margin-top: 40px;
            border: none;
            padding: ${sizes.s14} ${sizes.s16};
            
            position: relative;
            width: 100%;

            :after {
                position: absolute;
                bottom: 32%;
                left: calc( 50% + ${sizes.s42} );
                width: ${sizes.s20};
                height: ${sizes.s20};
                background-color: ${colors.bgWhite};
                -webkit-mask-image: url(${SearchIcon});
                mask: url(${SearchIcon}) no-repeat;
                content: '';
            }

            @media screen and ${breakpoints.tabletS} {
                width: 130px;
                text-align: left;

                :after {
                    left: calc( 50% + ${sizes.s26} );
                }
            }
          
        }
    }

    .searchTitle{
        font-family: "Verlag A", "Verlag B";
        font-style: normal;
        font-size: ${sizes.s20};
        line-height: ${sizes.s26};
        border-bottom: 2px solid ${colors.borderGrey};
        padding-bottom: ${sizes.s12};
    }
    .staffSearchResults{
        font-family: "Verlag A", "Verlag B";
        font-style: normal;
        font-size: ${sizes.s18};

        .staffItem{
            margin-top: 40px;
       
            .staffName{
                font-weight: bold;
            }
            .staffTitle{
                font-style: italic;
            }
            .staffMail{
                a{
                    color: ${colors.copyText}
                }
            }
        }
        
    }

`
const StyledError = styled.p`
    font-family: "Verlag A", "Verlag B";
    font-style: normal;
    margin: 0 auto;
    padding: 0;
    font-size: 16px;
    position: relative;
    top: -30px;

    
  `

const StaffSearchModal = () => {
    const { register, handleSubmit, watch, errors } = useForm({
        mode: "onChange",
    })
    const [searchText, setSearchText] = useState("")
    const [filteredResults, setFilteredResults] = useState([])

    let rendered = filteredResults.map(item => {
        return (
            <div className="staffItem">
                {item["givenName"] && (
                    <div className="staffName">
                        {item["givenName"]} {item["sn"]}
                    </div>
                )}
                {item["title"] && (
                    <div className="staffTitle">
                        {item["title"]}
                    </div>
                )}
                {item["info"] && (
                    <div className="staffInfo">
                        {item["info"]}
                    </div>
                )}
                {item["telephoneNumber"] && (
                    <div className="staffNumber">
                        {item["telephoneNumber"]}
                    </div>
                )}
                {item["mail"] && (
                    <div className="staffMail">
                        <a href={item["mail"]}>{item["mail"]}</a>
                    </div>
                )}
                
            </div>
        )
    })

    const onSubmit = data => {
        getSearchResults(data).then(results => {
            setFilteredResults(results)
        })
    }

    const getSearchResults = (input) =>{
        if(input.searchinput){
            return fetch("https://uwalumdev.wpengine.com/wp-json/staffsearch/v1/search?s=" + input.searchinput)
            .then((response) => { 
                return response.json().then((data) => {
                    return data
                }).catch((err) => {
                    console.log(err)
                }) 
            });
        }
        else{
            return null
        }
        
    }

    const searchHandler = e => {
        setSearchText(e.target.value)
    }

  return (
    <StyledStaffSearch className="StaffSearch">
        <div className="searchTitle">CONTACT WAA STAFF</div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="searchinput">Find a WAA staff member's contact information.</label>
                <input
                type="text"
                name="searchinput"
                id="searchinput"
                placeholder="Search by name"
                ref={register({
                })}
                />
                {errors.searchinput && (
                <StyledError>{errors.searchinput.message}</StyledError>
                )}
                <button
                type="submit"
                name="submitbutton"
                id="submitbutton"
                className="staffSubmit"
                value="Search"
                disabled={Object.keys(errors).length > 0 ? true : false}
                >Search</button>
            </fieldset>
        </form>
       
        <div className="staffSearchResults"></div>
        <div className="staffSearchResults">{rendered}</div>
    </StyledStaffSearch>
  )
}

export default StaffSearchModal