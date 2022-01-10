import styled from "styled-components";

export const CardsContainer = styled.div`
    padding: 0 16px;
    width: 375px;

    .section-title{
        font-weight: 600;
        font-size: 16px;
        color: ${(props) => props.textColor || props.theme.colors.NavyBlack};
    }
    .view-all{
        cursor: pointer;
        color: ${(props) => props.theme.customColors.lightBlue1};
        font-size: 12px;
        font-weight: 400;
    }
    
`;

export const CardSlider = styled.section`
    margin-top: 8px;

    .card-title{
        color: ${(props) => props.theme.colors.Gray7};
        font-size: 12px;
        font-weight: 600;
    }

    .active-price{
        color: ${(props) => props.theme.customColors.dark};
        font-weight: 700;
    }

    .old-price{
        color: ${(props) => props.theme.colors.Gray6};
        font-size: 12px;
        font-weight: 400;
        text-decoration: line-through;
    }

    .heart-icon{
        font-size: 17px;
        color: #163663;
        cursor: pointer;
    }

    .btn-1{
        width: 137px;
        font-size: 12px;
        color: ${(props) => props.theme.customColors.lightBlue1};
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.customColors.lightBlue1};
    }
`;

export const CustomCardSlider = styled.section`
    margin-top: 8px;

    .card-title{
        font-size: 12px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.Gray7};
    }

    .price{
        font-weight: 700;
        color: ${(props) => props.textColor};
    }

    .ant-card-cover{
        background-color: #E5F0EA;
        border-radius: 5px;
    }

    .heart-icon{
        position: absolute;
        width: 17px;
        bottom: 110px;
        right: -7px;
        z-index: 99;
    }

    .btn-1{
        width: 137px;
        font-size: 12px;
        font-weight: 500;
        color: ${(props) => props.theme.customColors.white};
        background-color: ${(props) => props.textColor};
        border-radius: 4px;
    }

  /* .slick-slide {
    margin: 0 27px;
  } 
   .slick-list {
    margin: 0 -27px;
  } */
`