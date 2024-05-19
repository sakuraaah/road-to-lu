import { useContext } from 'react'

import { ConfigProvider, Card, Col, Row, Statistic, } from 'antd';

import { ThemeContext } from '../contexts/ThemeContext';


const StaticticBlock = ({
  statistics
}) => {
  const { darkMode } = useContext(ThemeContext);

  const colSpan = 24 / statistics.length
  const gap = 40

  const containerBg = darkMode ? '#141414' : '#343642'

  return (
    <ConfigProvider theme={{
      token: {
        colorBgContainer: darkMode ? '#2E2E2E' : '#4A4D5F',
        colorText: 'white',
        colorTextDescription: darkMode ? 'gray' : '#CCC'
      }
    }}>
      <Row className='statistic-block' gutter={[gap, gap]} style={{ padding: gap, backgroundColor: containerBg }}>
        {statistics.map((statistic) => (
          <Col span={24} md={colSpan}>
            <Card bordered={false}>
              <Statistic
                {...statistic}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </ConfigProvider>
  );
}

export default StaticticBlock;