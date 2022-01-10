import styled from "styled-components";

export const CategorySlider = styled.section`
    margin-top: 12px;


    .cat-item{
        cursor: pointer;
    }

    .cat-title{
        font-size: 12px;
        font-weight: 400;
        color: ${(props) => props.theme.borderColors.black3};
    }

    .circle-img{
        border-radius: 50%;
    }
`