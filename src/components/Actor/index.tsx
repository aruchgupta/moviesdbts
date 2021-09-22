import React from 'react';

import { Wrapper, Image } from './Actor.style';

type Props = {
  type: string;
  character: string;
  imageUrl: string;
  name: string;
};

const Actor: React.FC<Props> = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

export default Actor;
