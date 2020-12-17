import React from "react"
import { AppProvider } from "./src/context/AppContext"
export const wrapRootElement = ({ element }) => (
 <AppProvider>{element}</AppProvider>
)
export const onPreRouteUpdate = () => {
 document.body.scrollTop = 0
}