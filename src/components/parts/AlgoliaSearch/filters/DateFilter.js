import React, { useState, useEffect } from "react"
import styled from "styled-components"

const DateFilter = props => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" onChange={(e) => props.handleStartDate(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" onChange={(e) => props.handleEndDate(e.target.value)}></input>
        </div>
      </form>
    </div>
  )
}

export default DateFilter
