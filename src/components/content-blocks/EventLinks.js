import styled from 'styled-components'
import { mixins } from '../css-variables'


const StyledEventLinks = styled.div`
.tribe-block {
    width: 200px;
    &__btn--link {
        display: flex;
        align-items: baseline;
    }
    a {
        ${mixins.a}
    }
    img {
        width: 60px !important;
        float: left;
        padding-right: 20px;
    }
}
`
export default StyledEventLinks