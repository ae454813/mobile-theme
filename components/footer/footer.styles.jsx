import styled from "styled-components";


export const ComponentFooter = styled.footer`
    height: 64px;
    width: 375px;
    margin-top: 12px;
    padding: 0 15px ;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.04);
    z-index: 88;
    background-color: ${(props) => props.textColor || null};
    border-radius: ${(props) => props.textColor ? `16px 16px 0px 0px` :null};

    .tab-name{
        line-height: 11px;
        color: ${(props) => props.theme.colors.Gray1};
        font-size: 10px;
    }
`