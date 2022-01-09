import { Col, Image, Row, Space, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const mobileSVG = [
  {
    alt: "WLAN",
    src: "/static/CombinedShape.svg",
  },
  {
    alt: "Wi-Fi",
    src: "/static/Wi-Fi.svg",
  },
  {
    alt: "battery",
    src: "/static/Battery.svg",
  },
];

var d = new Date();
var hours = d.getHours();
const { Text } = Typography;

const MobileThemeComponent = ({ children }) => {
  return (
    <MobileThemeContainer>
      <MobileHeader>
        <Row justify="space-between" align="middle" style={{ width: "375px" }}>
          <Col>
            <Text className="cuurent-time">{`${d.getHours()}:${d.getMinutes()}`}</Text>
          </Col>
          <Col>
            {mobileSVG.map((photo) => (
              <Space key={photo.alt} size={5}>
                <Image preview={false} src={photo.src} alt={photo.alt} />{" "}
              </Space>
            ))}
          </Col>
        </Row>
      </MobileHeader>
      <MobileBody>{children}</MobileBody>
    </MobileThemeContainer>
  );
};

export default MobileThemeComponent;

const MobileThemeContainer = styled.div`
  width: 375px;
  min-height: 815px;
  background-color: ${(props) => props.theme.customColors.white};
  margin: auto;
  .cuurent-time {
    margin: 14px 20px 12px;
    font-size: 15px;
    font-weight: 600;
  }
`;

const MobileHeader = styled.div`
  position: fixed;
  height: 44px;
  background-color: ${(props) => props.theme.customColors.white};

  z-index: 99;
`;
const MobileBody = styled.div`
  padding-top: 44px;
`;
