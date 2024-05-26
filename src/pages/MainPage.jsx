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
      <MapBlock 
        id='map'
        text={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada bibendum arcu vitae elementum. Est velit egestas dui id ornare arcu.',
          'Neque vitae tempus quam pellentesque nec nam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Tortor condimentum lacinia quis vel eros donec. Turpis massa tincidunt dui ut ornare lectus sit amet. Purus sit amet luctus venenatis lectus.'
        ]}
        img={{
          src: 'asdasd',
          alt: 'Latvijas Universitāte'
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
        text={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est ultricies integer. Id faucibus nisl tincidunt eget nullam non nisi est. Velit scelerisque in dictum non consectetur. Cras ornare arcu dui vivamus. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Vitae semper quis lectus nulla at volutpat diam. Placerat duis ultricies lacus sed. Nec ullamcorper sit amet risus nullam. Ut aliquam purus sit amet luctus venenatis lectus magna.',
          'Urna porttitor rhoncus dolor purus non. Sed vulputate odio ut enim blandit volutpat. Dapibus ultrices in iaculis nunc. Donec ultrices tincidunt arcu non sodales neque. Ut sem nulla pharetra diam. Quis lectus nulla at volutpat diam. In ante metus dictum at tempor. Sit amet nisl purus in. Justo donec enim diam vulputate ut pharetra sit amet. Cras fermentum odio eu feugiat pretium nibh. Scelerisque viverra mauris in aliquam sem. Nulla malesuada pellentesque elit eget. Nascetur ridiculus mus mauris vitae ultricies. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ante in nibh mauris cursus mattis molestie.'
        ]}
      />
    </div>
  );
}

export default MainPage;