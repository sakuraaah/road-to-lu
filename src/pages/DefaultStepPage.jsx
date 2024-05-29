import TextBlock from '../components/TextBlock'
import Image from '../components/Image'

const DefaultStepPage = ({
  img,
  title,
  description
}) => {
  return (
    <div id='step-page' className='container' style={{ margin: '40px auto' }}>
      <div className='full-mob-width'>
        <Image
          src={img.src}
          alt={img.alt}
          height={450}
          preview={true}
        />
      </div>
      <TextBlock 
        title={title}
        text={description}
      />
    </div>
  );
}

export default DefaultStepPage;