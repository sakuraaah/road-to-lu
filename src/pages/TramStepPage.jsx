import DefaultStepPage from "./DefaultStepPage";

import Step2Image from '../assets/7-1.jpg'

import * as constants from '../constants/texts'

const TramStepPage = () => {
  return (
    <DefaultStepPage 
      img={{
        src: Step2Image,
        alt: '7. tramvaja pieturvieta'
      }}
      title='7. tramvajs'
      description={constants.STEP2_TEXT}
    />
  );
}

export default TramStepPage;