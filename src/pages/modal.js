import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"
import PageSection from "../components/page-sections/GenericPageSection"
import GenericModal from '../components/content-modules/GenericModal'
import CommunicationForm from '../components/content-blocks/CommunicationForm'

const Modal = () => {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    let currentshow = show;
    setShow(!currentshow)
  }

  const ShowButton = styled.button`
    width: 100px;
  `

  return (
    <Layout>
      <PageSection style={{position: `relative`}}>
        {show ?
        <GenericModal
          data={<CommunicationForm />}
          opacity={0.58}
          closeCallback={() => handleModal()}/>
        : null}
        <ShowButton onClick={() => handleModal()}>Open Modal</ShowButton>
      </PageSection>
    </Layout>
  )
}

export default Modal

