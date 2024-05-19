import { Image as AntdImage } from 'antd'

import fallbackImage from '../assets/img-placeholder.png'

const Image = (props) => {
  const imgStyle = {
    ...(props.style ?? []),
    objectFit: props.style?.objectFit ?? 'cover'
  }

  return (
    <AntdImage
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