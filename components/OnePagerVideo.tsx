import React from 'react';
import ReactPlayer from 'react-player'
import { Heading } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerVideoProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerVideo = ({
  onePagerData,
  isLoading,
}: OnePagerVideoProps) => {
  return !onePagerData.pitchVideoLink ? (
    null
  ) : (
    <ContentCard title='Pitch Video' isLoading={isLoading}>
      <Heading as='h2' size='md' marginRight='10px' alignItems='center'>
        <ReactPlayer url={onePagerData.pitchVideoLink} width='100%'/>
      </Heading>
    </ContentCard> 
  );
};
