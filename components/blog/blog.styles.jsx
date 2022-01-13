import styled from "styled-components";

export const BlogContainer = styled.div`
    padding: 0 16px;
    width: 375px;

    .section-title{
        font-weight: 600;
        font-size: 16px;
        color: ${(props) => props.textColor || props.theme.colors.NavyBlack};
    }

    .blog-date{
        font-size: 10px;
        font-weight: 400;
        color: ${(props) => props.theme.colors.Gray1};
    }

    .blog-description{
        font-size: 12px;
        font-weight: 600;
        color: #333333;
        
    }

    .blog-aurthor{
        font-size: 8px;
        color: ${(props) => props.theme.customColors.dark};
    }

    /* .slick-slide{
        margin: 0 8px;
    }
    .slick-list {
        max-height: 271px;
    } */

`;