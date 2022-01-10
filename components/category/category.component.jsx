import { Carousel, Col, Image, Row, Space, Typography } from 'antd'
import React from 'react'
import { CardsContainer } from '../productCards section/productCards.styles';
import {  CategorySlider } from './category.styles'

const { Text } = Typography;

const CategoryComponent = ({ categoryData, shape, textColor, title, viewAll }) => {
    return (
        <CardsContainer textColor={textColor}>
            <Row justify='space-between'>
                <Col><Text className='section-title'>{title}</Text></Col>
                <Col><Text className='view-all'>{viewAll}</Text></Col>
            </Row>
            <CategorySlider>
            <Carousel slidesToShow={4.01} dots={false} centerPadding='24px'>
                {categoryData.map( (cat)=> 
                <Space key={cat.id} className='cat-item'>
                    <Image preview={false} width={64} src={cat.imagUrl} alt={cat.title} className={(shape == "circle") ? 'circle-img' : null} />
                    <Text className='cat-title'> {cat.title} </Text>
                </Space>
                )}
            </Carousel>
            </CategorySlider>
        </CardsContainer>
    )
}

export default CategoryComponent
