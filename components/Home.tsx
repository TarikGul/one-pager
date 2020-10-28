import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/core';

import { Header } from './Header';
import { getAllPublicOnePagerData } from '../data/dataService';
import { OnePagerPublicData } from '../model/model';

/** Renders the home component. */
export const Home = () => {
  const [onePagers, setOnePagers]: [OnePagerPublicData[], any] = React.useState(
    []
  );

  // React hook to load data on first render
  React.useEffect(() => {
    getAllPublicOnePagerData().then((result) => {
      setOnePagers(result);
    });
  }, []);

  return (
    <Box>
      <Head>
        <title>One Pager Alpha</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <Box d='flex' justifyContent='center'>
        <Box w='xl'>
          <Heading as='h1' size='xl'>
            Welcome to One Pager Alpha!
          </Heading>

          <Heading as='h2' size='md'>
            View active OnePagers
          </Heading>

          <Divider />

          <OnePagerLinks onePagers={onePagers} />
        </Box>
      </Box>
    </Box>
  );
};

type OnePagerLinksProps = {
  onePagers: OnePagerPublicData[];
};

const OnePagerLinks = ({ onePagers }: OnePagerLinksProps) => {

  // Adds url to local storage
  const saveEventToLocalStorage = (url: string) => {
    let localStorage = window.localStorage;
    let storedUrls   = [url];
    let cachedUrls   = localStorage.getItem('urls');

    const data = JSON.parse(cachedUrls);

    if (!cachedUrls) {
      localStorage.setItem('urls', JSON.stringify(storedUrls));
    } else if(data.length < 2) {
      const updatedData = data.concat(storedUrls);

      localStorage.removeItem('urls');
      localStorage.setItem('urls', JSON.stringify(updatedData));
    } 
  }

  const OnePagerLink = (onePagerData: OnePagerPublicData) => {
    return (
      <Box key={onePagerData.companyName} marginBottom='10px'>
        <Link href='/[onePagerSlug]' as={`/${onePagerData.url}`}>
          <a onClick={() => saveEventToLocalStorage(onePagerData.url)}>
            {onePagerData.companyName}
          </a>
        </Link>
        <Text margin='0'>{onePagerData.briefDescription}</Text>
      </Box>
    )
  }

  return (
    <>
      {onePagers.map((onePagerData: OnePagerPublicData) => (
        OnePagerLink(onePagerData)
      ))}
    </>
  );
};
