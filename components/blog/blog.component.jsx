import { Card, Carousel, Col, Image, Row, Space, Typography } from "antd";
import React from "react";
import { BlogContainer } from "./blog.styles";

const { Text } = Typography;

const BlogCardsComponent = ({ blogData, textColor }) => {
  return (
    <BlogContainer textColor={textColor}>
      <Row justify="space-between" style={{marginBottom: "8px"}} >
        <Col>
          <Text className="section-title">Blog</Text>
        </Col>
      </Row>
      <Carousel dots={false} slidesToShow={2} centerPadding="9px">
        {blogData.map((blg) => (
          <Space key={blg.id} size={9}>
            <Card
              bodyStyle={{padding: "8px 0 0 0", textAlign: "start"}}
              style={{ width: 167 ,border: "none" }}
              cover={
                <Image
                  preview={false}
                  alt={blg.title}
                  src={blg.imgUrl}
                />
              }
            >
              <Space direction="vertical" size={0} style={blogData? {marginLeft: "8px"} :null ,{width: "100%"} }>
                <Text className="blog-date" >{blg.date}</Text>
                <Row justify="space-between">
                <Text className="blog-description">
                  {blg.title} 
                </Text>
                {blg.arrow}
                </Row>
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
