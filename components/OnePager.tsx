import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Flex, Divider } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { getOnePagerData } from '../data/dataService';
import { EMPTY_ONE_PAGER } from '../data/onepagers';
import { ContentCard } from './ContentCard';
import { Header } from './Header';
import { OnePagerOverview } from './OnePagerOverview';
import { OnePagerFounders } from './OnePagerFounders';
import { OnePagerFinances } from './OnePagerFinances';
import { OnePagerCharts } from './OnePagerCharts';
import { OnePagerVideo } from './OnePagerVideo';
import { OnePagerModal } from './modal/Modal';

/** Renders a full one pager based on the onePagerUrl. */
export const OnePager = ({ onePagerUrl }: { onePagerUrl: string }) => {
  const [onePagerData, setOnePager]: [OnePagerData, any] = useState(
    EMPTY_ONE_PAGER
  );
  const [isLoading, setIsLoading]: [boolean, any] = useState(false);
  const [accessTrial, setAccessTrial]: [boolean, any] = useState(true);
  const [isMember, setIsMember]: [boolean, any] = useState(false);

  // Load data on first render.
  React.useEffect(() => {
    setIsLoading(true);
    getOnePagerData(onePagerUrl).then((result) => {
      setOnePager(result);
      setIsLoading(false);
    });

    // Retrieve all local storage data
    const localStorage       = window.localStorage;
    const cachedUrls         = localStorage.getItem('urls');
    const cachedAccessRights = localStorage.getItem('member');
    const parsedAccessRights = JSON.parse(cachedAccessRights);
    const urlData            = JSON.parse(cachedUrls);

    if (!urlData.includes(onePagerUrl) && urlData.length >= 2) {
      setAccessTrial(false)
    }

    // Thiis is a sanity check to make sure its not undefined
    if (!cachedAccessRights) {
      setIsMember(false)
    } else if(parsedAccessRights) {
      // 
      setIsMember(true)
    }

    console.log(isMember, accessTrial)
  }, []);

  // I put this in here to get rid of an extra divider when the video url is not 
  // available it could definitely be more dynamic and perform a check for all dividers 
  const videoUrlDivider: any = () => {
    if (onePagerData.pitchVideoLink) {
      return (
        <Diveder50 />
      )
    } else {
      return null
    }
  };

  return (
    <Box bg='#f2f4f5'>
      {
        accessTrial || isMember ? (
          null
        ) : (
          <OnePagerModal/>
        )
      }
      <Head>
        <title>{isLoading ? onePagerUrl : onePagerData.companyName}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <OnePagerOverview onePagerData={onePagerData} isLoading={isLoading} />

      <Diveder50 />

      <OnePagerFounders onePagerData={onePagerData} isLoading={isLoading} />

      <Diveder50 />

      <OnePagerFinances onePagerData={onePagerData} isLoading={isLoading} />

      <Diveder50 />

      <OnePagerVideo onePagerData={onePagerData} isLoading={isLoading} />
      {/* Checks to see if we have a url, if not will return no divider */}
      {videoUrlDivider}

      <OnePagerCharts onePagerData={onePagerData} isLoading={isLoading}/>

      <ContentCard isLoading={false}>
        <Flex justifyContent='center'>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </Flex>
      </ContentCard>
      <Box h='20'></Box>
    </Box>
  );
};

const Diveder50 = () => <Divider width='50%' />;
