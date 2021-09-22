import React from 'react';

import { Wrapper, Content, Text } from './HeroImage.style';

type Props = {
  image: string;
  title: string;
  text: string;
};

export const HeroImage: React.FC<Props> = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);
