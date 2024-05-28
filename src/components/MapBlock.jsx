import { useContext } from 'react'

import { Col, Row, Typography } from 'antd';

import Image from './Image'
import { ThemeContext } from '../contexts/ThemeContext';

const MapBlock = ({
  id = undefined,
  title = 'Uz kartes',
  img,
  text
}) => {
  const { darkMode } = useContext(ThemeContext);
  const { Title, Paragraph } = Typography;

  const gap = 32

  const containerBg = darkMode ? '#2E2E2E' : '#F5F5F5'

  return (
    <div id={id} style={{ backgroundColor: containerBg, paddingTop: 48, paddingBottom: 96 }}>
      <div className='container'>
        <Row gutter={[gap, gap]}>
          <Col span={24} lg={8}>
            <Title level={3}>{title}</Title>
            {Array.isArray(text) ? text.map((p) => <Paragraph>{p}</Paragraph>) : <Paragraph>{text}</Paragraph>}
          </Col>
          <Col span={24} md={16}>
            <Image 
              {...img}
              style={{ aspectRatio: '4/3' }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MapBlock;