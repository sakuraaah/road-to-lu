import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { 
  ConfigProvider, 
  Layout as AntdLayout, 
  Menu,
  Switch,
  theme 
} from 'antd';
import {
  HomeOutlined,
  MoonOutlined,
  SunOutlined,
  SyncOutlined,
} from '@ant-design/icons';

import { ThemeContext } from '../contexts/ThemeContext';

const Layout = ({children}) => {
  const { Header, Content, Footer } = AntdLayout;
  const { darkMode, updateDarkMode } = useContext(ThemeContext);

  const menuItems = [
    {
      key: 1,
      icon: <HomeOutlined />,
      label: <Link to='/'>Mājaslapa</Link>
    },
    {
      key: 2,
      icon: <SyncOutlined />,
      label: 'Soļi',
      children: [
        {
          type: 'group',
          label: 'Ceļš uz LU',
          children: [
            { key: 4, label: <Link to='/start'>Sākums</Link> },
            { key: 5, label: <Link to='/tram'>Tramvajs</Link> },
            { key: 6, label: <Link to='/center'>Centrs</Link> },
            { key: 7, label: <Link to='/lu'>LU</Link> }
          ],
        },
        {
          type: 'group',
          label: 'Ceļš atpakaļ',
          children: [
            { key: 8, label: <Link to='/return'>Tramvajs</Link> },
            { key: 9, label: <Link to='/home'>Mājās</Link> }
          ],
        }
      ],  
    },
    {
      key: 3,
      label: (
        <Switch 
          checked={darkMode} 
          onChange={updateDarkMode} 
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
        />
      )
    }
  ];

  const defaultThemeConfig = {
    components: {
      Statistic: {
        contentFontSize: 48,
        titleFontSize: 16
      }
    },
    cssVar: true
  }

  const lightThemeConfig = {
    ...defaultThemeConfig,
    algorithm: theme.defaultAlgorithm,
    token: {
      colorTextBase: '#343642'
    },
    components: {
      ...defaultThemeConfig.components,
      Layout: {
        bodyBg: 'white',
      }
    }
  }

  const darkThemeConfig = {
    ...defaultThemeConfig,
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: '#ff4d4f',
      colorLink: '#ff4d4f'
    },
    components: {
      ...defaultThemeConfig.components,
      Layout: {
        footerBg: '#141414'
      }
    }
  }

  return (
    <ConfigProvider theme={darkMode? darkThemeConfig : lightThemeConfig}>
      <AntdLayout style={{ minHeight: '100vh' }}>
        <Header style={{ 
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            padding: 0,
            display: 'flex', 
            alignItems: 'center' 
          }}
        >
          <Menu
            mode="horizontal"
            items={menuItems}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{
            minHeight: 280
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          RoadToLU ©{new Date().getFullYear()} Created by <i>"nt21006"</i> for Web Design
        </Footer>
      </AntdLayout>
    </ConfigProvider>
  );
}

export default Layout;