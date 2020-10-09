import React, { useState, useEffect } from "react"
import * as dayjs from "dayjs"
import isAfter from 'dayjs/plugin/isSameOrAfter'
import styled from "styled-components"

dayjs.extend(isAfter)

const DateFilter = props => {
  const [dates, setDates] = useState({
    start_date: dayjs("01/01/2020").format("MM-DD-YYYY"),
    end_date: dayjs("01/01/2020").add(1, 'year').format("MM-DD-YYYY"),
  })

  const handleDateChange = (e, type) => {
    
    const newdates = { ...dates }
    if (dayjs(e.target.value).isValid() && dayjs(e.target.value).isAfter("01-01-2019", 'year')) {
      if (type === "start") {
        newdates.start_date = dayjs(e.target.value).format("MM-DD-YYYY")
      }
      if (type === "end") {
        newdates.end_date = dayjs(e.target.value).format("MM-DD-YYYY")
      }
      setDates(newdates)
    }
  }
  useEffect(() => {
    props.handleDateFilters(dates)
  }, [dates])
  return (
    <div>
      <div>
        <label htmlFor="startDate">Start</label>
        <input
          type="date"
          name="startDate"
          onChange={e => handleDateChange(e, "start")}
        />
      </div>
      <div>
        <label htmlFor="endDate">End</label>
        <input
          type="date"
          name="endDate"
          onChange={e => handleDateChange(e, "end")}
        />
      </div>
    </div>
  )
}

export default DateFilter
