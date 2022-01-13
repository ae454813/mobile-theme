import styled from "styled-components";

export const CategorySlider = styled.section`
    margin-top: 12px;
    padding-left: 16px;

    .cat-item{
        cursor: pointer;
        margin: 0;
        width: 64px;
    }
    .slick-slide{
        margin: 0 12px;
    }
    .slick-list {
        height: 88px;
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