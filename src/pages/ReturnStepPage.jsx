import DefaultStepPage from "./DefaultStepPage";

import Step5Image from '../assets/Center-7.jpg'

import * as constants from '../constants/texts'

const ReturnStepPage = () => {
  return (
    <DefaultStepPage 
      img={{
        src: Step5Image,
        alt: '7. tramvaja pieturvieta Aspazijas bulvārī'
      }}
      title='Atpakaļ uz tramvaju'
      description={constants.STEP5_TEXT}
    />
  );
}

export default ReturnStepPage;