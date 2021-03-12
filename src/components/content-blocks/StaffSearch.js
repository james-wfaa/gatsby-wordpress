import React, { useState, useEffect } from "react"
import parse from 'html-react-parser';
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { breakpoints, fonts, sizes, colors, mixins } from '../css-variables'

const StyledStaffSearch = styled.div`
    fieldset{
        border: none;
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

const staffItem = ({ item }) => {
    
    return (
        <div className="staffIndividual">
            { item['givenName'] && (
                <div className = "staffName">{item['givenName']} {item['sn']}</div>
            )}
            { item['givenName'] && (
                <div className = "staffName">{item['givenName']} {item['sn']}</div>
            )}
            { item['givenName'] && (
                <div className = "staffName">{item['givenName']} {item['sn']}</div>
            )}
            { item['givenName'] && (
                <div className = "staffName">{item['givenName']} {item['sn']}</div>
            )}
            { item['givenName'] && (
                <div className = "staffName">{item['givenName']} {item['sn']}</div>
            )}
        </div>
    )
}
const StaffSearchModal = () => {
    const { register, handleSubmit, watch, errors } = useForm({
        mode: "onChange",
    })
    const [searchText, setSearchText] = useState("")
    let searchResults = []
    let rendered = []
    const onSubmit = data => {
        
        getSearchResults(data).then(results => {
            console.log(results)
            results.map(item => {
                rendered.push(
                    <div>
                        { item['givenName'] && (
                            <div className = "staffName">{item['givenName']} {item['sn']}</div>
                        )}
                        { item['givenName'] && (
                            <div className = "staffName">{item['givenName']} {item['sn']}</div>
                        )}
                        { item['givenName'] && (
                            <div className = "staffName">{item['givenName']} {item['sn']}</div>
                        )}
                        { item['givenName'] && (
                            <div className = "staffName">{item['givenName']} {item['sn']}</div>
                        )}
                        { item['givenName'] && (
                            <div className = "staffName">{item['givenName']} {item['sn']}</div>
                        )}
                    </div>
                )
            })
            console.log(rendered)
        })
    }

    const getSearchResults = (input) =>{
        return fetch("https://uwalumdev.wpengine.com/wp-json/staffsearch/v1/search?s=" + input.searchinput)
        .then((response) => { 
            return response.json().then((data) => {
                data.map(item => {
                    searchResults.push(item)
                    console.log(item)
                })
                return data;
            }).catch((err) => {
                console.log(err)
            }) 
        });
    }

    const searchHandler = e => {
        setSearchText(e.target.value)
    }

  return (
    <StyledStaffSearch>
        <h3>WAA Contact Info</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="searchinput">Find a WAA staff member's contact information.</label>
                <input
                type="text"
                name="searchinput"
                id="searchinput"
                placeholder="Search by name"
                ref={register({
                    required: { value: true, message: "Enter a search term" },
                    minLength: {
                    value: 2,
                    message: "Must be greater than 2 letters",
                    },
                    pattern: {
                    value: /^[A-Za-z @-]+$/,
                    message: "Name must not contain numbers",
                    },
                })}
                />
                {errors.searchinput && (
                <StyledError>{errors.searchinput.message}</StyledError>
                )}
                <input
                type="submit"
                name="submitbutton"
                id="submitbutton"
                value="Search"
                disabled={Object.keys(errors).length > 0 ? true : false}
                />
            </fieldset>
        </form>
       
        <div className="staffSearchResults">
            
        </div>
        <div className="staffSearchResults">
            {rendered &&  (
                rendered.map((item) => (
                    <staffItem item={item} />
                ))
            )}
        </div>
        
        
    </StyledStaffSearch>
  )
}

export default StaffSearchModal