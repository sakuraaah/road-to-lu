import { Col, Row, Space, Typography } from 'antd'
import Image from './Image'

const TitleBlock = ({
  text,
  img: imgProps
}) => {
  const { Title, Paragraph } = Typography;

  const textBlockStyle = {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }

  return (
    <Row>
      <Col span={24} md={12} style={{ padding: 16, aspectRatio: '1/1' }}>
        <Space 
          align='center'
          direction='vertical'
          style={textBlockStyle}
        >
          <Title level={2}>{text?.title}</Title>
          <Paragraph>{text?.description}</Paragraph>
        </Space>
      </Col>
      <Col span={24} md={12} style={{ aspectRatio: '1/1' }}>
        <Image {...imgProps}/>
      </Col>
    </Row>
  );
}

export default TitleBlock;