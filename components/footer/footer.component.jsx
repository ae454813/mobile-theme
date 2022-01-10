import { Col, Image, Row, Space, Typography } from 'antd'
import React from 'react'
import { ComponentFooter } from './footer.styles'

const { Text } = Typography;


const FooterComponent = ({footerImages ,textColor}) => {
    return (
        <ComponentFooter textColor={textColor}>
            <Row justify="space-between" align="middle">
          {footerImages.map((target) => (
            <Col key={target.id} style={{marginTop: "12px"}}>
              <Space direction="vertical" size={0}>
                <Image preview={false} src={target.icon} alt={target.name} />
                <Text className="tab-name">{target.name}</Text>
              </Space>
            </Col>
          ))}
        </Row>
        </ComponentFooter>
    )
}

export default FooterComponent
