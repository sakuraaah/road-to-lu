import React, { useContext } from 'react';

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
      label: <a href='/'>Mājaslapa</a>
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
            { key: 4, label: <a href='/start'>Sākums</a> },
            { key: 5, label: <a href='/tram'>Tramvajs</a> },
            { key: 6, label: <a href='/center'>Centrs</a> },
            { key: 7, label: <a href='/lu'>LU</a> }
          ],
        },
        {
          type: 'group',
          label: 'Ceļš atpakaļ',
          children: [
            { key: 8, label: <a href='/return'>Tramvajs</a> },
            { key: 9, label: <a href='/home'>Mājās</a> }
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