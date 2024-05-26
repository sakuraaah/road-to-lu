import { useContext } from 'react'

import { ConfigProvider, Flex, Col, Row, Typography } from 'antd';

import { ThemeContext } from '../contexts/ThemeContext';


const NavBlock = ({
  id = undefined,
  title = 'Sadaļas',
  navItems
}) => {
  const { Title, Paragraph } = Typography;
  const { darkMode } = useContext(ThemeContext);

  const colSpan = 24 / navItems.length
  const gap = 2

  const containerBg = darkMode ? '#141414' : '#343642'
  const borderbg = darkMode ? '#2E2E2E' : '#4A4D5F'

  const NavItem = (item) => (
    <div className='nav-item' style={{ backgroundColor: containerBg }}>
      <Flex 
        vertical
        justify='center'
        align='center'
        gap='middle'
        style={{
          maxWidth: 200,
          margin: '0 auto',
          aspectRatio: '1/1',
        }}
      >
        {item?.icon}
        <Paragraph strong style={{ fontSize: 20 }}><a className='no-style underline' href={item?.url ?? '/'}>{item?.title}</a></Paragraph>
      </Flex>
    </div>
  )

  return (
    <div id={id} style={{ padding: 24, backgroundColor: containerBg }}>
      <ConfigProvider theme={{
        token: {
          colorText: 'white',
          colorTextBase: 'white',
          colorBorder: 'red'
        }
      }}>
        <Title level={3}>{title}</Title>
        <Row gutter={[gap, gap]} style={{ backgroundColor: borderbg }}>
          {navItems.map((item, key) => (
            <Col key={key} span={24} md={colSpan}>
              <NavItem {...item} />
            </Col>
          ))}
        </Row>
      </ConfigProvider>
    </div>
  );
}

export default NavBlock;