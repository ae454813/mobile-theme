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
import { CardsContainer, CustomCardSlider } from "../productCards.styles";

const { Text } = Typography;

const CustomCardsComponent = ({ cardsData, textColor, title, viewAll }) => {
  return (
    <CardsContainer textColor={textColor}>
      <Row justify="space-between">
        <Col>
          <Text className="section-title">{title}</Text>
        </Col>
        <Col>
          <Text className="view-all">{viewAll}</Text>
        </Col>
      </Row>
      <CustomCardSlider textColor={textColor}>
        <Carousel dots={false} slidesToShow={2}>
          {cardsData.map((card) => (
            <Space key={card.id} size={16}>
              <Card
                key={card.id}
                style={{ width: "163px" }}
                bodyStyle={{
                  padding: "16px 10px 20px",
                }}
                cover={
                    <div>
                        <Image
                    preview={false}
                    alt={card.title}
                    src={card.imgUrl}
                    width={136}
                    height={136}
                  />
                  <Image preview={false} className="heart-icon" src="/static/plavit/favourites.svg" />
                    </div>
                }
              >
                <Space direction="vertical" size={6}>
                  <Rate
                    allowHalf
                    defaultValue={5}
                    style={{ fontSize: "12px", color: "#3F6B51" }}
                  />
                  <Text className="card-title">{card.title}</Text>
                  <Text className="price">
                    {card.currency} {card.price}
                  </Text>
                  <Text></Text>
                  <Button type="text" className="btn-1">
                    Add to card
                  </Button>
                </Space>
              </Card>
            </Space>
          ))}
        </Carousel>
      </CustomCardSlider>
    </CardsContainer>
  );
};

export default CustomCardsComponent;
