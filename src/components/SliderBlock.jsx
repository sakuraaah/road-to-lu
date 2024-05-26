import React from 'react'

import { ConfigProvider, Carousel, Col, Row, Space, Typography } from 'antd';

import Image from './Image'

const SliderBlock = ({
  id = undefined,
  title = 'Maršruts',
  items
}) => {
  const { Title, Paragraph } = Typography;

  const carouselRef = React.createRef();

  const gap = 32

  return (
    <div id={id} className='container' style={{ paddingTop: 16, paddingBottom: 48 }}>
      <Title level={3}>{title}</Title>
      <Row gutter={[gap, gap]}>
        <Col span={24} lg={16}>
          <div className="full-mob-width">
            <Carousel 
              arrows 
              infinite
              beforeChange={(c, n) => carouselRef.current.goTo(n)}
            >
              {items.map((item, key) => (
                <div key={key} className='relative'>
                  <ConfigProvider theme={{
                    token: {
                      colorText: 'white',
                    }
                  }}>
                    <Title 
                      level={2}
                      className='absolute'
                      style={{ 
                        zIndex: 1,
                        right: 45,
                        bottom: 15
                      }}
                    >
                      {key+1}. {item?.title}
                    </Title>
                  </ConfigProvider>
                  <Image 
                    addOverlay 
                    overlayMode='darker'
                    style={{ aspectRatio: '4/3' }}
                    {...item.img}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </Col>
        <Col span={24} md={8}>
          <Carousel 
            ref={carouselRef} 
            dots={false} 
            effect={'fade'}
          >
            {items.map((item, key) => (
              <Space>
                <Paragraph key={key}>{item?.description}</Paragraph>
                <a href={item?.url}>Uzzināt vairāk</a>
              </Space>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export default SliderBlock;