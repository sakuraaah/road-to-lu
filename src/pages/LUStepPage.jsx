import DefaultStepPage from "./DefaultStepPage";

import Step4Image from '../assets/LU-2.jpg'

import * as constants from '../constants/texts'

const LUStepPage = () => {
  return (
    <DefaultStepPage 
      img={{
        src: Step4Image,
        alt: 'Latvijas Universitāte'
      }}
      title='Latvijas Universitāte'
      description={constants.STEP4_TEXT}
    />
  );
}

export default LUStepPage;