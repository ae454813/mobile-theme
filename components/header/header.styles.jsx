import styled from "styled-components";

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