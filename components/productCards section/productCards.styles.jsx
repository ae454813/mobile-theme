import styled from "styled-components";

export const CardsContainer = styled.div`
    padding: 0 16px;
    width: 375px;

    .section-title{
        font-weight: 600;
        font-size: 16px;
        color: ${(props) => props.theme.colors.NavyBlack};
    }
    .view-all{
        cursor: pointer;
        color: ${(props) => props.theme.customColors.lightBlue1};
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
        cursor: pointer;
    }

    .btn-1{
        width: 137px;
        font-size: 12px;
        color: ${(props) => props.theme.customColors.lightBlue1};
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.customColors.lightBlue1};
    }
`