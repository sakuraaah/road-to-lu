import {
  AreaChartOutlined,
  StockOutlined,
  CheckSquareOutlined
} from '@ant-design/icons';

import HeroBlock from '../components/HeroBlock'
import NavBlock from '../components/NavBlock'
import SliderBlock from '../components/SliderBlock'
import MapBlock from '../components/MapBlock'
import StaticticBlock from '../components/StaticticBlock'
import TextBlock from '../components/TextBlock'

import * as constants from '../constants/texts'

import HeroBlockImage from '../assets/LU-2.jpg'

import Step1Image from '../assets/Start-1.jpg'
import Step2Image from '../assets/7-1.jpg'
import Step3Image from '../assets/Center-1.jpg'
import Step5Image from '../assets/Center-7.jpg'
import Step6Image from '../assets/Home-1.jpg'

import MapImage from '../assets/Map.png'

const MainPage = () => {
  return (
    <div id='main-page'>
      <HeroBlock
        text={{
          title: 'Mans ceļš uz Latvijas Universitāti',
          description: [
            'Mans maršruts no dzīvesvietas līdz LU',
            'Autors: Ņikita Trofimovs'
          ]
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
            description: constants.STEP1_TEXT,
            img: {
              src: Step1Image,
              alt: 'Pietura pie manas mājas'
            },
            url: '/start'
          },
          {
            title: '7. tramvajs',
            description: constants.STEP2_TEXT,
            img: {
              src: Step2Image,
              alt: '7. tramvaja pieturvieta'
            },
            url: '/tram'
          },
          {
            title: 'Centrs',
            description: constants.STEP3_TEXT,
            img: {
              src: Step3Image,
              alt: 'Aspazijas bulvāris'
            },
            url: '/center'
          },
          {
            title: 'LU',
            description: constants.STEP4_TEXT,
            img: {
              src: HeroBlockImage,
              alt: 'Latvijas Universitāte'
            },
            url: '/lu'
          },
          {
            title: 'Atpakaļ uz tramvaju',
            description: constants.STEP5_TEXT,
            img: {
              src: Step5Image,
              alt: '7. tramvaja pieturvieta Aspazijas bulvārī'
            },
            url: '/return'
          },
          {
            title: 'Mājās',
            description: constants.STEP6_TEXT,
            img: {
              src: Step6Image,
              alt: 'Iela pie manas mājās'
            },
            url: '/home'
          }
        ]}
      />
      <MapBlock 
        id='map'
        text={constants.MAP_TEXT}
        img={{
          src: MapImage,
          alt: 'Ceļš līdz Latvijas Universitātei uz kartes'
        }}
      />
      <StaticticBlock 
        id='stats'
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
      <TextBlock 
        id='summary'
        title='Secinājumi'
        text={constants.SUMMARY_TEXT}
      />
    </div>
  );
}

export default MainPage;