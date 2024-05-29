import DefaultStepPage from "./DefaultStepPage";

import Step3Image from '../assets/Center-1.jpg'

import * as constants from '../constants/texts'

const CenterStepPage = () => {
  return (
    <DefaultStepPage 
      img={{
        src: Step3Image,
        alt: 'Aspazijas bulvāris'
      }}
      title='Centrs'
      description={constants.STEP3_TEXT}
    />
  );
}

export default CenterStepPage;