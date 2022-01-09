import { Card, Carousel, Col, Row, Space, Typography } from "antd";
import React from "react";
import { BlogContainer } from "./blog.styles";

const { Text } = Typography;

const BlogCardsComponent = ({ blogData }) => {
  return (
    <BlogContainer>
      <Row justify="space-between" style={{marginBottom: "8px"}}>
        <Col>
          <Text className="section-title">Blog</Text>
        </Col>
      </Row>
      <Carousel dots={false} slidesToShow={2.01} centerPadding="9px">
        {blogData.map((blg) => (
          <Space key={blg.id} size={9}>
            <Card
              bodyStyle={{padding: "8px 0 0 0"}}
              style={{ width: 167 }}
              cover={
                <img
                  alt={blg.title}
                  src={blg.imgUrl}
                />
              }
            >
              <Space direction="vertical" size={0}>
                <Text className="blog-date" >{blg.date}</Text>
                <Text className="blog-description">
                  {blg.title}
                </Text>
                <Text className="blog-aurthor" >
                  {blg.aurthor}
                </Text>
                
              </Space>
            </Card>
          </Space>
        ))}
      </Carousel>
    </BlogContainer>
  );
};

export default BlogCardsComponent;
