import {
  AreaChartOutlined,
  StockOutlined,
  CheckSquareOutlined
} from '@ant-design/icons';

import HeroBlock from '../components/HeroBlock'
import NavBlock from '../components/NavBlock'
import SliderBlock from '../components/SliderBlock'
import StaticticBlock from '../components/StaticticBlock'

import HeroBlockImage from '../assets/LU-2.jpg'

import StartImage from '../assets/Start-1.jpg'

const MainPage = () => {
  return (
    <div id='main-page'>
      <HeroBlock
        text={{
          title: 'Mans ceļš uz Latvijas Universitāti',
          description: 'TODO'
        }}
        img={{
          src: HeroBlockImage,
          alt: 'Latvijas Universitāte',
          addOverlay: true
        }}
      />
      <NavBlock 
        navItems={[
          {
            title: 'Karte',
            icon: <AreaChartOutlined style={{ fontSize: 64, color: 'white' }}/>,
            url: '#map'
          },
          {
            title: 'Statistika',
            icon: <StockOutlined style={{ fontSize: 64, color: 'white' }}/>,
            url: '#stats'
          },
          {
            title: 'Secinājumi',
            icon: <CheckSquareOutlined style={{ fontSize: 64, color: 'white' }}/>,
            url: '#summary'
          }
        ]}
      />
      <SliderBlock 
        items={[
          {
            title: 'Izeju no mājas',
            description: 'gfdgdfgdfgdgfdfggd1',
            img: {
              src: StartImage,
              alt: 'Pietura pie manas mājas'
            },
            url: '/home'
          },
          {
            title: '15. autobuss',
            description: 'kfjknjfnsdfusgd',
            img: {
              src: 'asdasd',
              alt: 'Latvijas Universitāte'
            },
            url: '/bus'
          },
          {
            title: '7. tramvajs',
            description: 'fsdfsdf',
            img: {
              src: 'asdasd',
              alt: 'Latvijas Universitāte'
            },
            url: '/tram'
          }
        ]}
      />
      <StaticticBlock 
        statistics={[
          {
            title: 'Vidējais laiks (min)',
            value: 60
          },
          {
            title: 'Vidējais maršruta garums (km)',
            value: 8.7
          },
          {
            title: 'Maršrutu skaits',
            value: 5
          }
        ]}
      />
    </div>
  );
}

export default MainPage;