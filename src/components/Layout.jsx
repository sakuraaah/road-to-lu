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
  UserOutlined,
} from '@ant-design/icons';

import { ThemeContext } from '../contexts/ThemeContext';

const Layout = ({children}) => {
  const { Header, Content, Footer } = AntdLayout;
  const { darkMode, updateDarkMode } = useContext(ThemeContext);

  const menuItems = [
    {
      key: 1,
      icon: <HomeOutlined />,
      label: 'Home'
    },
    {
      key: 2,
      icon: <UserOutlined />,
      label: 'TODO'
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
      colorPrimary: '#A020F0',
      colorLink: '#A020F0'
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
          RoadToLU ©{new Date().getFullYear()} Created by <i>"nt"</i> for Web Design
        </Footer>
      </AntdLayout>
    </ConfigProvider>
  );
}

export default Layout;