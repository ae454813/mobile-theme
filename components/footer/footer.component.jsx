import { Col, Image, Row, Space, Typography } from 'antd'
import React from 'react'
import { ComponentFooter } from './footer.styles'

const { Text } = Typography;


const FooterComponent = ({footerImages ,textColor}) => {
    return (
        <ComponentFooter textColor={textColor}>
            <Row justify="space-between"  align="middle">
          {footerImages.map((target) => (
              <div key={target.id} className='footer-grid'>
                <span style={{margin: "auto"}}><Image preview={false} width={24} src={target.icon} alt={target.name} /></span>
                <Text className="tab-name">{target.name}</Text>
              </div>
          ))}
        </Row>
        </ComponentFooter>
    )
}

export default FooterComponent
