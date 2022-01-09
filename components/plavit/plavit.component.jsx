import { Carousel, Col, Image, Row } from 'antd';
import React from 'react'
import { CarsoulContainer, ComponentHeader } from '../b7r/b7r.styles';
import CategoryComponent from '../category/category.component';
import MobileThemeComponent from '../mobile-theme/mobile.theme'
import { PlavitContainer } from './plavit.styles';

const headerImages = [
    {
      alt: "menu",
      src: "/static/align-left-plavit.svg",
    },
    {
      alt: "logo",
      src: "/static/plavit-logo.svg",
    },
    {
      alt: "bag",
      src: "/static/car-store.svg",
    },
  ];

const PlavitComponent = () => {
    return (
        <MobileThemeComponent><ComponentBody/></MobileThemeComponent>
    )
}

export default PlavitComponent;

const ComponentBody = () => {
    return (
        <PlavitContainer>
            <ComponentHeader>
        <Row justify="space-between" align="middle">
          {headerImages.map((photo) => (
            <Col key={photo.alt} className="header-nav">
              <Image preview={false} src={photo.src} alt={photo.alt} />
            </Col>
          ))}
        </Row>
      </ComponentHeader>
      <Row gutter={[0,24]}>
        <Col>
        <CarsoulContainer>
        <Carousel autoplay>
        <Image preview={false} src="/static/carsoul1.svg" alt="man"/>
        <Image preview={false} src="/static/carsoul.svg" alt="man"/>
        </Carousel>
        </CarsoulContainer>
        </Col>
        {/* <Col><CategoryComponent categoryData={categoryData} shape="circle" /></Col> */}
      </Row>
        </PlavitContainer>
    );
};
