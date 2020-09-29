import React, { useState } from "react"

const Checkbox = ({ label, value, checked, onChange }) => {
  return (
    <>
      <label>
        {label}
        <input
          type="checkbox"
          name={label}
          value={value}
          checked={checked}
          onChange={e => {
            onChange(e)
          }}
        />
      </label>
    </>
  )
}

Checkbox.defaultProps = {
  checked: true,
}

export default Checkbox
