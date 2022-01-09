import { HeartOutlined } from "@ant-design/icons/lib/icons";
import {
  Button,
  Card,
  Carousel,
  Col,
  Image,
  Rate,
  Row,
  Space,
  Typography,
} from "antd";
import React from "react";
import { CardsContainer, CardSlider } from "./productCards.styles";

const { Text } = Typography;
const { Meta } = Card;

const ProductsComponent = ({ cardsData }) => {
  return (
    <CardsContainer>
      <Row justify="space-between">
        <Col>
          <Text className="section-title">New</Text>
        </Col>
        <Col>
          <Text className="view-all">View all</Text>
        </Col>
      </Row>
      <CardSlider>
        <Carousel dots={false} slidesToShow={2.01} centerPadding="12px">
          {cardsData.map((card) => (
              <Space key={card.id} size={12}>
            <Card
              style={{
                width: "163px",
              }}
              bodyStyle={{
                padding: "12px",
              }}
            >
              <Image
                preview={false}
                src={card.imgUrl}
                alt={card.title}
                width={136}
                height={136}
              />
              <Row justify="space-between" align="middle">
                <Rate allowHalf defaultValue={5} style={{ fontSize: "12px" }} />
                <HeartOutlined className="heart-icon" />
              </Row>
              <Space direction="vertical" size={5}>
                <Text className="card-title">{card.title}</Text>
                <Text className="active-price">
                  {card.currency} {card.priceAfter}
                </Text>
                <Text className="old-price">
                  {card.currency} {card.priceBefore}
                </Text>
                <Button type="text" className="btn-1">
                  Add to card
                </Button>
              </Space>
            </Card>
            </Space>
          ))}
        </Carousel>
      </CardSlider>
    </CardsContainer>
  );
};

export default ProductsComponent;
