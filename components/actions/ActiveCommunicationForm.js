import React, { Component } from 'react'
import _ from 'lodash';

const handleFormClick = () => {
    if (typeof window !== 'undefined') {
        const hiddenFields = document.querySelector('#hiddenfields')
        const fn = document.querySelector('#firstname')
    }
}

class ActiveCommunicationForm extends Component {
    componentDidMount() {
        window.addEventListener('scroll', _.throttle(handleScroll, 500))
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', _.throttle(handleScroll, 500))
      }

}