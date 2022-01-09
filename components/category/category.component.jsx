import { Carousel, Col, Image, Row, Space, Typography } from 'antd'
import React from 'react'
import { CardsContainer } from '../productCards section/productCards.styles';
import {  CategorySlider } from './category.styles'

const { Text } = Typography;

const CategoryComponent = ({ categoryData, shape }) => {
    return (
        <CardsContainer>
            <Row justify='space-between'>
                <Col><Text className='section-title'>Categories</Text></Col>
                <Col><Text className='view-all'>View all</Text></Col>
            </Row>
            <CategorySlider>
            <Carousel slidesToShow={4.1} centerPadding='24px'>
                {categoryData.map( (cat)=> 
                <Space key={cat.id} className='cat-item'>
                    <Image preview={false} width={64} src={cat.imagUrl} alt={cat.title} />
                    <Text> {cat.title.toUpperCase()} </Text>
                </Space>
                )}
            </Carousel>
            </CategorySlider>
        </CardsContainer>
    )
}

export default CategoryComponent
