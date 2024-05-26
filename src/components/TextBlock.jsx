import React from 'react'

import { Typography } from 'antd';

const TextBlock = ({
  id = undefined,
  title,
  text
}) => {
  const { Title, Paragraph } = Typography;

  return (
    <div id={id} style={{ paddingTop: 48, paddingBottom: 96 }}>
      <div className='text-container'>
          <Title level={3}>{title}</Title>
          {Array.isArray(text) ? text.map((p) => <Paragraph>{p}</Paragraph>) : <Paragraph>{text}</Paragraph>}
      </div>
    </div>
  );
}

export default TextBlock;