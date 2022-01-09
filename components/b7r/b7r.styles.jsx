import styled from "styled-components";

export const BhrMobileContainer = styled.div`
`

export const ComponentHeader = styled.div`
    height: 56px;
    width: 375px;
    position: fixed;
    background-color: ${(props) => props.theme.customColors.white};
    box-shadow: 0px 4px 2px rgba(51, 51, 51, 0.08);
    z-index: 88;

    .header-nav{
        margin: 10px 16px;
    }
`;

export const ComponentFooter = styled.footer`
    height: 64px;
    width: 375px;
    margin-top: 12px;
    padding: 0 15px ;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.04);
    z-index: 88;

    .tab-name{
        line-height: 11px;
        color: ${(props) => props.theme.colors.Gray1};
        font-size: 10px;
    }
`

export const CarsoulContainer = styled.div`
    margin-top: 72px;
    text-align: center;
`