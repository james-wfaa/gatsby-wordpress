import React from "react"
import Layout from "../../components/Layout"
import PageSection from '../../components/page-sections/GenericPageSection'

export default () => {
    return (
<Layout>
    <PageSection pad>
        <h1>Header Nav Menu</h1>

        <p>The header nav menu appears at the top of all pages</p>
        
        <h3>Things that are working:</h3>
        <ul>
            <li>Red bar menu turns grey at mobile</li>
            <li>Supplemental text nav ("Lorem, Ipsum") hidden at mobile, shown at larger sizes</li>
            <li>Hamburger menu open/close toggle (including with keyboard)</li>
            <li>Dropdown "Large Main" menu item styles (fonts, colors, padding, hover/active interactions)</li>
            <li>Dropdown "Utility" menu item styles (fonts, colors, padding, hover/active interactions)</li>
            <li>Dropdown Social Network menu item styles (icons, colors, padding, hover/active interactions)</li>
        </ul>
        <h3>Things <em>sort of / partially</em> working</h3>
        <ul>
            <li>Secondary menu at mobile size (see notes)</li>
        </ul>
        <h3>Things not working yet:</h3>
        <ul>
            <li>Search (does nothing)</li>
            <li>Logo zoom</li>
            <li>Background SVG image on dropdown menu</li>  
        </ul>

        <h2>Testing the dropdown menu at mobile:</h2>
        <p>In order to test the dropdown menu properly at mobie size, you will need to first open Chrome Developer Tools (Command + Option + I on Mac).
            Then from inside Developer Tools you will need to turn on responsive mode (Command + Shift + M). This will cause your browser to emulate a mobile 
            device - among other things, there will be no "hover" state.
        </p>
        <p>Once you've got your browser set up properly, you can click to open the main dropdown menu and then click on Any of the main nav items (with the red triangles) 
            to open the secondary nav menu.  </p>
            <p><strong>Once you've opened the secondary nav, you are at a dead-end. The controls to close secondary nav and revert back to the primary nav are not working yet. 
                </strong>. (This dead-end is so severe that you will need to reload the page or go to a new page in order to get out of it. You may actually need to get a new computer. I make no guarantees.)
                </p>


        
    </PageSection>
</Layout>
    )
}         