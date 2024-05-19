import TitleBlock from '../components/TitleBlock'
import StaticticBlock from '../components/StaticticBlock'

const MainPage = () => {
  return (
    <div className='mainPage'>
      <TitleBlock
        text={{
          title: 'Mans ceļš uz Latvijas Universitāti',
          description: 'TODO'
        }}
        img={{
          src: 'asdasd',
          alt: 'Latvijas Universitāte'
        }}
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
            title: 'Maršrūtu skaits',
            value: 5
          }
        ]}
      />
    </div>
  );
}

export default MainPage;