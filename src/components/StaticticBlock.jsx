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
    <div id='statistics' style={{ backgroundColor: containerBg }}>
      <ConfigProvider theme={{
        token: {
          colorBgContainer: darkMode ? '#2E2E2E' : '#4A4D5F',
          colorText: 'white',
          colorTextDescription: darkMode ? 'gray' : '#CCC'
        }
      }}>
        <Row gutter={[gap, gap]} style={{ padding: gap, margin: 0 }}>
          {statistics.map((statistic, key) => (
            <Col key={key} span={24} md={colSpan}>
              <Card bordered={false}>
                <Statistic
                  {...statistic}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </ConfigProvider>
    </div>
  );
}

export default StaticticBlock;