
import styled from 'styled-components'
import { breakpoints, fonts, sizes, colors, mixins } from '../css-variables'

const StyledCommunicationForm = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${sizes.s32};
  max-width: 528px;
  font-family: ${fonts.eaves};
  font-size: ${sizes.s36};
  color: ${colors.titleColor};
  font-weight: bold;
  font-style: italic;
  text-align: center;
  @media screen and ${breakpoints.tabletS} {
  }
  @media screen and ${breakpoints.laptopS} {
    max-width: 712px;
    font-size: ${sizes.s42};
  }
  label {
    display: block;
    margin-bottom: ${sizes.s24};
    @media screen and ${breakpoints.tabletS} {
      margin-bottom: ${sizes.s32};
    }
  }

  input {
    display: block;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${colors.bgRed};
    text-align: center;
    font-size: ${sizes.s26};
    padding-bottom: ${sizes.s8};
    margin-bottom: ${sizes.s32};
    @media screen and ${breakpoints.laptopS} {
      font-size: ${sizes.s36};
    }
  }
  input[type="submit"] {
    ${mixins.buttons};
    margin-top: ${sizes.s58};
    &:first-of-type {
      margin-top: ${sizes.s58};
    }
    &:disabled {
      color: grey;
    }
  }

  fieldset {
    border: none;
    &.hiddenfields {
      animation: fadeIn ease 1.5s;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }
`
export default StyledCommunicationForm

