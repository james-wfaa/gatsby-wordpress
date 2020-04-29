import React, { Component }  from "react"
import styles from '../css-modules/block.module.css'

console.log(styles)
export const JamesCard = ({ className, heading }) => {

    const classes = `${styles.block} ${className}`
    return (
        <div className={ classes }>
            <h2 className={styles.heading}>{heading}</h2>
        </div>
    )
}


export default JamesCard