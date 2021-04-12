import React from 'react'
import Layout from "../components/Layout"
import MembershipForm from "../components/content-modules/MembershipForm"
import BreadCrumbs from "../components/page-sections/BreadCrumbs"

const joinexample = () => {
  let links = [
    { url: "/link1", name: "Link1" },
    { url: "/link2", name: "Link2" },
    { url: "/link3", name: "Link3" },
  ]
  return (
    <div>
      <Layout>
        <BreadCrumbs links={links} />
        <MembershipForm />
      </Layout>
    </div>
  )
}

export default joinexample
