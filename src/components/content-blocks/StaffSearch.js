import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import styled from 'styled-components'
import PageSection from "../page-sections/PageSection"

const StaffSearchModal = ({ topOffset, isMobile }) => {
    const { register, handleSubmit, watch, errors } = useForm({
        mode: "onChange",
    })
    const [searchText, setSearchText] = useState("")
    const onSubmit = data => {
        let searchResult
        getSearchResults(data).then(results => {
            console.log(results)
            searchResult = results
        })
    }

    const getSearchResults = (input) =>{
        return fetch("https://uwalumdev.wpengine.com/wp-json/staffsearch/v1/search?s=" + input.searchinput, {
            method: 'GET',
            headers: {
            'content-type': 'application/json',
            },
        }).then((response) => { 
            return response.json().then((data) => {
                //console.log(data);
                return data;
            }).catch((err) => {
                console.log(err);
            }) 
        });
    }

    const searchHandler = e => {
        setSearchText(e.target.value)
    }

    const StyledError = styled.p`
    font-family: "Verlag A", "Verlag B";
    font-style: normal;
    margin: 0 auto;
    padding: 0;
    font-size: 16px;
    position: relative;
    top: -30px;
  `

  return (
    <PageSection preheading="Contact Staff" topBorder>
       <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label htmlFor="searchinput">Search</label>
            <input
              type="text"
              name="searchinput"
              id="searchinput"
              placeholder="Search Text"
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
            value="SUBMIT"
            disabled={Object.keys(errors).length > 0 ? true : false}
            />
          </fieldset>
        </form>

   </PageSection>
  )
}

export default StaffSearchModal