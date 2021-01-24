import React from 'react'
import Layout from "../components/layout"
import PageSection from "../components/page-sections/PageSection"
import MembershipForm from "../components/content-modules/MembershipForm"

const joinexample = () => {
  return (
    <div>
      <Layout>
        <PageSection heading="Let's Find the Best Membership for You">
          <p style={{fontSize: `26px`, maxWidth: `896px`, margin: `0 auto 58px`}}>Joining for the first time? Or are you a long-time member who wants to make sure you're getting
            the best deal? Either way, answer the following questions to see what's right for you.
          </p>
          <MembershipForm />
        </PageSection>
      </Layout>
    </div>
  )
}

export default joinexample
