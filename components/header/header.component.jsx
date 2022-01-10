import { Col, Image, Row } from "antd";
import React from "react";
import { ComponentHeader } from "./header.styles";

const HeaderComponent = ({headerImages}) => {
  return (
    <ComponentHeader>
      <Row justify="space-between" align="middle">
        {headerImages.map((photo) => (
          <Col key={photo.alt} className="header-nav">
            <Image preview={false} src={photo.src} alt={photo.alt} />
          </Col>
        ))}
      </Row>
    </ComponentHeader>
  );
};

export default HeaderComponent;
