import DefaultStepPage from "./DefaultStepPage";

import Step6Image from '../assets/Home-1.jpg'

import * as constants from '../constants/texts'

const HomeStepPage = () => {
  return (
    <DefaultStepPage 
      img={{
        src: Step6Image,
        alt: 'Iela pie manas mājās'
      }}
      title='Ceļš mājās'
      description={constants.STEP6_TEXT}
    />
  );
}

export default HomeStepPage;