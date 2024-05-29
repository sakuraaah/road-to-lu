import DefaultStepPage from "./DefaultStepPage";

import Step1Image from '../assets/Start-1.jpg'

import * as constants from '../constants/texts'

const StartStepPage = () => {
  return (
    <DefaultStepPage 
      img={{
        src: Step1Image,
        alt: 'Pietura pie manas mājas'
      }}
      title='Izeju no mājas'
      description={constants.STEP1_TEXT}
    />
  );
}

export default StartStepPage;