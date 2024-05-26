import { Image as AntdImage } from 'antd'

import fallbackImage from '../assets/img-placeholder.png'

const Image = (props) => {
  const imgStyle = {
    ...(props.style ?? []),
    objectFit: props.style?.objectFit ?? 'cover'
  }

  let classNames = [] 
  
  if (props.className) {
    classNames.push(props.className)
  }

  if (props.addOverlay) {
    classNames.push('dark-overlay')
  }

  if (props.overlayMode === 'darker') {
    classNames.push('darker-overlay')
  }

  return (
    <AntdImage
      className={classNames.length ? classNames.join(' ') : ''}
      src={props.src}
      alt={props.alt ?? props.title ?? 'Image'}
      title={props.title ?? props.alt ?? 'Image'}
      fallback={fallbackImage}
      placeholder={true}
      preview={props.preview ?? false}
      width={props.width ?? '100%'}
      height={props.height ?? '100%'}
      style={imgStyle}
    />
  );
}

export default Image;