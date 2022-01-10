import styled from "styled-components";

export const CarsoulContainer = styled.div`
  margin-top: 64px;
  margin-bottom: ${(props) => (props.mode !== "passive")? `55px` : null};;
  text-align: center;

  .ant-carousel .slick-dots li button {
    width: 7px;
    border-radius: 50%;
    font-size: 5px;
    background-color: #3f6b51;
    padding: 5px;
    border: 2px solid #3f6b51 ;
    /* outline: red solid 2px; */
  }

  .ant-carousel .slick-dots-bottom{
    bottom: -23px;
    margin-bottom: 0;
  }
`;
