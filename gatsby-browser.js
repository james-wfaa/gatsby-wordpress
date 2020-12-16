/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"

import { AppProvider } from "./src/context/AppContext"

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)

export const onPreRouteUpdate = () => {
  document.body.scrollTop = 0
}

